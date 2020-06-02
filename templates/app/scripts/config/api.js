import { isDev } from '@/config';

export default {
  base: {
    getMenu: `/menu${isDev ? '' : '.json'}`
  },
  user: {
    RESTful: `/v1/user`,
    getList: `/user${isDev ? '' : '.json'}`
  }
};
