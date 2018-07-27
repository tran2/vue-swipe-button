<template>
  <div id="app">
    <SwipeButton
      ref="swipeButton"
      class="swipe-button"
      @actionConfirmed="onActionConfirmed"
    />
  </div>
</template>

<script>
import SwipeButton from './SwipeButton.vue';

export default {
  name: 'App',
  components: {
    SwipeButton,
  },
  methods: {
    onActionConfirmed() {
      setTimeout(() => {
        this.$refs.swipeButton.reset();
      }, 1000);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.swipe-button {
  width: 400px;
  margin: 0 auto;
  background-color: #17255A;
  border: 1px solid #17255A;
}
</style>
