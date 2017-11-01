import newWindow from '../views/components/new-window';

export default {
  install(Vue) {
    Vue.prototype.$newWindow = new Vue({
      components: {
        newWindow
      },
      data() {
        return {
          show: false,
          options: null,
          component: ''
        };
      },
      methods: {
        open(options = {}, component = '') {
          this.options = options;
          this.component = component;
          this.show = true;
        },
        close() {
          this.show = false;
        }
      },
      template: '<new-window v-if="show" :options="options" :component="component" @close="close"></new-window>'
    }).$mount('#new-window');
  }
};
