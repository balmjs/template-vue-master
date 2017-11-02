import { $http, callback } from './util';
import URL from './config';

export default {
  async getMenu() {
    let response = await $http.get(URL.base.getMenu);
    return response.data;
  }
};
