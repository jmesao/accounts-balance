import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import { BASE_SERVER_URL } from './constants';

Vue.use(new VueSocketIO({
  debug: true,
  connection: BASE_SERVER_URL,
}));
