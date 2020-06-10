import axios from 'axios';
import bus from '@/store/bus';
import API from '@/config/api';
import RestService from './service';

class UserService extends RestService {
  constructor() {
    super(API.user.RESTful);
  }

  async getAllUsers() {
    bus.$emit('on-loading');

    return await axios.get(API.user.getList);
  }
}

export default new UserService();
