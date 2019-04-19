import { shallowMount } from '@vue/test-utils';
import SwipeButton from '@/SwipeButton.vue';

describe('SwipeButton.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(SwipeButton);
    expect(wrapper.isVueInstance()).toBe(true);
  });

  describe('startSwipe', () => {
    let wrapper;
    let startEvent;
    let slideButtonStartRect;
    let sliderRect;
    beforeEach(() => {
      slideButtonStartRect = {
        bottom: 141,
        height: 80,
        left: 640,
        right: 691.96875,
        top: 61,
        width: 51.96875,
        x: 640,
        y: 61,
      };
      sliderRect = {
        bottom: 141,
        height: 80,
        left: 640,
        right: 1040,
        top: 61,
        width: 400,
        x: 640,
        y: 61,
      };

      startEvent = {
        clientX: 650,
      };
      wrapper = shallowMount(SwipeButton, {
        attachToDocument: false,
      });
      wrapper.vm.$refs.slideButton.getClientRects = jest.fn()
        .mockReturnValue([slideButtonStartRect]);
      wrapper.vm.$refs.slider.getClientRects = jest.fn().mockReturnValue([sliderRect]);
      wrapper.vm.startSwipe(startEvent);
    });

    it('sets up starting point', () => {
      expect(wrapper.vm.initialMouseX).toEqual(startEvent.clientX);
      expect(wrapper.vm.endPoint).toEqual(sliderRect.right);
      expect(wrapper.vm.initialSliderWidth).toEqual(10);
      expect(wrapper.vm.initialSlideButtonPosition).toEqual(slideButtonStartRect.x);
    });
  });
});
