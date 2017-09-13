import baseApi from './base';
import userApi from './user';

const API = Object.assign({}, baseApi, userApi);

export default API;
