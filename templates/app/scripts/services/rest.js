import { useHttp } from '@/plugins/http';

class RestService {
  constructor(url) {
    this.$http = useHttp();
    this.url = url;
  }

  async create(data) {
    return await this.$http.post(this.url, data);
  }

  async delete(id) {
    return await this.$http.delete(`${this.url}/${id}`);
  }

  async update(id, data) {
    return await this.$http.put(`${this.url}/${id}`, data);
  }

  async getAll(params) {
    return await this.$http.get(this.url, {
      params
    });
  }

  async getOne(id) {
    return await this.$http.get(`${this.url}/${id}`);
  }
}

export default RestService;
