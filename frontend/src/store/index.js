import Vue from 'vue';
import Vuex from 'vuex';

function createStore(vueInstance) {
  vueInstance.use(Vuex);
  const store = new Vuex.Store({
    state: {
      rate: 0,
    },
    mutations: {
      setRate(state, value) {
        state.rate = value;
      },
    },
    actions: {
    },
    modules: {
    },
  });

  return store;
}

export default createStore(Vue);
