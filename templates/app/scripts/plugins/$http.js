import axios from 'axios';
import bus from '../store/bus';
import { STATUS_OK } from '../config/constants';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    bus.$emit('loaded');

    // Your service logic
    if (typeof response.data === 'object') {
      let { code, data, message } = response.data;
      if (code && +code !== STATUS_OK) {
        bus.$emit('message', message);
        return Promise.reject({ code, message });
      } else {
        return Promise.resolve(data);
      }
    }
  },
  error => {
    // TODO: error handler
    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$http = axios;
  }
};
