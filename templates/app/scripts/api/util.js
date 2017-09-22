import UI from '../store/event';
import { OK } from '../config/contants';

export const callback = ({ code, data, message }) => {
  let result = {
    success: false,
    data,
    message
  };

  if (code === OK) {
    result.success = true;
  } else {
    // Need BalmUI
    if (UI.$alert) { // for desktop
      UI.$alert(message);
    } else if (UI.$toast) { // for mobile
      UI.$toast(message);
    } else {
      alert(message);
    }
  }

  return result;
};
