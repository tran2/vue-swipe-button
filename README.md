# vue-swipe-button

# Demo
https://tran2.github.io/vue-swipe-button/

# Install

```
npm install --save vue-swipe-button
```

# Usage
Import SwipeButton and its css.

```javascript
import SwipeButton from 'vue-swipe-button'
import 'vue-swipe-button/dist/swipeButton.css'
```

Sample usage:

```javascript
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
import SwipeButton from 'vue-swipe-button'
import 'vue-swipe-button/dist/swipeButton.css'

export default {
  name: 'app',
  components: {
    SwipeButton
  },
  methods: {
    onActionConfirmed() {
      setTimeout(() => {
        this.$refs.swipeButton.reset();
      }, 1000);
    },
  },

}
</script>

<style>
.swipe-button {
  width: 500px;
  background-color: #17255A;
  border: 1px solid #17255A;
}
</style>

```

## Project setup for development
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build:component
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Build docs
```
npm run build:docs
in docs/index.html
make sure the paths don't have '/' at the beginning
ex: /js/app.js should be js/app.js
```

