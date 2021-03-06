import Vue from 'vue';
import Vuex from 'vuex';

function createStore(vueInstance) {
  vueInstance.use(Vuex);
  const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
  });

  return store;
}

export default createStore(Vue);
