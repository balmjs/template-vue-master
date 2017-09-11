import axios from 'axios';
// import UI from '../store/event';
import URL from './config';

const callback = (data) => { // {code, data, message}
  // NOTE:
  // if (code === 200) {
  //   // do something
  //   return data;
  // } else {
  //   UI.$alert(message);
  // }

  return data; // Just for demo
};

const API = {
  async getMenu() {
    let response = await axios.get(URL.global.getMenu);
    return callback(response.data);
  },
  async getAllUsers() {
    let response = await axios.get(URL.user.getList);
    return callback(response.data);
  }
};

export default API;
