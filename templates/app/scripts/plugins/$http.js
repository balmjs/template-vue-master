import axios from 'axios';
import bus from '@/store/bus';
import { STATUS_OK } from '@/config';

axios.defaults.baseURL = '/api';

const errorHandler = ({ message }) => {
  bus.$emit('error', message);
};

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
    bus.$emit('off-loading');

    // Your service logic
    const { code, message, data } = response.data;
    if (code === STATUS_OK) {
      return Promise.resolve(data);
    } else {
      errorHandler({ code, message });
      return Promise.reject({ code, message });
    }
  },
  error => {
    bus.$emit('off-loading');

    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$http = axios;
  }
};
