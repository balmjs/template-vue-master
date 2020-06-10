import { isDev } from '@/config';

export default {
  base: {
    getMenu: `/menu${isDev ? '' : '.json'}`
  },
  user: {
    RESTful: `/users`
  }
};
