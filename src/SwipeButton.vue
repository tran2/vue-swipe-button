<template>
  <div :style="{'background-color': sliderBackgroundColor}">
    <div
      id="slider"
      ref="slider"
      :class="sliderClass"
      :style="{'color': textColor}"
      >
      <!--
        the overlay is the dark color stripe that will follow
        the button
      -->
      <div
      id="overlay"
      ref="overlay"
      :style="[overlayStyle, {'background-color': overlayColor}]"
      >
      </div>
        <div
          ref="slideButton"
          class="slide-button"
          :style="[{'background-color': buttonColor}, slideButtonStyle]"
          @mousedown="startSwipe"
          @mousemove="continueSwipe"
          @mouseup="endSwipe"
          @touchstart="startSwipe"
          @touchmove="continueSwipe"
          @touchend="endSwipe">
          <div class="button-text">{{ buttonText }}</div>
        </div>
        <div class="slide-text">
          {{ instructionText }}
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SwipeButton',
  props: {
    initialInstructionText: {
      type: String,
      default: 'Slide to confirm',
    },
    completedText: {
      type: String,
      default: 'Confirmed',
    },
    buttonText: {
      type: String,
      default: '>>>',
    },
    sliderBackgroundColor: {
      type: String,
      default: '#17255A',
    },
    overlayColor: {
      type: String,
      default: '#FFFFFF',
    },
    buttonColor: {
      type: String,
      default: '#D88373',
    },
    textColor: {
      type: String,
      default: '#F5E2C8',
    },
  },
  data() {
    return {
      initialMouseX: 0,
      currentMouseX: 0,
      startDrag: false,
      endPoint: 0,
      initialSliderWidth: 0,
      initialSlideButtonPosition: 0,
      instructionText: this.initialInstructionText,
      overlayStyle: {
        width: '0px',
      },
      slideButtonStyle: {
        left: '0px',
      },
      sliderClass: '',
      completed: false,
    };
  },
  methods: {
    startSwipe(event) {
      if (this.completed) {
        return;
      }
      // this will be used to calculate the offset to increase the width
      // of the slider
      this.initialMouseX = this.getMouseXPosFromEvent(event);
      // once our slider's x button position >= slider - button's width,
      // the action is confirmed
      this.endPoint = this.getEndingPoint();

      this.calculateSliderInitialWidth();
      this.calculateSlideButtonInitialPosition();

      this.updateSlideButton(0);
      this.updateSlider(0);
      this.startDrag = true;
      // for transition animation
      this.sliderClass = 'started';
    },
    getEndingPoint() {
      const clientRects = this.$refs.slider.getClientRects()[0];
      return clientRects.right;
    },
    calculateSliderInitialWidth() {
      const sliderLeftPos = this.$refs.slider.getClientRects()[0].x;
      this.initialSliderWidth = this.initialMouseX - sliderLeftPos;
      if (this.initialSliderWidth < 0) {
        this.initialSliderWidth = 0;
      }
    },
    calculateSlideButtonInitialPosition() {
      this.initialSlideButtonPosition = this.$refs.slider.getClientRects()[0].x;
    },
    continueSwipe(event) {
      if (!this.startDrag) {
        return;
      }
      this.currentMouseX = this.getMouseXPosFromEvent(event);
      const delta = this.currentMouseX - this.initialMouseX;
      this.updateSlider(delta);
      this.updateSlideButton(delta);

      if (this.sliderReachedEndPoint()) {
        this.endSwipe();
      }
    },
    endSwipe() {
      this.startDrag = false;
      if (this.sliderReachedEndPoint()) {
        this.sliderClass = 'completed';
        this.overlayStyle.width = `${this.$refs.slider.getClientRects()[0].width}px`;
        this.actionConfirmed();
      } else {
        this.sliderClass = '';
        this.overlayStyle.width = '0px';
        this.slideButtonStyle.left = '0px';
      }
    },
    getMouseXPosFromEvent(event) {
      return event.clientX || event.touches[0].pageX;
    },
    updateSlider(delta) {
      const sliderWidth = this.getSliderWidth();
      let newWidth = this.initialSliderWidth + delta;
      // prevent overflow
      if (newWidth > sliderWidth) {
        newWidth = sliderWidth;
      }
      this.overlayStyle.width = `${newWidth}px`;
    },
    getSliderWidth() {
      return this.$refs.slider.getClientRects()[0].width;
    },
    updateSlideButton(delta) {
      if (delta < 0) {
        return;
      }
      this.slideButtonStyle.left = `${delta}px`;
      // prevent overflow
      if (this.sliderReachedEndPoint()) {
        const buttonLeftPos = this.getSliderWidth() - this.getButtonWidth();
        this.slideButtonStyle.left = `${buttonLeftPos}px`;
      }
    },
    getButtonWidth() {
      const slideButtonRect = this.$refs.slideButton.getClientRects()[0];
      return slideButtonRect.width;
    },
    sliderReachedEndPoint() {
      const slideButtonRect = this.$refs.slideButton.getClientRects()[0];
      return slideButtonRect.right >= this.endPoint;
    },
    actionConfirmed() {
      // ensure the event is only fire once
      if (!this.completed) {
        this.completed = true;
        this.instructionText = this.completedText;
        this.$emit('actionConfirmed');
      }
    },
    reset() {
      this.completed = false;
      this.instructionText = this.initialInstructionText;
      this.sliderClass = '';
      this.updateSlider(0);
      this.updateSlideButton(0);
      this.slideButtonStyle.left = '0px';
    },
    initEndPoint() {
      this.endPoint = this.getEndingPoint();
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.continueSwipe);
    document.addEventListener('mouseup', this.endSwipe);
    this.initEndPoint();
  },
  destroyed() {
    document.removeEventListener('mousemove', this.continueSwipe);
    document.removeEventListener('mouseup', this.endSwipe);
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin nonselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

#slider {
  position: relative;
  height: 80px;
  @include flex-center;
  @include nonselect;
  font-family: "Avenir Next";
}

#overlay {
  /* this defines the return animation when user touchout */
  transition: 0.5s ease;
  position: absolute;
  left: 0px;
  width: 100px;
  height: 80px;
  @include flex-center;
  @include nonselect;
}

.slide-text {
  @include nonselect;
}

.started {
  #overlay, .slide-button {
    transition: none;
  }
}

.slide-button {
  transition: 0.5s ease;
  height: 80px;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  @include flex-center;

  .carrot {
    width: 25px;
    height: 25px;
    margin-top: 2px;
    margin-left: 5px;
  }
}
</style>
