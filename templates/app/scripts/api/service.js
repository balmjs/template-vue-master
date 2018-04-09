import { http, callback } from './util';

class RestService {
  constructor(url) {
    this.url = url;
  }

  async create(data) {
    return callback(
      await http.post(this.url, {
        data
      })
    );
  }

  async delete(id) {
    return callback(await http.delete(`${this.url}/${id}`));
  }

  async update(id, data) {
    return callback(
      await http.put(`${this.url}/${id}`, {
        data
      })
    );
  }

  async getAll(params) {
    return callback(
      await http.get(this.url, {
        params
      })
    );
  }

  async getOne(id) {
    return callback(await http.get(`${this.url}/${id}`));
  }
}

export default RestService;
