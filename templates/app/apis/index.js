import { Server } from 'miragejs';
import { isDev } from '@/config';

if (isDev) {
  const ApiRegExp = /^\/api\//;

  const server = new Server({
    routes() {
      this.namespace = '/api';

      this.get('/menu', () => {
        return {
          code: 200,
          message: 'OK',
          data: [
            {
              name: 'Home',
              url: '/home'
            },
            {
              name: 'About',
              url: '/about'
            },
            {
              name: 'User',
              url: '/user'
            }
          ]
        };
      });

      this.get('/user', () => {
        return {
          code: 200,
          message: 'OK',
          data: [
            {
              id: 1,
              name: '路人甲'
            },
            {
              id: 2,
              name: '路人乙'
            },
            {
              id: 3,
              name: '路人丙'
            },
            {
              id: 4,
              name: '路人丁'
            }
          ]
        };
      });
    }
  });

  server.passthrough(request => {
    return !ApiRegExp.test(request.url);
  });
}
