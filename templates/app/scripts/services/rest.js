import axios from 'axios';
import bus from '@/store/bus';

class RestService {
  constructor(url) {
    this.url = url;
  }

  async create(data) {
    bus.$emit('on-loading');

    return await axios.post(this.url, data);
  }

  async delete(id) {
    bus.$emit('on-loading');

    return await axios.delete(`${this.url}/${id}`);
  }

  async update(id, data) {
    bus.$emit('on-loading');

    return await axios.put(`${this.url}/${id}`, data);
  }

  async getAll(params) {
    bus.$emit('on-loading');

    return await axios.get(this.url, {
      params
    });
  }

  async getOne(id) {
    bus.$emit('on-loading');

    return await axios.get(`${this.url}/${id}`);
  }
}

export default RestService;
