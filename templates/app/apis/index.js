import { isDev } from '@/config';
import { Server, Model } from 'miragejs';
import { getBase } from './base';
import { setUser, getUser } from './user';

if (isDev) {
  const ApiRegExp = /^\/api\//;

  const server = new Server({
    models: {
      user: Model
    },

    seeds(server) {
      setUser(server);
      // More data
    },

    routes() {
      this.namespace = '/api';

      getBase(this);
      getUser(this);
    }
  });

  server.passthrough((request) => {
    return !ApiRegExp.test(request.url);
  });
}
