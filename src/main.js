import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import store from './store';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);
Vue.use(ClientTable);

new Vue({
  el: '#app',
  template: '<app></app>',
  store,
  components: { App }
});
