import axios from 'axios';
import { callback } from './util';
import URL from './config';

export default {
  async getMenu() {
    let response = await axios.get(URL.base.getMenu);
    return response.data;
  }
};
