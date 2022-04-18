import RestService from '@/services/rest';
import APIS from '@/apis';

class DemoService extends RestService {
  constructor() {
    super(APIS.demo.RESTful);
  }
}

export default new DemoService();
