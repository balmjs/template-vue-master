import axios from 'axios';
import bus from '@/store/bus';
import API from '@/config/api';

export default {
  async getMenu() {
    bus.$emit('on-loading');

    return await axios.get(API.base.getMenu);
  }
};
