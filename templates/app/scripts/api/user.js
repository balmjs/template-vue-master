import axios from 'axios';
import URL from './config';
import RestService from './service';

class UserService extends RestService {
  constructor() {
    super(URL.user.user);
  }

  async getAllUsers() {
    return await axios.get(URL.user.getList);
  }
}

export default new UserService();
