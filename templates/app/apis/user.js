const USERS = '甲乙丙丁';

export function setUser(server) {
  USERS.split('').forEach((item) => {
    let user = {
      name: `路人${item}`
    };

    server.create('user', user);
  });
}

export function getUser(server) {
  server.get('/users', ({ users }) => {
    return {
      code: 200,
      message: 'all',
      data: users.all().models
    };
  });

  server.get('/users/:id', ({ users }, request) => {
    let id = request.params.id;

    return {
      code: 200,
      message: 'one',
      data: users.find(id)
    };
  });

  server.post('/users', function ({ users }, request) {
    let data = JSON.parse(request.requestBody);

    const user = users.create(data);

    return {
      code: 200,
      message: 'created',
      data: user.id
    };
  });

  server.put('/users/:id', ({ users }, request) => {
    let id = request.params.id;
    let data = JSON.parse(request.requestBody);

    return {
      code: 200,
      message: 'updated',
      data: users.find(id).update(data)
    };
  });

  server.del('/users/:id', (schema, request) => {
    let id = request.params.id;

    schema.users.find(id).destroy();

    return {
      code: 200,
      message: 'deleted'
    };
  });
}
