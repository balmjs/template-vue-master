import axios from 'axios';
import API from '@/config/api';

export default {
  async getMenu() {
    return await axios.get(API.base.getMenu);
  }
};
