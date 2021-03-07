import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
// TODO.- Mock vue-socket.io module and add more tests
import VueSocketIO from 'vue-socket.io';

import AccountsView from './accounts.vue';

describe('AccountsView', () => {
  function mountAccountsView(props, state = {}, mutations = {}) {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(new VueSocketIO({
      debug: true,
      connection: 'http://localhost',
    }));

    const store = new Vuex.Store({
      state,
      mutations,
    });

    return shallowMount(AccountsView, {
      localVue,
      propsData: {
        ...props,
      },
      store,
    });
  }

  it('should render header without items on the accounts balance table', () => {
    const wrapper = mountAccountsView({});
    expect(wrapper.element).toMatchSnapshot();
  });
});
