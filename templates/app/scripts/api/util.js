import UI from '../store/event';

export const callback = ({ code, data, message }) => {
  let result = {
    success: false,
    data
  };

  if (code === 200) {
    result.success = true;
  } else {
    UI.$alert(message); // Need BalmUI
  }

  return result;
};
