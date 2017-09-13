import axios from 'axios';
import { callback } from './util';
import URL from './config';

export default {
  async getAllUsers() {
    let response = await axios.get(URL.user.getList);
    return response.data;
  }
};
