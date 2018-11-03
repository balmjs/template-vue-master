import axios from 'axios';

class RestService {
  constructor(url) {
    this.url = url;
  }

  async create(data) {
    return await axios.post(this.url, {
      data
    });
  }

  async delete(id) {
    return await axios.delete(`${this.url}/${id}`);
  }

  async update(id, data) {
    return await axios.put(`${this.url}/${id}`, {
      data
    });
  }

  async getAll(params) {
    return await axios.get(this.url, {
      params
    });
  }

  async getOne(id) {
    return await axios.get(`${this.url}/${id}`);
  }
}

export default RestService;
