import * as $http from 'axios';
import UI from '../store/event';
import { OK } from '../config/constants';

const callback = ({ code, data, message }) => {
  let result = {
    success: false,
    data,
    message
  };

  if (code === OK) {
    result.success = true;
  } else {
    // Need BalmUI
    if (UI.$alert) {
      // for desktop
      UI.$alert(message);
    } else if (UI.$toast) {
      // for mobile
      UI.$toast(message);
    } else {
      alert(message);
    }
  }

  return result;
};

export { $http, UI, callback };
