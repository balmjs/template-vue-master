import { $http, callback } from './util';
import URL from './config';

export default {
  async getAllUsers() {
    let response = await $http.get(URL.user.getList);
    return response.data;
  }
};
