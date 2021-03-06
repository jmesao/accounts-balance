import { createLocalVue, shallowMount } from '@vue/test-utils';

import AccountsView from './accounts.vue';

describe('AccountsView', () => {
  function mountAccountsView() {
    const localVue = createLocalVue();

    return shallowMount(AccountsView, {
      localVue,
    });
  }

  it('should render correctly', () => {
    const wrapper = mountAccountsView();
    expect(wrapper.element).toMatchSnapshot();
  });
});
