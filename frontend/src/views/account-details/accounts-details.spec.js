import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
// TODO.- Mock vue-socket.io module and add more tests
import VueSocketIO from 'vue-socket.io';

import AccountDetailsView from './account-details.vue';

describe('AccountDetailsView', () => {
  function mountAccountDetailsView(mountOpts) {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(new VueSocketIO({
      debug: true,
      connection: 'http://localhost',
    }));

    const store = new Vuex.Store({
      state: {},
      mutations: {},
    });

    return shallowMount(AccountDetailsView, {
      localVue,
      ...mountOpts,
      store,
    });
  }

  it('should render without account nor items on the account statements table', () => {
    const wrapper = mountAccountDetailsView({
      mocks: {
        $route: {
          name: 'account-details',
          params: {
            id: 1,
            account: null,
          },
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
