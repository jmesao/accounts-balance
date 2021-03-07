import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import HeaderContainer from './header-container.vue';

describe('HeaderContainer', () => {
  function mountHeaderContainer(props, mountOpts) {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    return shallowMount(HeaderContainer, {
      localVue,
      propsData: {
        ...props,
      },
      ...mountOpts,
    });
  }

  it('should render properly', () => {
    const wrapper = mountHeaderContainer({
      title: 'Test',
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render properly with slot', () => {
    const wrapper = mountHeaderContainer({ title: 'Test' }, {
      slots: { default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
