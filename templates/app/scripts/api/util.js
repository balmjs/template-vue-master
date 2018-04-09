import * as http from 'axios';
import bus from '../store/bus';
import { STATUS_OK } from '../config/constants';

const callback = ({ code, data, message }) => {
  let result = {
    success: false,
    data,
    message
  };

  if (code === STATUS_OK) {
    result.success = true;
  } else {
    // You need BalmUI Lite (http://mdl.balmjs.com)
    if (bus.$alert) {
      // For desktop
      bus.$alert(message);
    } else if (bus.$toast) {
      // For mobile
      bus.$toast(message);
    } else {
      alert(message);
    }
  }

  return result;
};

export { http, bus, callback };
