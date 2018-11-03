import axios from 'axios';
import URL from './config';

export default {
  async getMenu() {
    return await axios.get(URL.base.getMenu);
  }
};
