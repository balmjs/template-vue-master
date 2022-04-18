import axios from 'axios';
import { API_ENDPOINT } from '@/config';

axios.defaults.baseURL = API_ENDPOINT;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // TODO: custom response handler
    return Promise.resolve(response.data);
  },
  (error) => {
    // TODO: custom error handler
    return Promise.reject(error);
  }
);

const useHttp = () => axios;

export default {
  install(Vue) {
    Vue.prototype.$http = axios;
  }
};
export { useHttp };
