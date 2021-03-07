import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
// TODO.- Mock vue-socket.io module and add more tests
import VueSocketIO from 'vue-socket.io';

import TopBar from './top-bar.vue';

describe('TopBar', () => {
  function mountTopBar(props, mutations = {}) {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(new VueSocketIO({
      debug: true,
      connection: 'http://localhost',
    }));

    const store = new Vuex.Store({
      state: {
        rate: 0,
      },
      mutations: {
        setRate: jest.fn(),
      },
    });

    return shallowMount(TopBar, {
      localVue,
      propsData: {
        ...props,
      },
      store,
    });
  }

  it('should render properly without rate', () => {
    const wrapper = mountTopBar({});
    expect(wrapper.element).toMatchSnapshot();
  });
});
