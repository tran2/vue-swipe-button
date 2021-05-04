(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["swipeButton"] = factory();
	else
		root["swipeButton"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9c97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeButton_vue_vue_type_style_index_0_id_6052811e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f71d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeButton_vue_vue_type_style_index_0_id_6052811e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeButton_vue_vue_type_style_index_0_id_6052811e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f71d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4df55778-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/SwipeButton.vue?vue&type=template&id=6052811e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({'background-color': _vm.sliderBackgroundColor})},[_c('div',{ref:"slider",class:_vm.sliderClass,style:({'color': _vm.textColor}),attrs:{"id":"slider"}},[_c('div',{ref:"overlay",style:([_vm.overlayStyle, {'background-color': _vm.overlayColor}]),attrs:{"id":"overlay"}}),_c('div',{ref:"slideButton",staticClass:"slide-button",style:([{'background-color': _vm.buttonColor}, _vm.slideButtonStyle]),on:{"mousedown":_vm.startSwipe,"mousemove":_vm.continueSwipe,"mouseup":_vm.endSwipe,"touchstart":_vm.startSwipe,"touchmove":_vm.continueSwipe,"touchend":_vm.endSwipe}},[_c('div',{staticClass:"button-text"},[_vm._v(_vm._s(_vm.buttonText))])]),_c('div',{staticClass:"slide-text"},[_vm._v(" "+_vm._s(_vm.instructionText)+" ")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/SwipeButton.vue?vue&type=template&id=6052811e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/SwipeButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SwipeButtonvue_type_script_lang_js_ = ({
  name: 'SwipeButton',
  props: {
    initialInstructionText: {
      type: String,
      default: 'Slide to confirm'
    },
    completedText: {
      type: String,
      default: 'Confirmed'
    },
    buttonText: {
      type: String,
      default: '>>>'
    },
    sliderBackgroundColor: {
      type: String,
      default: '#17255A'
    },
    overlayColor: {
      type: String,
      default: '#FFFFFF'
    },
    buttonColor: {
      type: String,
      default: '#D88373'
    },
    textColor: {
      type: String,
      default: '#F5E2C8'
    }
  },
  data: function data() {
    return {
      initialMouseX: 0,
      currentMouseX: 0,
      startDrag: false,
      endPoint: 0,
      initialSliderWidth: 0,
      initialSlideButtonPosition: 0,
      instructionText: this.initialInstructionText,
      overlayStyle: {
        width: '0px'
      },
      slideButtonStyle: {
        left: '0px'
      },
      sliderClass: '',
      completed: false
    };
  },
  methods: {
    startSwipe: function startSwipe(event) {
      if (this.completed) {
        return;
      } // this will be used to calculate the offset to increase the width
      // of the slider


      this.initialMouseX = this.getMouseXPosFromEvent(event); // once our slider's x button position >= slider - button's width,
      // the action is confirmed

      this.endPoint = this.getEndingPoint();
      this.calculateSliderInitialWidth();
      this.calculateSlideButtonInitialPosition();
      this.updateSlideButton(0);
      this.updateSlider(0);
      this.startDrag = true; // for transition animation

      this.sliderClass = 'started';
    },
    getEndingPoint: function getEndingPoint() {
      var clientRects = this.$refs.slider.getClientRects()[0];
      return clientRects.right;
    },
    calculateSliderInitialWidth: function calculateSliderInitialWidth() {
      var sliderLeftPos = this.$refs.slider.getClientRects()[0].x;
      this.initialSliderWidth = this.initialMouseX - sliderLeftPos;

      if (this.initialSliderWidth < 0) {
        this.initialSliderWidth = 0;
      }
    },
    calculateSlideButtonInitialPosition: function calculateSlideButtonInitialPosition() {
      this.initialSlideButtonPosition = this.$refs.slider.getClientRects()[0].x;
    },
    continueSwipe: function continueSwipe(event) {
      if (!this.startDrag) {
        return;
      }

      this.currentMouseX = this.getMouseXPosFromEvent(event);
      var delta = this.currentMouseX - this.initialMouseX;
      this.updateSlider(delta);
      this.updateSlideButton(delta);

      if (this.sliderReachedEndPoint()) {
        this.endSwipe();
      }
    },
    endSwipe: function endSwipe() {
      this.startDrag = false;

      if (this.sliderReachedEndPoint()) {
        this.sliderClass = 'completed';
        this.overlayStyle.width = "".concat(this.$refs.slider.getClientRects()[0].width, "px");
        this.actionConfirmed();
      } else {
        this.sliderClass = '';
        this.overlayStyle.width = '0px';
        this.slideButtonStyle.left = '0px';
      }
    },
    getMouseXPosFromEvent: function getMouseXPosFromEvent(event) {
      return event.clientX || event.touches[0].pageX;
    },
    updateSlider: function updateSlider(delta) {
      var sliderWidth = this.getSliderWidth();
      var newWidth = this.initialSliderWidth + delta; // prevent overflow

      if (newWidth > sliderWidth) {
        newWidth = sliderWidth;
      }

      this.overlayStyle.width = "".concat(newWidth, "px");
    },
    getSliderWidth: function getSliderWidth() {
      return this.$refs.slider.getClientRects()[0].width;
    },
    updateSlideButton: function updateSlideButton(delta) {
      if (delta < 0) {
        return;
      }

      this.slideButtonStyle.left = "".concat(delta, "px"); // prevent overflow

      if (this.sliderReachedEndPoint()) {
        var buttonLeftPos = this.getSliderWidth() - this.getButtonWidth();
        this.slideButtonStyle.left = "".concat(buttonLeftPos, "px");
      }
    },
    getButtonWidth: function getButtonWidth() {
      var slideButtonRect = this.$refs.slideButton.getClientRects()[0];
      return slideButtonRect.width;
    },
    sliderReachedEndPoint: function sliderReachedEndPoint() {
      var slideButtonRect = this.$refs.slideButton.getClientRects()[0];
      return slideButtonRect.right >= this.endPoint;
    },
    actionConfirmed: function actionConfirmed() {
      // ensure the event is only fire once
      if (!this.completed) {
        this.completed = true;
        this.instructionText = this.completedText;
        this.$emit('actionConfirmed');
      }
    },
    reset: function reset() {
      this.completed = false;
      this.instructionText = this.initialInstructionText;
      this.sliderClass = '';
      this.updateSlider(0);
      this.updateSlideButton(0);
      this.slideButtonStyle.left = '0px';
    },
    initEndPoint: function initEndPoint() {
      this.endPoint = this.getEndingPoint();
    }
  },
  mounted: function mounted() {
    document.addEventListener('mousemove', this.continueSwipe);
    document.addEventListener('mouseup', this.endSwipe);
    this.initEndPoint();
  },
  destroyed: function destroyed() {
    document.removeEventListener('mousemove', this.continueSwipe);
    document.removeEventListener('mouseup', this.endSwipe);
  }
});
// CONCATENATED MODULE: ./src/SwipeButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_SwipeButtonvue_type_script_lang_js_ = (SwipeButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/SwipeButton.vue?vue&type=style&index=0&id=6052811e&lang=scss&scoped=true&
var SwipeButtonvue_type_style_index_0_id_6052811e_lang_scss_scoped_true_ = __webpack_require__("9c97");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/SwipeButton.vue






/* normalize component */

var component = normalizeComponent(
  src_SwipeButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6052811e",
  null
  
)

/* harmony default export */ var SwipeButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (SwipeButton);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=swipeButton.umd.js.map