import { DEBUG } from '@/config';

export default {
  base: {
    getMenu: `/menu${DEBUG ? '' : '.json'}`
  },
  user: {
    RESTful: `/v1/user`,
    getList: `/user${DEBUG ? '' : '.json'}`
  }
};
