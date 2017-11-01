<template>
  <div class="new-window">
    <!-- Need BalmUI: -->
    <!-- <ui-icon class="close" @click.native="$emit('close')">close</ui-icon> -->
    <i class="close" @click="$emit('close')">✖️</i>
    <component :is="currentView" :options="options"></component>
  </div>
</template>

<script>
import pageA from '../window/a';
import pageB from '../window/b';

const DefaultView = {
  template: '<div>New Window</div>'
};

export default {
  name: 'new-window',
  components: {
    pageA,
    pageB
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    component: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentView: this.component || DefaultView
    }
  }
};
</script>
