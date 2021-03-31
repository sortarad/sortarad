/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@headlessui/vue/dist/headlessui.esm.js":
/*!*************************************************************!*
  !*** ./node_modules/@headlessui/vue/dist/headlessui.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Listbox": () => /* binding */ Listbox,
/* harmony export */   "ListboxButton": () => /* binding */ ListboxButton,
/* harmony export */   "ListboxLabel": () => /* binding */ ListboxLabel,
/* harmony export */   "ListboxOption": () => /* binding */ ListboxOption,
/* harmony export */   "ListboxOptions": () => /* binding */ ListboxOptions,
/* harmony export */   "Menu": () => /* binding */ Menu,
/* harmony export */   "MenuButton": () => /* binding */ MenuButton,
/* harmony export */   "MenuItem": () => /* binding */ MenuItem,
/* harmony export */   "MenuItems": () => /* binding */ MenuItems,
/* harmony export */   "Switch": () => /* binding */ Switch,
/* harmony export */   "SwitchGroup": () => /* binding */ SwitchGroup,
/* harmony export */   "SwitchLabel": () => /* binding */ SwitchLabel
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");

  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, match);
  }

  throw error;
}

function render(_ref) {
  var _slots$default;

  var props = _ref.props,
      attrs = _ref.attrs,
      slots = _ref.slots,
      slot = _ref.slot;

  var as = props.as,
      passThroughProps = _objectWithoutPropertiesLoose(props, ["as"]);

  var children = (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, slot);

  if (as === 'template') {
    if (Object.keys(passThroughProps).length > 0 || 'class' in attrs) {
      var _ref2 = children !== null && children !== void 0 ? children : [],
          firstChild = _ref2[0],
          other = _ref2.slice(1);

      if (other.length > 0) throw new Error('You should only render 1 child or use the `as="..."` prop');
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(firstChild, passThroughProps);
    }

    return children;
  }

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(as, passThroughProps, children);
}

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  return generateId();
}

// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));

var MenuStates;

(function (MenuStates) {
  MenuStates[MenuStates["Open"] = 0] = "Open";
  MenuStates[MenuStates["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));

var Focus;

(function (Focus) {
  Focus[Focus["FirstItem"] = 0] = "FirstItem";
  Focus[Focus["PreviousItem"] = 1] = "PreviousItem";
  Focus[Focus["NextItem"] = 2] = "NextItem";
  Focus[Focus["LastItem"] = 3] = "LastItem";
  Focus[Focus["SpecificItem"] = 4] = "SpecificItem";
  Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));

var MenuContext = /*#__PURE__*/Symbol('MenuContext');

function useMenuContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(MenuContext);

  if (context === undefined) {
    var err = new Error("<" + component + " /> is missing a parent <Menu /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuContext);
    throw err;
  }

  return context;
}

var Menu = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var menuState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(MenuStates.Closed);
    var buttonRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var itemsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var searchQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var activeItemIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    function calculateActiveItemIndex(focus, id) {
      var _activeItemIndex$valu, _match;

      if (items.value.length <= 0) return null;
      var currentActiveItemIndex = (_activeItemIndex$valu = activeItemIndex.value) !== null && _activeItemIndex$valu !== void 0 ? _activeItemIndex$valu : -1;
      var nextActiveIndex = match(focus, (_match = {}, _match[Focus.FirstItem] = function () {
        return items.value.findIndex(function (item) {
          return !item.dataRef.disabled;
        });
      }, _match[Focus.PreviousItem] = function () {
        var idx = items.value.slice().reverse().findIndex(function (item, idx, all) {
          if (currentActiveItemIndex !== -1 && all.length - idx - 1 >= currentActiveItemIndex) return false;
          return !item.dataRef.disabled;
        });
        if (idx === -1) return idx;
        return items.value.length - 1 - idx;
      }, _match[Focus.NextItem] = function () {
        return items.value.findIndex(function (item, idx) {
          if (idx <= currentActiveItemIndex) return false;
          return !item.dataRef.disabled;
        });
      }, _match[Focus.LastItem] = function () {
        var idx = items.value.slice().reverse().findIndex(function (item) {
          return !item.dataRef.disabled;
        });
        if (idx === -1) return idx;
        return items.value.length - 1 - idx;
      }, _match[Focus.SpecificItem] = function () {
        return items.value.findIndex(function (item) {
          return item.id === id;
        });
      }, _match[Focus.Nothing] = function () {
        return null;
      }, _match));
      if (nextActiveIndex === -1) return activeItemIndex.value;
      return nextActiveIndex;
    }

    var api = {
      menuState: menuState,
      buttonRef: buttonRef,
      itemsRef: itemsRef,
      items: items,
      searchQuery: searchQuery,
      activeItemIndex: activeItemIndex,
      closeMenu: function closeMenu() {
        return menuState.value = MenuStates.Closed;
      },
      openMenu: function openMenu() {
        return menuState.value = MenuStates.Open;
      },
      goToItem: function goToItem(focus, id) {
        var nextActiveItemIndex = calculateActiveItemIndex(focus, id);
        if (searchQuery.value === '' && activeItemIndex.value === nextActiveItemIndex) return;
        searchQuery.value = '';
        activeItemIndex.value = nextActiveItemIndex;
      },
      search: function search(value) {
        searchQuery.value += value;
        var match = items.value.findIndex(function (item) {
          return item.dataRef.textValue.startsWith(searchQuery.value) && !item.dataRef.disabled;
        });

        if (match === -1 || match === activeItemIndex.value) {
          return;
        }

        activeItemIndex.value = match;
      },
      clearSearch: function clearSearch() {
        searchQuery.value = '';
      },
      registerItem: function registerItem(id, dataRef) {
        // @ts-expect-error The expected type comes from property 'dataRef' which is declared here on type '{ id: string; dataRef: { textValue: string; disabled: boolean; }; }'
        items.value.push({
          id: id,
          dataRef: dataRef
        });
      },
      unregisterItem: function unregisterItem(id) {
        var nextItems = items.value.slice();
        var currentActiveItem = activeItemIndex.value !== null ? nextItems[activeItemIndex.value] : null;
        var idx = nextItems.findIndex(function (a) {
          return a.id === id;
        });
        if (idx !== -1) nextItems.splice(idx, 1);
        items.value = nextItems;

        activeItemIndex.value = function () {
          if (idx === activeItemIndex.value) return null;
          if (currentActiveItem === null) return null; // If we removed the item before the actual active index, then it would be out of sync. To
          // fix this, we will find the correct (new) index position.

          return nextItems.indexOf(currentActiveItem);
        }();
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      function handler(event) {
        var _buttonRef$value, _itemsRef$value;

        if (menuState.value !== MenuStates.Open) return;
        if ((_buttonRef$value = buttonRef.value) === null || _buttonRef$value === void 0 ? void 0 : _buttonRef$value.contains(event.target)) return;

        if (!((_itemsRef$value = itemsRef.value) === null || _itemsRef$value === void 0 ? void 0 : _itemsRef$value.contains(event.target))) {
          api.closeMenu();
        }

        if (!event.defaultPrevented) (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _buttonRef$value2;

          return (_buttonRef$value2 = buttonRef.value) === null || _buttonRef$value2 === void 0 ? void 0 : _buttonRef$value2.focus();
        });
      }

      window.addEventListener('click', handler);
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
        return window.removeEventListener('click', handler);
      });
    }); // @ts-expect-error Types of property 'dataRef' are incompatible.

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(MenuContext, api);
    return function () {
      var slot = {
        open: menuState.value === MenuStates.Open
      };
      return render({
        props: props,
        slot: slot,
        slots: slots,
        attrs: attrs
      });
    };
  }
});
var MenuButton = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    }
  },
  render: function render$1() {
    var _api$itemsRef$value;

    var api = useMenuContext('MenuButton');
    var slot = {
      open: api.menuState.value === MenuStates.Open
    };
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      type: 'button',
      'aria-haspopup': true,
      'aria-controls': (_api$itemsRef$value = api.itemsRef.value) === null || _api$itemsRef$value === void 0 ? void 0 : _api$itemsRef$value.id,
      'aria-expanded': api.menuState.value === MenuStates.Open ? true : undefined,
      onKeyDown: this.handleKeyDown,
      onFocus: this.handleFocus,
      onPointerUp: this.handlePointerUp
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup() {
    var api = useMenuContext('MenuButton');
    var id = "headlessui-menu-button-" + useId();

    function handleKeyDown(event) {
      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
        case Keys.Space:
        case Keys.Enter:
        case Keys.ArrowDown:
          event.preventDefault();
          api.openMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$itemsRef$value2;

            (_api$itemsRef$value2 = api.itemsRef.value) === null || _api$itemsRef$value2 === void 0 ? void 0 : _api$itemsRef$value2.focus();
            api.goToItem(Focus.FirstItem);
          });
          break;

        case Keys.ArrowUp:
          event.preventDefault();
          api.openMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$itemsRef$value3;

            (_api$itemsRef$value3 = api.itemsRef.value) === null || _api$itemsRef$value3 === void 0 ? void 0 : _api$itemsRef$value3.focus();
            api.goToItem(Focus.LastItem);
          });
          break;
      }
    }

    function handlePointerUp(event) {
      if (api.menuState.value === MenuStates.Open) {
        api.closeMenu();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _api$buttonRef$value;

          return (_api$buttonRef$value = api.buttonRef.value) === null || _api$buttonRef$value === void 0 ? void 0 : _api$buttonRef$value.focus();
        });
      } else {
        event.preventDefault();
        api.openMenu();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _api$itemsRef$value4;

          return (_api$itemsRef$value4 = api.itemsRef.value) === null || _api$itemsRef$value4 === void 0 ? void 0 : _api$itemsRef$value4.focus();
        });
      }
    }

    function handleFocus() {
      var _api$itemsRef$value5;

      if (api.menuState.value === MenuStates.Open) (_api$itemsRef$value5 = api.itemsRef.value) === null || _api$itemsRef$value5 === void 0 ? void 0 : _api$itemsRef$value5.focus();
    }

    return {
      id: id,
      el: api.buttonRef,
      handleKeyDown: handleKeyDown,
      handlePointerUp: handlePointerUp,
      handleFocus: handleFocus
    };
  }
});
var MenuItems = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    }
  },
  render: function render$1() {
    var _api$items$value$api$, _api$buttonRef$value2;

    var api = useMenuContext('MenuItems'); // `static` is a reserved keyword, therefore aliasing it...

    var _this$$props = this.$props,
        isStatic = _this$$props["static"],
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props, ["static"]);

    if (!isStatic && api.menuState.value === MenuStates.Closed) return null;
    var slot = {
      open: api.menuState.value === MenuStates.Open
    };
    var propsWeControl = {
      'aria-activedescendant': api.activeItemIndex.value === null ? undefined : (_api$items$value$api$ = api.items.value[api.activeItemIndex.value]) === null || _api$items$value$api$ === void 0 ? void 0 : _api$items$value$api$.id,
      'aria-labelledby': (_api$buttonRef$value2 = api.buttonRef.value) === null || _api$buttonRef$value2 === void 0 ? void 0 : _api$buttonRef$value2.id,
      id: this.id,
      onKeyDown: this.handleKeyDown,
      role: 'menu',
      tabIndex: 0,
      ref: 'el'
    };
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup() {
    var api = useMenuContext('MenuItems');
    var id = "headlessui-menu-items-" + useId();
    var searchDebounce = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    function handleKeyDown(event) {
      if (searchDebounce.value) clearTimeout(searchDebounce.value);

      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
        // @ts-expect-error Fallthrough is expected here
        case Keys.Space:
          if (api.searchQuery.value !== '') {
            event.preventDefault();
            return api.search(event.key);
          }

        // When in type ahead mode, fallthrough

        case Keys.Enter:
          event.preventDefault();
          api.closeMenu();

          if (api.activeItemIndex.value !== null) {
            var _document$getElementB;

            var _id = api.items.value[api.activeItemIndex.value].id;
            (_document$getElementB = document.getElementById(_id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.click();
          }

          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$buttonRef$value3;

            return (_api$buttonRef$value3 = api.buttonRef.value) === null || _api$buttonRef$value3 === void 0 ? void 0 : _api$buttonRef$value3.focus();
          });
          break;

        case Keys.ArrowDown:
          event.preventDefault();
          return api.goToItem(Focus.NextItem);

        case Keys.ArrowUp:
          event.preventDefault();
          return api.goToItem(Focus.PreviousItem);

        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          return api.goToItem(Focus.FirstItem);

        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          return api.goToItem(Focus.LastItem);

        case Keys.Escape:
          event.preventDefault();
          api.closeMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$buttonRef$value4;

            return (_api$buttonRef$value4 = api.buttonRef.value) === null || _api$buttonRef$value4 === void 0 ? void 0 : _api$buttonRef$value4.focus();
          });
          break;

        case Keys.Tab:
          return event.preventDefault();

        default:
          if (event.key.length === 1) {
            api.search(event.key);
            searchDebounce.value = setTimeout(function () {
              return api.clearSearch();
            }, 350);
          }

          break;
      }
    }

    return {
      id: id,
      el: api.itemsRef,
      handleKeyDown: handleKeyDown
    };
  }
});
var MenuItem = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    "class": {
      type: [String, Function],
      required: false
    },
    className: {
      type: [String, Function],
      required: false
    }
  },
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
        attrs = _ref2.attrs;
    var api = useMenuContext('MenuItem');
    var id = "headlessui-menu-item-" + useId();
    var disabled = props.disabled,
        defaultClass = props["class"],
        _props$className = props.className,
        className = _props$className === void 0 ? defaultClass : _props$className;
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.activeItemIndex.value !== null ? api.items.value[api.activeItemIndex.value].id === id : false;
    });
    var dataRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      disabled: disabled,
      textValue: ''
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _document$getElementB2, _document$getElementB3;

      var textValue = (_document$getElementB2 = document.getElementById(id)) === null || _document$getElementB2 === void 0 ? void 0 : (_document$getElementB3 = _document$getElementB2.textContent) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.toLowerCase().trim();
      if (textValue !== undefined) dataRef.value.textValue = textValue;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerItem(id, dataRef);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterItem(id);
    });

    function handleClick(event) {
      if (disabled) return event.preventDefault();
      api.closeMenu();
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _api$buttonRef$value5;

        return (_api$buttonRef$value5 = api.buttonRef.value) === null || _api$buttonRef$value5 === void 0 ? void 0 : _api$buttonRef$value5.focus();
      });
    }

    function handleFocus() {
      if (disabled) return api.goToItem(Focus.Nothing);
      api.goToItem(Focus.SpecificItem, id);
    }

    function handlePointerMove() {
      if (disabled) return;
      if (active.value) return;
      api.goToItem(Focus.SpecificItem, id);
    }

    function handlePointerLeave() {
      if (disabled) return;
      if (!active.value) return;
      api.goToItem(Focus.Nothing);
    }

    return function () {
      var slot = {
        active: active.value,
        disabled: disabled
      };
      var propsWeControl = {
        id: id,
        role: 'menuitem',
        tabIndex: -1,
        "class": resolvePropValue(className, slot),
        'aria-disabled': disabled === true ? true : undefined,
        onClick: handleClick,
        onFocus: handleFocus,
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave
      };
      return render({
        props: _extends({}, props, propsWeControl),
        slot: slot,
        attrs: attrs,
        slots: slots
      });
    };
  }
});

function resolvePropValue(property, bag) {
  if (property === undefined) return undefined;
  if (typeof property === 'function') return property(bag);
  return property;
}

var ListboxStates;

(function (ListboxStates) {
  ListboxStates[ListboxStates["Open"] = 0] = "Open";
  ListboxStates[ListboxStates["Closed"] = 1] = "Closed";
})(ListboxStates || (ListboxStates = {}));

var Focus$1;

(function (Focus) {
  Focus[Focus["First"] = 0] = "First";
  Focus[Focus["Previous"] = 1] = "Previous";
  Focus[Focus["Next"] = 2] = "Next";
  Focus[Focus["Last"] = 3] = "Last";
  Focus[Focus["Specific"] = 4] = "Specific";
  Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus$1 || (Focus$1 = {}));

var ListboxContext = /*#__PURE__*/Symbol('ListboxContext');

function useListboxContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(ListboxContext);

  if (context === undefined) {
    var err = new Error("<" + component + " /> is missing a parent <Listbox /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useListboxContext);
    throw err;
  }

  return context;
} // ---


var Listbox = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Listbox',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    modelValue: {
      type: [Object, String],
      "default": null
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;

    var passThroughProps = _objectWithoutPropertiesLoose(props, ["modelValue"]);

    var listboxState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(ListboxStates.Closed);
    var labelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var buttonRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var optionsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var searchQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var activeOptionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.modelValue;
    });

    function calculateActiveOptionIndex(focus, id) {
      var _activeOptionIndex$va, _match;

      if (options.value.length <= 0) return null;
      var currentActiveOptionIndex = (_activeOptionIndex$va = activeOptionIndex.value) !== null && _activeOptionIndex$va !== void 0 ? _activeOptionIndex$va : -1;
      var nextActiveIndex = match(focus, (_match = {}, _match[Focus$1.First] = function () {
        return options.value.findIndex(function (option) {
          return !option.dataRef.disabled;
        });
      }, _match[Focus$1.Previous] = function () {
        var idx = options.value.slice().reverse().findIndex(function (option, idx, all) {
          if (currentActiveOptionIndex !== -1 && all.length - idx - 1 >= currentActiveOptionIndex) return false;
          return !option.dataRef.disabled;
        });
        if (idx === -1) return idx;
        return options.value.length - 1 - idx;
      }, _match[Focus$1.Next] = function () {
        return options.value.findIndex(function (option, idx) {
          if (idx <= currentActiveOptionIndex) return false;
          return !option.dataRef.disabled;
        });
      }, _match[Focus$1.Last] = function () {
        var idx = options.value.slice().reverse().findIndex(function (option) {
          return !option.dataRef.disabled;
        });
        if (idx === -1) return idx;
        return options.value.length - 1 - idx;
      }, _match[Focus$1.Specific] = function () {
        return options.value.findIndex(function (option) {
          return option.id === id;
        });
      }, _match[Focus$1.Nothing] = function () {
        return null;
      }, _match));
      if (nextActiveIndex === -1) return activeOptionIndex.value;
      return nextActiveIndex;
    }

    var api = {
      listboxState: listboxState,
      value: value,
      labelRef: labelRef,
      buttonRef: buttonRef,
      optionsRef: optionsRef,
      options: options,
      searchQuery: searchQuery,
      activeOptionIndex: activeOptionIndex,
      closeListbox: function closeListbox() {
        return listboxState.value = ListboxStates.Closed;
      },
      openListbox: function openListbox() {
        return listboxState.value = ListboxStates.Open;
      },
      goToOption: function goToOption(focus, id) {
        var nextActiveOptionIndex = calculateActiveOptionIndex(focus, id);
        if (searchQuery.value === '' && activeOptionIndex.value === nextActiveOptionIndex) return;
        searchQuery.value = '';
        activeOptionIndex.value = nextActiveOptionIndex;
      },
      search: function search(value) {
        searchQuery.value += value;
        var match = options.value.findIndex(function (option) {
          return !option.dataRef.disabled && option.dataRef.textValue.startsWith(searchQuery.value);
        });

        if (match === -1 || match === activeOptionIndex.value) {
          return;
        }

        activeOptionIndex.value = match;
      },
      clearSearch: function clearSearch() {
        searchQuery.value = '';
      },
      registerOption: function registerOption(id, dataRef) {
        // @ts-expect-error The expected type comes from property 'dataRef' which is declared here on type '{ id: string; dataRef: { textValue: string; disabled: boolean; }; }'
        options.value.push({
          id: id,
          dataRef: dataRef
        });
      },
      unregisterOption: function unregisterOption(id) {
        var nextOptions = options.value.slice();
        var currentActiveOption = activeOptionIndex.value !== null ? nextOptions[activeOptionIndex.value] : null;
        var idx = nextOptions.findIndex(function (a) {
          return a.id === id;
        });
        if (idx !== -1) nextOptions.splice(idx, 1);
        options.value = nextOptions;

        activeOptionIndex.value = function () {
          if (idx === activeOptionIndex.value) return null;
          if (currentActiveOption === null) return null; // If we removed the option before the actual active index, then it would be out of sync. To
          // fix this, we will find the correct (new) index position.

          return nextOptions.indexOf(currentActiveOption);
        }();
      },
      select: function select(value) {
        emit('update:modelValue', value);
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      function handler(event) {
        var _buttonRef$value, _optionsRef$value;

        if (listboxState.value !== ListboxStates.Open) return;
        if ((_buttonRef$value = buttonRef.value) === null || _buttonRef$value === void 0 ? void 0 : _buttonRef$value.contains(event.target)) return;

        if (!((_optionsRef$value = optionsRef.value) === null || _optionsRef$value === void 0 ? void 0 : _optionsRef$value.contains(event.target))) {
          api.closeListbox();
        }

        if (!event.defaultPrevented) (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _buttonRef$value2;

          return (_buttonRef$value2 = buttonRef.value) === null || _buttonRef$value2 === void 0 ? void 0 : _buttonRef$value2.focus();
        });
      }

      window.addEventListener('click', handler);
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
        return window.removeEventListener('click', handler);
      });
    }); // @ts-expect-error Types of property 'dataRef' are incompatible.

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(ListboxContext, api);
    return function () {
      var slot = {
        open: listboxState.value === ListboxStates.Open
      };
      return render({
        props: passThroughProps,
        slot: slot,
        slots: slots,
        attrs: attrs
      });
    };
  }
}); // ---

var ListboxLabel = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxLabel',
  props: {
    as: {
      type: [Object, String],
      "default": 'label'
    }
  },
  render: function render$1() {
    var api = useListboxContext('ListboxLabel');
    var slot = {
      open: api.listboxState.value === ListboxStates.Open
    };
    var propsWeControl = {
      id: this.id,
      ref: 'el',
      onPointerUp: this.handlePointerUp
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup() {
    var api = useListboxContext('ListboxLabel');
    var id = "headlessui-listbox-label-" + useId();
    return {
      id: id,
      el: api.labelRef,
      handlePointerUp: function handlePointerUp() {
        var _api$buttonRef$value;

        (_api$buttonRef$value = api.buttonRef.value) === null || _api$buttonRef$value === void 0 ? void 0 : _api$buttonRef$value.focus();
      }
    };
  }
}); // ---

var ListboxButton = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxButton',
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    }
  },
  render: function render$1() {
    var _api$optionsRef$value;

    var api = useListboxContext('ListboxButton');
    var slot = {
      open: api.listboxState.value === ListboxStates.Open,
      focused: this.focused
    };
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      type: 'button',
      'aria-haspopup': true,
      'aria-controls': (_api$optionsRef$value = api.optionsRef.value) === null || _api$optionsRef$value === void 0 ? void 0 : _api$optionsRef$value.id,
      'aria-expanded': api.listboxState.value === ListboxStates.Open ? true : undefined,
      'aria-labelledby': api.labelRef.value ? [api.labelRef.value.id, this.id].join(' ') : undefined,
      onKeyDown: this.handleKeyDown,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onPointerUp: this.handlePointerUp
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup() {
    var api = useListboxContext('ListboxButton');
    var id = "headlessui-listbox-button-" + useId();
    var focused = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function handleKeyDown(event) {
      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
        case Keys.Space:
        case Keys.Enter:
        case Keys.ArrowDown:
          event.preventDefault();
          api.openListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$optionsRef$value2;

            (_api$optionsRef$value2 = api.optionsRef.value) === null || _api$optionsRef$value2 === void 0 ? void 0 : _api$optionsRef$value2.focus();
            if (!api.value.value) api.goToOption(Focus$1.First);
          });
          break;

        case Keys.ArrowUp:
          event.preventDefault();
          api.openListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$optionsRef$value3;

            (_api$optionsRef$value3 = api.optionsRef.value) === null || _api$optionsRef$value3 === void 0 ? void 0 : _api$optionsRef$value3.focus();
            if (!api.value.value) api.goToOption(Focus$1.Last);
          });
          break;
      }
    }

    function handlePointerUp(event) {
      if (api.listboxState.value === ListboxStates.Open) {
        api.closeListbox();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _api$buttonRef$value2;

          return (_api$buttonRef$value2 = api.buttonRef.value) === null || _api$buttonRef$value2 === void 0 ? void 0 : _api$buttonRef$value2.focus();
        });
      } else {
        event.preventDefault();
        api.openListbox();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _api$optionsRef$value4;

          return (_api$optionsRef$value4 = api.optionsRef.value) === null || _api$optionsRef$value4 === void 0 ? void 0 : _api$optionsRef$value4.focus();
        });
      }
    }

    function handleFocus() {
      var _api$optionsRef$value5;

      if (api.listboxState.value === ListboxStates.Open) return (_api$optionsRef$value5 = api.optionsRef.value) === null || _api$optionsRef$value5 === void 0 ? void 0 : _api$optionsRef$value5.focus();
      focused.value = true;
    }

    function handleBlur() {
      focused.value = false;
    }

    return {
      id: id,
      el: api.buttonRef,
      focused: focused,
      handleKeyDown: handleKeyDown,
      handlePointerUp: handlePointerUp,
      handleFocus: handleFocus,
      handleBlur: handleBlur
    };
  }
}); // ---

var ListboxOptions = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxOptions',
  props: {
    as: {
      type: [Object, String],
      "default": 'ul'
    },
    "static": {
      type: Boolean,
      "default": false
    }
  },
  render: function render$1() {
    var _api$options$value$ap, _api$labelRef$value$i, _api$labelRef$value, _api$buttonRef$value3;

    var api = useListboxContext('ListboxOptions'); // `static` is a reserved keyword, therefore aliasing it...

    var _this$$props = this.$props,
        isStatic = _this$$props["static"],
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props, ["static"]);

    if (!isStatic && api.listboxState.value === ListboxStates.Closed) return null;
    var slot = {
      open: api.listboxState.value === ListboxStates.Open
    };
    var propsWeControl = {
      'aria-activedescendant': api.activeOptionIndex.value === null ? undefined : (_api$options$value$ap = api.options.value[api.activeOptionIndex.value]) === null || _api$options$value$ap === void 0 ? void 0 : _api$options$value$ap.id,
      'aria-labelledby': (_api$labelRef$value$i = (_api$labelRef$value = api.labelRef.value) === null || _api$labelRef$value === void 0 ? void 0 : _api$labelRef$value.id) !== null && _api$labelRef$value$i !== void 0 ? _api$labelRef$value$i : (_api$buttonRef$value3 = api.buttonRef.value) === null || _api$buttonRef$value3 === void 0 ? void 0 : _api$buttonRef$value3.id,
      id: this.id,
      onKeyDown: this.handleKeyDown,
      role: 'listbox',
      tabIndex: 0,
      ref: 'el'
    };
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup() {
    var api = useListboxContext('ListboxOptions');
    var id = "headlessui-listbox-options-" + useId();
    var searchDebounce = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    function handleKeyDown(event) {
      if (searchDebounce.value) clearTimeout(searchDebounce.value);

      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
        // @ts-expect-error Fallthrough is expected here
        case Keys.Space:
          if (api.searchQuery.value !== '') {
            event.preventDefault();
            return api.search(event.key);
          }

        // When in type ahead mode, fallthrough

        case Keys.Enter:
          event.preventDefault();
          api.closeListbox();

          if (api.activeOptionIndex.value !== null) {
            var dataRef = api.options.value[api.activeOptionIndex.value].dataRef;
            api.select(dataRef.value);
          }

          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$buttonRef$value4;

            return (_api$buttonRef$value4 = api.buttonRef.value) === null || _api$buttonRef$value4 === void 0 ? void 0 : _api$buttonRef$value4.focus();
          });
          break;

        case Keys.ArrowDown:
          event.preventDefault();
          return api.goToOption(Focus$1.Next);

        case Keys.ArrowUp:
          event.preventDefault();
          return api.goToOption(Focus$1.Previous);

        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          return api.goToOption(Focus$1.First);

        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          return api.goToOption(Focus$1.Last);

        case Keys.Escape:
          event.preventDefault();
          api.closeListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _api$buttonRef$value5;

            return (_api$buttonRef$value5 = api.buttonRef.value) === null || _api$buttonRef$value5 === void 0 ? void 0 : _api$buttonRef$value5.focus();
          });
          break;

        case Keys.Tab:
          return event.preventDefault();

        default:
          if (event.key.length === 1) {
            api.search(event.key);
            searchDebounce.value = setTimeout(function () {
              return api.clearSearch();
            }, 350);
          }

          break;
      }
    }

    return {
      id: id,
      el: api.optionsRef,
      handleKeyDown: handleKeyDown
    };
  }
});
var ListboxOption = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxOption',
  props: {
    as: {
      type: [Object, String],
      "default": 'li'
    },
    value: {
      type: [Object, String],
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    "class": {
      type: [String, Function],
      required: false
    },
    className: {
      type: [String, Function],
      required: false
    }
  },
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
        attrs = _ref2.attrs;
    var api = useListboxContext('ListboxOption');
    var id = "headlessui-listbox-option-" + useId();
    var disabled = props.disabled,
        defaultClass = props["class"],
        _props$className = props.className,
        className = _props$className === void 0 ? defaultClass : _props$className,
        value = props.value;
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.activeOptionIndex.value !== null ? api.options.value[api.activeOptionIndex.value].id === id : false;
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(api.value.value) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    });
    var dataRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      disabled: disabled,
      value: value,
      textValue: ''
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _document$getElementB, _document$getElementB2;

      var textValue = (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.textContent) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.toLowerCase().trim();
      if (textValue !== undefined) dataRef.value.textValue = textValue;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerOption(id, dataRef);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterOption(id);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _document$getElementB3, _document$getElementB4;

      if (!selected.value) return;
      api.goToOption(Focus$1.Specific, id);
      (_document$getElementB3 = document.getElementById(id)) === null || _document$getElementB3 === void 0 ? void 0 : (_document$getElementB4 = _document$getElementB3.focus) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.call(_document$getElementB3);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      if (!active.value) return;
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _document$getElementB5, _document$getElementB6;

        return (_document$getElementB5 = document.getElementById(id)) === null || _document$getElementB5 === void 0 ? void 0 : (_document$getElementB6 = _document$getElementB5.scrollIntoView) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.call(_document$getElementB5, {
          block: 'nearest'
        });
      });
    });

    function handleClick(event) {
      if (disabled) return event.preventDefault();
      api.select(value);
      api.closeListbox();
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _api$buttonRef$value6;

        return (_api$buttonRef$value6 = api.buttonRef.value) === null || _api$buttonRef$value6 === void 0 ? void 0 : _api$buttonRef$value6.focus();
      });
    }

    function handleFocus() {
      if (disabled) return api.goToOption(Focus$1.Nothing);
      api.goToOption(Focus$1.Specific, id);
    }

    function handlePointerMove() {
      if (disabled) return;
      if (active.value) return;
      api.goToOption(Focus$1.Specific, id);
    }

    function handlePointerLeave() {
      if (disabled) return;
      if (!active.value) return;
      api.goToOption(Focus$1.Nothing);
    }

    return function () {
      var slot = {
        active: active.value,
        selected: selected.value,
        disabled: disabled
      };
      var propsWeControl = {
        id: id,
        role: 'option',
        tabIndex: -1,
        "class": resolvePropValue$1(className, slot),
        'aria-disabled': disabled === true ? true : undefined,
        'aria-selected': selected.value === true ? selected.value : undefined,
        onClick: handleClick,
        onFocus: handleFocus,
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave
      };
      return render({
        props: _extends({}, props, propsWeControl),
        slot: slot,
        attrs: attrs,
        slots: slots
      });
    };
  }
}); // ---

function resolvePropValue$1(property, bag) {
  if (property === undefined) return undefined;
  if (typeof property === 'function') return property(bag);
  return property;
}

var GroupContext = /*#__PURE__*/Symbol('GroupContext');

function useGroupContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(GroupContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <SwitchGroup /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useGroupContext);
    throw err;
  }

  return context;
} // ---


var SwitchGroup = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'SwitchGroup',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var switchRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var labelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var api = {
      switchRef: switchRef,
      labelRef: labelRef
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(GroupContext, api);
    return function () {
      return render({
        props: props,
        slot: {},
        slots: slots,
        attrs: attrs
      });
    };
  }
}); // ---

var Switch = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Switch',
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    },
    modelValue: {
      type: [Object, Boolean],
      "default": null
    },
    "class": {
      type: [String, Function],
      required: false
    },
    className: {
      type: [String, Function],
      required: false
    }
  },
  render: function render$1() {
    var api = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(GroupContext, null);
    var _this$$props = this.$props,
        defaultClass = _this$$props["class"],
        _this$$props$classNam = _this$$props.className,
        className = _this$$props$classNam === void 0 ? defaultClass : _this$$props$classNam;
    var labelledby = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _api$labelRef$value;

      return api === null || api === void 0 ? void 0 : (_api$labelRef$value = api.labelRef.value) === null || _api$labelRef$value === void 0 ? void 0 : _api$labelRef$value.id;
    });
    var slot = {
      checked: this.$props.modelValue
    };
    var propsWeControl = {
      id: this.id,
      ref: api === null ? undefined : api.switchRef,
      role: 'switch',
      tabIndex: 0,
      "class": resolvePropValue$2(className, slot),
      'aria-checked': this.$props.modelValue,
      'aria-labelledby': labelledby.value,
      onClick: this.handleClick,
      onKeyUp: this.handleKeyUp
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup(props, _ref2) {
    var emit = _ref2.emit;
    var api = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(GroupContext, null);
    var id = "headlessui-switch-" + useId();

    function toggle() {
      emit('update:modelValue', !props.modelValue);
    }

    return {
      id: id,
      el: api === null || api === void 0 ? void 0 : api.switchRef,
      handleClick: function handleClick(event) {
        event.preventDefault();
        toggle();
      },
      handleKeyUp: function handleKeyUp(event) {
        if (event.key === Keys.Space) {
          event.preventDefault();
          toggle();
        }
      }
    };
  }
}); // ---

var SwitchLabel = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'SwitchLabel',
  props: {
    as: {
      type: [Object, String],
      "default": 'label'
    }
  },
  render: function render$1() {
    var propsWeControl = {
      id: this.id,
      ref: 'el',
      onPointerUp: this.handlePointerUp
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: {},
      attrs: this.$attrs,
      slots: this.$slots
    });
  },
  setup: function setup() {
    var api = useGroupContext('SwitchLabel');
    var id = "headlessui-switch-label-" + useId();
    return {
      id: id,
      el: api.labelRef,
      handlePointerUp: function handlePointerUp() {
        var _api$switchRef$value, _api$switchRef$value2;

        (_api$switchRef$value = api.switchRef.value) === null || _api$switchRef$value === void 0 ? void 0 : _api$switchRef$value.click();
        (_api$switchRef$value2 = api.switchRef.value) === null || _api$switchRef$value2 === void 0 ? void 0 : _api$switchRef$value2.focus();
      }
    };
  }
}); // ---

function resolvePropValue$2(property, bag) {
  if (property === undefined) return undefined;
  if (typeof property === 'function') return property(bag);
  return property;
}


//# sourceMappingURL=headlessui.esm.js.map


/***/ }),

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCodeFrame": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame,
/* harmony export */   "BASE_TRANSITION": () => /* binding */ BASE_TRANSITION,
/* harmony export */   "CAMELIZE": () => /* binding */ CAMELIZE,
/* harmony export */   "CAPITALIZE": () => /* binding */ CAPITALIZE,
/* harmony export */   "CREATE_BLOCK": () => /* binding */ CREATE_BLOCK,
/* harmony export */   "CREATE_COMMENT": () => /* binding */ CREATE_COMMENT,
/* harmony export */   "CREATE_SLOTS": () => /* binding */ CREATE_SLOTS,
/* harmony export */   "CREATE_STATIC": () => /* binding */ CREATE_STATIC,
/* harmony export */   "CREATE_TEXT": () => /* binding */ CREATE_TEXT,
/* harmony export */   "CREATE_VNODE": () => /* binding */ CREATE_VNODE,
/* harmony export */   "FRAGMENT": () => /* binding */ FRAGMENT,
/* harmony export */   "IS_REF": () => /* binding */ IS_REF,
/* harmony export */   "KEEP_ALIVE": () => /* binding */ KEEP_ALIVE,
/* harmony export */   "MERGE_PROPS": () => /* binding */ MERGE_PROPS,
/* harmony export */   "OPEN_BLOCK": () => /* binding */ OPEN_BLOCK,
/* harmony export */   "POP_SCOPE_ID": () => /* binding */ POP_SCOPE_ID,
/* harmony export */   "PUSH_SCOPE_ID": () => /* binding */ PUSH_SCOPE_ID,
/* harmony export */   "RENDER_LIST": () => /* binding */ RENDER_LIST,
/* harmony export */   "RENDER_SLOT": () => /* binding */ RENDER_SLOT,
/* harmony export */   "RESOLVE_COMPONENT": () => /* binding */ RESOLVE_COMPONENT,
/* harmony export */   "RESOLVE_DIRECTIVE": () => /* binding */ RESOLVE_DIRECTIVE,
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => /* binding */ RESOLVE_DYNAMIC_COMPONENT,
/* harmony export */   "SET_BLOCK_TRACKING": () => /* binding */ SET_BLOCK_TRACKING,
/* harmony export */   "SUSPENSE": () => /* binding */ SUSPENSE,
/* harmony export */   "TELEPORT": () => /* binding */ TELEPORT,
/* harmony export */   "TO_DISPLAY_STRING": () => /* binding */ TO_DISPLAY_STRING,
/* harmony export */   "TO_HANDLERS": () => /* binding */ TO_HANDLERS,
/* harmony export */   "TO_HANDLER_KEY": () => /* binding */ TO_HANDLER_KEY,
/* harmony export */   "UNREF": () => /* binding */ UNREF,
/* harmony export */   "WITH_CTX": () => /* binding */ WITH_CTX,
/* harmony export */   "WITH_DIRECTIVES": () => /* binding */ WITH_DIRECTIVES,
/* harmony export */   "WITH_SCOPE_ID": () => /* binding */ WITH_SCOPE_ID,
/* harmony export */   "advancePositionWithClone": () => /* binding */ advancePositionWithClone,
/* harmony export */   "advancePositionWithMutation": () => /* binding */ advancePositionWithMutation,
/* harmony export */   "assert": () => /* binding */ assert,
/* harmony export */   "baseCompile": () => /* binding */ baseCompile,
/* harmony export */   "baseParse": () => /* binding */ baseParse,
/* harmony export */   "buildProps": () => /* binding */ buildProps,
/* harmony export */   "buildSlots": () => /* binding */ buildSlots,
/* harmony export */   "createArrayExpression": () => /* binding */ createArrayExpression,
/* harmony export */   "createAssignmentExpression": () => /* binding */ createAssignmentExpression,
/* harmony export */   "createBlockStatement": () => /* binding */ createBlockStatement,
/* harmony export */   "createCacheExpression": () => /* binding */ createCacheExpression,
/* harmony export */   "createCallExpression": () => /* binding */ createCallExpression,
/* harmony export */   "createCompilerError": () => /* binding */ createCompilerError,
/* harmony export */   "createCompoundExpression": () => /* binding */ createCompoundExpression,
/* harmony export */   "createConditionalExpression": () => /* binding */ createConditionalExpression,
/* harmony export */   "createForLoopParams": () => /* binding */ createForLoopParams,
/* harmony export */   "createFunctionExpression": () => /* binding */ createFunctionExpression,
/* harmony export */   "createIfStatement": () => /* binding */ createIfStatement,
/* harmony export */   "createInterpolation": () => /* binding */ createInterpolation,
/* harmony export */   "createObjectExpression": () => /* binding */ createObjectExpression,
/* harmony export */   "createObjectProperty": () => /* binding */ createObjectProperty,
/* harmony export */   "createReturnStatement": () => /* binding */ createReturnStatement,
/* harmony export */   "createRoot": () => /* binding */ createRoot,
/* harmony export */   "createSequenceExpression": () => /* binding */ createSequenceExpression,
/* harmony export */   "createSimpleExpression": () => /* binding */ createSimpleExpression,
/* harmony export */   "createStructuralDirectiveTransform": () => /* binding */ createStructuralDirectiveTransform,
/* harmony export */   "createTemplateLiteral": () => /* binding */ createTemplateLiteral,
/* harmony export */   "createTransformContext": () => /* binding */ createTransformContext,
/* harmony export */   "createVNodeCall": () => /* binding */ createVNodeCall,
/* harmony export */   "findDir": () => /* binding */ findDir,
/* harmony export */   "findProp": () => /* binding */ findProp,
/* harmony export */   "generate": () => /* binding */ generate,
/* harmony export */   "getBaseTransformPreset": () => /* binding */ getBaseTransformPreset,
/* harmony export */   "getInnerRange": () => /* binding */ getInnerRange,
/* harmony export */   "hasDynamicKeyVBind": () => /* binding */ hasDynamicKeyVBind,
/* harmony export */   "hasScopeRef": () => /* binding */ hasScopeRef,
/* harmony export */   "helperNameMap": () => /* binding */ helperNameMap,
/* harmony export */   "injectProp": () => /* binding */ injectProp,
/* harmony export */   "isBindKey": () => /* binding */ isBindKey,
/* harmony export */   "isBuiltInType": () => /* binding */ isBuiltInType,
/* harmony export */   "isCoreComponent": () => /* binding */ isCoreComponent,
/* harmony export */   "isMemberExpression": () => /* binding */ isMemberExpression,
/* harmony export */   "isSimpleIdentifier": () => /* binding */ isSimpleIdentifier,
/* harmony export */   "isSlotOutlet": () => /* binding */ isSlotOutlet,
/* harmony export */   "isStaticExp": () => /* binding */ isStaticExp,
/* harmony export */   "isTemplateNode": () => /* binding */ isTemplateNode,
/* harmony export */   "isText": () => /* binding */ isText,
/* harmony export */   "isVSlot": () => /* binding */ isVSlot,
/* harmony export */   "locStub": () => /* binding */ locStub,
/* harmony export */   "noopDirectiveTransform": () => /* binding */ noopDirectiveTransform,
/* harmony export */   "processExpression": () => /* binding */ processExpression,
/* harmony export */   "processFor": () => /* binding */ processFor,
/* harmony export */   "processIf": () => /* binding */ processIf,
/* harmony export */   "processSlotOutlet": () => /* binding */ processSlotOutlet,
/* harmony export */   "registerRuntimeHelpers": () => /* binding */ registerRuntimeHelpers,
/* harmony export */   "resolveComponentType": () => /* binding */ resolveComponentType,
/* harmony export */   "toValidAssetId": () => /* binding */ toValidAssetId,
/* harmony export */   "trackSlotScopes": () => /* binding */ trackSlotScopes,
/* harmony export */   "trackVForSlotScopes": () => /* binding */ trackVForSlotScopes,
/* harmony export */   "transform": () => /* binding */ transform,
/* harmony export */   "transformBind": () => /* binding */ transformBind,
/* harmony export */   "transformElement": () => /* binding */ transformElement,
/* harmony export */   "transformExpression": () => /* binding */ transformExpression,
/* harmony export */   "transformModel": () => /* binding */ transformModel,
/* harmony export */   "transformOn": () => /* binding */ transformOn,
/* harmony export */   "traverseNode": () => /* binding */ traverseNode
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");



function defaultOnError(error) {
    throw error;
}
function createCompilerError(code, loc, messages, additionalMessage) {
    const msg =  true
        ? (messages || errorMessages)[code] + (additionalMessage || ``)
        : 0;
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
}
const errorMessages = {
    // parse errors
    [0 /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */]: 'Illegal comment.',
    [1 /* CDATA_IN_HTML_CONTENT */]: 'CDATA section is allowed only in XML context.',
    [2 /* DUPLICATE_ATTRIBUTE */]: 'Duplicate attribute.',
    [3 /* END_TAG_WITH_ATTRIBUTES */]: 'End tag cannot have attributes.',
    [4 /* END_TAG_WITH_TRAILING_SOLIDUS */]: "Illegal '/' in tags.",
    [5 /* EOF_BEFORE_TAG_NAME */]: 'Unexpected EOF in tag.',
    [6 /* EOF_IN_CDATA */]: 'Unexpected EOF in CDATA section.',
    [7 /* EOF_IN_COMMENT */]: 'Unexpected EOF in comment.',
    [8 /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */]: 'Unexpected EOF in script.',
    [9 /* EOF_IN_TAG */]: 'Unexpected EOF in tag.',
    [10 /* INCORRECTLY_CLOSED_COMMENT */]: 'Incorrectly closed comment.',
    [11 /* INCORRECTLY_OPENED_COMMENT */]: 'Incorrectly opened comment.',
    [12 /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13 /* MISSING_ATTRIBUTE_VALUE */]: 'Attribute value was expected.',
    [14 /* MISSING_END_TAG_NAME */]: 'End tag name was expected.',
    [15 /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */]: 'Whitespace was expected.',
    [16 /* NESTED_COMMENT */]: "Unexpected '<!--' in comment.",
    [17 /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */]: 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).',
    [18 /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */]: 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).',
    [19 /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */]: "Attribute name cannot start with '='.",
    [21 /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */]: "'<?' is allowed only in XML context.",
    [22 /* UNEXPECTED_SOLIDUS_IN_TAG */]: "Illegal '/' in tags.",
    // Vue-specific parse errors
    [23 /* X_INVALID_END_TAG */]: 'Invalid end tag.',
    [24 /* X_MISSING_END_TAG */]: 'Element is missing end tag.',
    [25 /* X_MISSING_INTERPOLATION_END */]: 'Interpolation end sign was not found.',
    [26 /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */]: 'End bracket for dynamic directive argument was not found. ' +
        'Note that dynamic directive argument cannot contain spaces.',
    // transform errors
    [27 /* X_V_IF_NO_EXPRESSION */]: `v-if/v-else-if is missing expression.`,
    [28 /* X_V_IF_SAME_KEY */]: `v-if/else branches must use unique keys.`,
    [29 /* X_V_ELSE_NO_ADJACENT_IF */]: `v-else/v-else-if has no adjacent v-if.`,
    [30 /* X_V_FOR_NO_EXPRESSION */]: `v-for is missing expression.`,
    [31 /* X_V_FOR_MALFORMED_EXPRESSION */]: `v-for has invalid expression.`,
    [32 /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */]: `<template v-for> key should be placed on the <template> tag.`,
    [33 /* X_V_BIND_NO_EXPRESSION */]: `v-bind is missing expression.`,
    [34 /* X_V_ON_NO_EXPRESSION */]: `v-on is missing expression.`,
    [35 /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */]: `Unexpected custom directive on <slot> outlet.`,
    [36 /* X_V_SLOT_MIXED_SLOT_USAGE */]: `Mixed v-slot usage on both the component and nested <template>.` +
        `When there are multiple named slots, all slots should use <template> ` +
        `syntax to avoid scope ambiguity.`,
    [37 /* X_V_SLOT_DUPLICATE_SLOT_NAMES */]: `Duplicate slot names found. `,
    [38 /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */]: `Extraneous children found when component already has explicitly named ` +
        `default slot. These children will be ignored.`,
    [39 /* X_V_SLOT_MISPLACED */]: `v-slot can only be used on components or <template> tags.`,
    [40 /* X_V_MODEL_NO_EXPRESSION */]: `v-model is missing expression.`,
    [41 /* X_V_MODEL_MALFORMED_EXPRESSION */]: `v-model value must be a valid JavaScript member expression.`,
    [42 /* X_V_MODEL_ON_SCOPE_VARIABLE */]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [43 /* X_INVALID_EXPRESSION */]: `Error parsing JavaScript expression: `,
    [44 /* X_KEEP_ALIVE_INVALID_CHILDREN */]: `<KeepAlive> expects exactly one child component.`,
    // generic errors
    [45 /* X_PREFIX_ID_NOT_SUPPORTED */]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [46 /* X_MODULE_MODE_NOT_SUPPORTED */]: `ES module mode is not supported in this build of compiler.`,
    [47 /* X_CACHE_HANDLER_NOT_SUPPORTED */]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [48 /* X_SCOPE_ID_NOT_SUPPORTED */]: `"scopeId" option is only supported in module mode.`
};

const FRAGMENT = Symbol(( true) ? `Fragment` : 0);
const TELEPORT = Symbol(( true) ? `Teleport` : 0);
const SUSPENSE = Symbol(( true) ? `Suspense` : 0);
const KEEP_ALIVE = Symbol(( true) ? `KeepAlive` : 0);
const BASE_TRANSITION = Symbol(( true) ? `BaseTransition` : 0);
const OPEN_BLOCK = Symbol(( true) ? `openBlock` : 0);
const CREATE_BLOCK = Symbol(( true) ? `createBlock` : 0);
const CREATE_VNODE = Symbol(( true) ? `createVNode` : 0);
const CREATE_COMMENT = Symbol(( true) ? `createCommentVNode` : 0);
const CREATE_TEXT = Symbol(( true) ? `createTextVNode` : 0);
const CREATE_STATIC = Symbol(( true) ? `createStaticVNode` : 0);
const RESOLVE_COMPONENT = Symbol(( true) ? `resolveComponent` : 0);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(( true) ? `resolveDynamicComponent` : 0);
const RESOLVE_DIRECTIVE = Symbol(( true) ? `resolveDirective` : 0);
const WITH_DIRECTIVES = Symbol(( true) ? `withDirectives` : 0);
const RENDER_LIST = Symbol(( true) ? `renderList` : 0);
const RENDER_SLOT = Symbol(( true) ? `renderSlot` : 0);
const CREATE_SLOTS = Symbol(( true) ? `createSlots` : 0);
const TO_DISPLAY_STRING = Symbol(( true) ? `toDisplayString` : 0);
const MERGE_PROPS = Symbol(( true) ? `mergeProps` : 0);
const TO_HANDLERS = Symbol(( true) ? `toHandlers` : 0);
const CAMELIZE = Symbol(( true) ? `camelize` : 0);
const CAPITALIZE = Symbol(( true) ? `capitalize` : 0);
const TO_HANDLER_KEY = Symbol(( true) ? `toHandlerKey` : 0);
const SET_BLOCK_TRACKING = Symbol(( true) ? `setBlockTracking` : 0);
const PUSH_SCOPE_ID = Symbol(( true) ? `pushScopeId` : 0);
const POP_SCOPE_ID = Symbol(( true) ? `popScopeId` : 0);
const WITH_SCOPE_ID = Symbol(( true) ? `withScopeId` : 0);
const WITH_CTX = Symbol(( true) ? `withCtx` : 0);
const UNREF = Symbol(( true) ? `unref` : 0);
const IS_REF = Symbol(( true) ? `isRef` : 0);
// Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.
const helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_SCOPE_ID]: `withScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`
};
function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach(s => {
        helperNameMap[s] = helpers[s];
    });
}

// AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.
const locStub = {
    source: '',
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
};
function createRoot(children, loc = locStub) {
    return {
        type: 0 /* ROOT */,
        children,
        helpers: [],
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: 0,
        temps: 0,
        codegenNode: undefined,
        loc
    };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, loc = locStub) {
    if (context) {
        if (isBlock) {
            context.helper(OPEN_BLOCK);
            context.helper(CREATE_BLOCK);
        }
        else {
            context.helper(CREATE_VNODE);
        }
        if (directives) {
            context.helper(WITH_DIRECTIVES);
        }
    }
    return {
        type: 13 /* VNODE_CALL */,
        tag,
        props,
        children,
        patchFlag,
        dynamicProps,
        directives,
        isBlock,
        disableTracking,
        loc
    };
}
function createArrayExpression(elements, loc = locStub) {
    return {
        type: 17 /* JS_ARRAY_EXPRESSION */,
        loc,
        elements
    };
}
function createObjectExpression(properties, loc = locStub) {
    return {
        type: 15 /* JS_OBJECT_EXPRESSION */,
        loc,
        properties
    };
}
function createObjectProperty(key, value) {
    return {
        type: 16 /* JS_PROPERTY */,
        loc: locStub,
        key: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(key) ? createSimpleExpression(key, true) : key,
        value
    };
}
function createSimpleExpression(content, isStatic, loc = locStub, constType = 0 /* NOT_CONSTANT */) {
    return {
        type: 4 /* SIMPLE_EXPRESSION */,
        loc,
        content,
        isStatic,
        constType: isStatic ? 3 /* CAN_STRINGIFY */ : constType
    };
}
function createInterpolation(content, loc) {
    return {
        type: 5 /* INTERPOLATION */,
        loc,
        content: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(content)
            ? createSimpleExpression(content, false, loc)
            : content
    };
}
function createCompoundExpression(children, loc = locStub) {
    return {
        type: 8 /* COMPOUND_EXPRESSION */,
        loc,
        children
    };
}
function createCallExpression(callee, args = [], loc = locStub) {
    return {
        type: 14 /* JS_CALL_EXPRESSION */,
        loc,
        callee,
        arguments: args
    };
}
function createFunctionExpression(params, returns = undefined, newline = false, isSlot = false, loc = locStub) {
    return {
        type: 18 /* JS_FUNCTION_EXPRESSION */,
        params,
        returns,
        newline,
        isSlot,
        loc
    };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
        type: 19 /* JS_CONDITIONAL_EXPRESSION */,
        test,
        consequent,
        alternate,
        newline,
        loc: locStub
    };
}
function createCacheExpression(index, value, isVNode = false) {
    return {
        type: 20 /* JS_CACHE_EXPRESSION */,
        index,
        value,
        isVNode,
        loc: locStub
    };
}
function createBlockStatement(body) {
    return {
        type: 21 /* JS_BLOCK_STATEMENT */,
        body,
        loc: locStub
    };
}
function createTemplateLiteral(elements) {
    return {
        type: 22 /* JS_TEMPLATE_LITERAL */,
        elements,
        loc: locStub
    };
}
function createIfStatement(test, consequent, alternate) {
    return {
        type: 23 /* JS_IF_STATEMENT */,
        test,
        consequent,
        alternate,
        loc: locStub
    };
}
function createAssignmentExpression(left, right) {
    return {
        type: 24 /* JS_ASSIGNMENT_EXPRESSION */,
        left,
        right,
        loc: locStub
    };
}
function createSequenceExpression(expressions) {
    return {
        type: 25 /* JS_SEQUENCE_EXPRESSION */,
        expressions,
        loc: locStub
    };
}
function createReturnStatement(returns) {
    return {
        type: 26 /* JS_RETURN_STATEMENT */,
        returns,
        loc: locStub
    };
}

const isStaticExp = (p) => p.type === 4 /* SIMPLE_EXPRESSION */ && p.isStatic;
const isBuiltInType = (tag, expected) => tag === expected || tag === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(expected);
function isCoreComponent(tag) {
    if (isBuiltInType(tag, 'Teleport')) {
        return TELEPORT;
    }
    else if (isBuiltInType(tag, 'Suspense')) {
        return SUSPENSE;
    }
    else if (isBuiltInType(tag, 'KeepAlive')) {
        return KEEP_ALIVE;
    }
    else if (isBuiltInType(tag, 'BaseTransition')) {
        return BASE_TRANSITION;
    }
}
const nonIdentifierRE = /^\d|[^\$\w]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const memberExpRE = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/;
const isMemberExpression = (path) => {
    if (!path)
        return false;
    return memberExpRE.test(path.trim());
};
function getInnerRange(loc, offset, length) {
    const source = loc.source.substr(offset, length);
    const newLoc = {
        source,
        start: advancePositionWithClone(loc.start, loc.source, offset),
        end: loc.end
    };
    if (length != null) {
        newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
}
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, pos), source, numberOfCharacters);
}
// advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
        if (source.charCodeAt(i) === 10 /* newline char code */) {
            linesCount++;
            lastNewLinePos = i;
        }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column =
        lastNewLinePos === -1
            ? pos.column + numberOfCharacters
            : numberOfCharacters - lastNewLinePos;
    return pos;
}
function assert(condition, msg) {
    /* istanbul ignore if */
    if (!condition) {
        throw new Error(msg || `unexpected compiler condition`);
    }
}
function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 7 /* DIRECTIVE */ &&
            (allowEmpty || p.exp) &&
            ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? p.name === name : name.test(p.name))) {
            return p;
        }
    }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 6 /* ATTRIBUTE */) {
            if (dynamicOnly)
                continue;
            if (p.name === name && (p.value || allowEmpty)) {
                return p;
            }
        }
        else if (p.name === 'bind' &&
            (p.exp || allowEmpty) &&
            isBindKey(p.arg, name)) {
            return p;
        }
    }
}
function isBindKey(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
    return node.props.some(p => p.type === 7 /* DIRECTIVE */ &&
        p.name === 'bind' &&
        (!p.arg || // v-bind="obj"
            p.arg.type !== 4 /* SIMPLE_EXPRESSION */ || // v-bind:[_ctx.foo]
            !p.arg.isStatic) // v-bind:[foo]
    );
}
function isText(node) {
    return node.type === 5 /* INTERPOLATION */ || node.type === 2 /* TEXT */;
}
function isVSlot(p) {
    return p.type === 7 /* DIRECTIVE */ && p.name === 'slot';
}
function isTemplateNode(node) {
    return (node.type === 1 /* ELEMENT */ && node.tagType === 3 /* TEMPLATE */);
}
function isSlotOutlet(node) {
    return node.type === 1 /* ELEMENT */ && node.tagType === 2 /* SLOT */;
}
function injectProp(node, prop, context) {
    let propsWithInjection;
    const props = node.type === 13 /* VNODE_CALL */ ? node.props : node.arguments[2];
    if (props == null || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props)) {
        propsWithInjection = createObjectExpression([prop]);
    }
    else if (props.type === 14 /* JS_CALL_EXPRESSION */) {
        // merged props... add ours
        // only inject key to object literal if it's the first argument so that
        // if doesn't override user provided keys
        const first = props.arguments[0];
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(first) && first.type === 15 /* JS_OBJECT_EXPRESSION */) {
            first.properties.unshift(prop);
        }
        else {
            if (props.callee === TO_HANDLERS) {
                // #2366
                propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
                    createObjectExpression([prop]),
                    props
                ]);
            }
            else {
                props.arguments.unshift(createObjectExpression([prop]));
            }
        }
        !propsWithInjection && (propsWithInjection = props);
    }
    else if (props.type === 15 /* JS_OBJECT_EXPRESSION */) {
        let alreadyExists = false;
        // check existing key to avoid overriding user provided keys
        if (prop.key.type === 4 /* SIMPLE_EXPRESSION */) {
            const propKeyName = prop.key.content;
            alreadyExists = props.properties.some(p => p.key.type === 4 /* SIMPLE_EXPRESSION */ &&
                p.key.content === propKeyName);
        }
        if (!alreadyExists) {
            props.properties.unshift(prop);
        }
        propsWithInjection = props;
    }
    else {
        // single v-bind with expression, return a merged replacement
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
        ]);
    }
    if (node.type === 13 /* VNODE_CALL */) {
        node.props = propsWithInjection;
    }
    else {
        node.arguments[2] = propsWithInjection;
    }
}
function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, '_')}`;
}
// Check if a node contains expressions that reference current context scope ids
function hasScopeRef(node, ids) {
    if (!node || Object.keys(ids).length === 0) {
        return false;
    }
    switch (node.type) {
        case 1 /* ELEMENT */:
            for (let i = 0; i < node.props.length; i++) {
                const p = node.props[i];
                if (p.type === 7 /* DIRECTIVE */ &&
                    (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
                    return true;
                }
            }
            return node.children.some(c => hasScopeRef(c, ids));
        case 11 /* FOR */:
            if (hasScopeRef(node.source, ids)) {
                return true;
            }
            return node.children.some(c => hasScopeRef(c, ids));
        case 9 /* IF */:
            return node.branches.some(b => hasScopeRef(b, ids));
        case 10 /* IF_BRANCH */:
            if (hasScopeRef(node.condition, ids)) {
                return true;
            }
            return node.children.some(c => hasScopeRef(c, ids));
        case 4 /* SIMPLE_EXPRESSION */:
            return (!node.isStatic &&
                isSimpleIdentifier(node.content) &&
                !!ids[node.content]);
        case 8 /* COMPOUND_EXPRESSION */:
            return node.children.some(c => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(c) && hasScopeRef(c, ids));
        case 5 /* INTERPOLATION */:
        case 12 /* TEXT_CALL */:
            return hasScopeRef(node.content, ids);
        case 2 /* TEXT */:
        case 3 /* COMMENT */:
            return false;
        default:
            if ((true)) ;
            return false;
    }
}

// The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.
const decodeRE = /&(gt|lt|amp|apos|quot);/g;
const decodeMap = {
    gt: '>',
    lt: '<',
    amp: '&',
    apos: "'",
    quot: '"'
};
const defaultParserOptions = {
    delimiters: [`{{`, `}}`],
    getNamespace: () => 0 /* HTML */,
    getTextMode: () => 0 /* DATA */,
    isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
    isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
    isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
    decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
    onError: defaultOnError,
    comments: false
};
function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0 /* DATA */, []), getSelection(context, start));
}
function createParserContext(content, rawOptions) {
    const options = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultParserOptions);
    for (const key in rawOptions) {
        // @ts-ignore
        options[key] = rawOptions[key] || defaultParserOptions[key];
    }
    return {
        options,
        column: 1,
        line: 1,
        offset: 0,
        originalSource: content,
        source: content,
        inPre: false,
        inVPre: false
    };
}
function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns = parent ? parent.ns : 0 /* HTML */;
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
        const s = context.source;
        let node = undefined;
        if (mode === 0 /* DATA */ || mode === 1 /* RCDATA */) {
            if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
                // '{{'
                node = parseInterpolation(context, mode);
            }
            else if (mode === 0 /* DATA */ && s[0] === '<') {
                // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
                if (s.length === 1) {
                    emitError(context, 5 /* EOF_BEFORE_TAG_NAME */, 1);
                }
                else if (s[1] === '!') {
                    // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
                    if (startsWith(s, '<!--')) {
                        node = parseComment(context);
                    }
                    else if (startsWith(s, '<!DOCTYPE')) {
                        // Ignore DOCTYPE by a limitation.
                        node = parseBogusComment(context);
                    }
                    else if (startsWith(s, '<![CDATA[')) {
                        if (ns !== 0 /* HTML */) {
                            node = parseCDATA(context, ancestors);
                        }
                        else {
                            emitError(context, 1 /* CDATA_IN_HTML_CONTENT */);
                            node = parseBogusComment(context);
                        }
                    }
                    else {
                        emitError(context, 11 /* INCORRECTLY_OPENED_COMMENT */);
                        node = parseBogusComment(context);
                    }
                }
                else if (s[1] === '/') {
                    // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
                    if (s.length === 2) {
                        emitError(context, 5 /* EOF_BEFORE_TAG_NAME */, 2);
                    }
                    else if (s[2] === '>') {
                        emitError(context, 14 /* MISSING_END_TAG_NAME */, 2);
                        advanceBy(context, 3);
                        continue;
                    }
                    else if (/[a-z]/i.test(s[2])) {
                        emitError(context, 23 /* X_INVALID_END_TAG */);
                        parseTag(context, 1 /* End */, parent);
                        continue;
                    }
                    else {
                        emitError(context, 12 /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */, 2);
                        node = parseBogusComment(context);
                    }
                }
                else if (/[a-z]/i.test(s[1])) {
                    node = parseElement(context, ancestors);
                }
                else if (s[1] === '?') {
                    emitError(context, 21 /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */, 1);
                    node = parseBogusComment(context);
                }
                else {
                    emitError(context, 12 /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */, 1);
                }
            }
        }
        if (!node) {
            node = parseText(context, mode);
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
            for (let i = 0; i < node.length; i++) {
                pushNode(nodes, node[i]);
            }
        }
        else {
            pushNode(nodes, node);
        }
    }
    // Whitespace management for more efficient output
    // (same as v2 whitespace: 'condense')
    let removedWhitespace = false;
    if (mode !== 2 /* RAWTEXT */) {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (!context.inPre && node.type === 2 /* TEXT */) {
                if (!/[^\t\r\n\f ]/.test(node.content)) {
                    const prev = nodes[i - 1];
                    const next = nodes[i + 1];
                    // If:
                    // - the whitespace is the first or last node, or:
                    // - the whitespace is adjacent to a comment, or:
                    // - the whitespace is between two elements AND contains newline
                    // Then the whitespace is ignored.
                    if (!prev ||
                        !next ||
                        prev.type === 3 /* COMMENT */ ||
                        next.type === 3 /* COMMENT */ ||
                        (prev.type === 1 /* ELEMENT */ &&
                            next.type === 1 /* ELEMENT */ &&
                            /[\r\n]/.test(node.content))) {
                        removedWhitespace = true;
                        nodes[i] = null;
                    }
                    else {
                        // Otherwise, condensed consecutive whitespace inside the text
                        // down to a single space
                        node.content = ' ';
                    }
                }
                else {
                    node.content = node.content.replace(/[\t\r\n\f ]+/g, ' ');
                }
            }
            // also remove comment nodes in prod by default
            if (false) {}
        }
        if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
            // remove leading newline per html spec
            // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
            const first = nodes[0];
            if (first && first.type === 2 /* TEXT */) {
                first.content = first.content.replace(/^\r?\n/, '');
            }
        }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function pushNode(nodes, node) {
    if (node.type === 2 /* TEXT */) {
        const prev = last(nodes);
        // Merge if both this and the previous node are text and those are
        // consecutive. This happens for cases like "a < b".
        if (prev &&
            prev.type === 2 /* TEXT */ &&
            prev.loc.end.offset === node.loc.start.offset) {
            prev.content += node.content;
            prev.loc.end = node.loc.end;
            prev.loc.source += node.loc.source;
            return;
        }
    }
    nodes.push(node);
}
function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3 /* CDATA */, ancestors);
    if (context.source.length === 0) {
        emitError(context, 6 /* EOF_IN_CDATA */);
    }
    else {
        advanceBy(context, 3);
    }
    return nodes;
}
function parseComment(context) {
    const start = getCursor(context);
    let content;
    // Regular comment.
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
        content = context.source.slice(4);
        advanceBy(context, context.source.length);
        emitError(context, 7 /* EOF_IN_COMMENT */);
    }
    else {
        if (match.index <= 3) {
            emitError(context, 0 /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */);
        }
        if (match[1]) {
            emitError(context, 10 /* INCORRECTLY_CLOSED_COMMENT */);
        }
        content = context.source.slice(4, match.index);
        // Advancing with reporting nested comments.
        const s = context.source.slice(0, match.index);
        let prevIndex = 1, nestedIndex = 0;
        while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
            advanceBy(context, nestedIndex - prevIndex + 1);
            if (nestedIndex + 4 < s.length) {
                emitError(context, 16 /* NESTED_COMMENT */);
            }
            prevIndex = nestedIndex + 1;
        }
        advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
        type: 3 /* COMMENT */,
        content,
        loc: getSelection(context, start)
    };
}
function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === '?' ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf('>');
    if (closeIndex === -1) {
        content = context.source.slice(contentStart);
        advanceBy(context, context.source.length);
    }
    else {
        content = context.source.slice(contentStart, closeIndex);
        advanceBy(context, closeIndex + 1);
    }
    return {
        type: 3 /* COMMENT */,
        content,
        loc: getSelection(context, start)
    };
}
function parseElement(context, ancestors) {
    // Start tag.
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0 /* Start */, parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
        return element;
    }
    // Children.
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    element.children = children;
    // End tag.
    if (startsWithEndTagOpen(context.source, element.tag)) {
        parseTag(context, 1 /* End */, parent);
    }
    else {
        emitError(context, 24 /* X_MISSING_END_TAG */, 0, element.loc.start);
        if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
            const first = children[0];
            if (first && startsWith(first.loc.source, '<!--')) {
                emitError(context, 8 /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */);
            }
        }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
        context.inPre = false;
    }
    if (isVPreBoundary) {
        context.inVPre = false;
    }
    return element;
}
const isSpecialTemplateDirective = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(`if,else,else-if,for,slot`);
/**
 * Parse a tag (E.g. `<div id=a>`) with that type (start tag or end tag).
 */
function parseTag(context, type, parent) {
    // Tag open.
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    // save current state in case we need to re-parse attributes with v-pre
    const cursor = getCursor(context);
    const currentSource = context.source;
    // Attributes.
    let props = parseAttributes(context, type);
    // check <pre> tag
    if (context.options.isPreTag(tag)) {
        context.inPre = true;
    }
    // check v-pre
    if (!context.inVPre &&
        props.some(p => p.type === 7 /* DIRECTIVE */ && p.name === 'pre')) {
        context.inVPre = true;
        // reset context
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(context, cursor);
        context.source = currentSource;
        // re-parse attrs and filter out v-pre itself
        props = parseAttributes(context, type).filter(p => p.name !== 'v-pre');
    }
    // Tag close.
    let isSelfClosing = false;
    if (context.source.length === 0) {
        emitError(context, 9 /* EOF_IN_TAG */);
    }
    else {
        isSelfClosing = startsWith(context.source, '/>');
        if (type === 1 /* End */ && isSelfClosing) {
            emitError(context, 4 /* END_TAG_WITH_TRAILING_SOLIDUS */);
        }
        advanceBy(context, isSelfClosing ? 2 : 1);
    }
    let tagType = 0 /* ELEMENT */;
    const options = context.options;
    if (!context.inVPre && !options.isCustomElement(tag)) {
        const hasVIs = props.some(p => p.type === 7 /* DIRECTIVE */ && p.name === 'is');
        if (options.isNativeTag && !hasVIs) {
            if (!options.isNativeTag(tag))
                tagType = 1 /* COMPONENT */;
        }
        else if (hasVIs ||
            isCoreComponent(tag) ||
            (options.isBuiltInComponent && options.isBuiltInComponent(tag)) ||
            /^[A-Z]/.test(tag) ||
            tag === 'component') {
            tagType = 1 /* COMPONENT */;
        }
        if (tag === 'slot') {
            tagType = 2 /* SLOT */;
        }
        else if (tag === 'template' &&
            props.some(p => {
                return (p.type === 7 /* DIRECTIVE */ && isSpecialTemplateDirective(p.name));
            })) {
            tagType = 3 /* TEMPLATE */;
        }
    }
    return {
        type: 1 /* ELEMENT */,
        ns,
        tag,
        tagType,
        props,
        isSelfClosing,
        children: [],
        loc: getSelection(context, start),
        codegenNode: undefined // to be created during transform phase
    };
}
function parseAttributes(context, type) {
    const props = [];
    const attributeNames = new Set();
    while (context.source.length > 0 &&
        !startsWith(context.source, '>') &&
        !startsWith(context.source, '/>')) {
        if (startsWith(context.source, '/')) {
            emitError(context, 22 /* UNEXPECTED_SOLIDUS_IN_TAG */);
            advanceBy(context, 1);
            advanceSpaces(context);
            continue;
        }
        if (type === 1 /* End */) {
            emitError(context, 3 /* END_TAG_WITH_ATTRIBUTES */);
        }
        const attr = parseAttribute(context, attributeNames);
        if (type === 0 /* Start */) {
            props.push(attr);
        }
        if (/^[^\t\r\n\f />]/.test(context.source)) {
            emitError(context, 15 /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */);
        }
        advanceSpaces(context);
    }
    return props;
}
function parseAttribute(context, nameSet) {
    // Name.
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
        emitError(context, 2 /* DUPLICATE_ATTRIBUTE */);
    }
    nameSet.add(name);
    if (name[0] === '=') {
        emitError(context, 19 /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */);
    }
    {
        const pattern = /["'<]/g;
        let m;
        while ((m = pattern.exec(name))) {
            emitError(context, 17 /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */, m.index);
        }
    }
    advanceBy(context, name.length);
    // Value
    let value = undefined;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
        advanceSpaces(context);
        advanceBy(context, 1);
        advanceSpaces(context);
        value = parseAttributeValue(context);
        if (!value) {
            emitError(context, 13 /* MISSING_ATTRIBUTE_VALUE */);
        }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
        const match = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
        const dirName = match[1] ||
            (startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
        let arg;
        if (match[2]) {
            const isSlot = dirName === 'slot';
            const startOffset = name.indexOf(match[2]);
            const loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match[2].length + ((isSlot && match[3]) || '').length));
            let content = match[2];
            let isStatic = true;
            if (content.startsWith('[')) {
                isStatic = false;
                if (!content.endsWith(']')) {
                    emitError(context, 26 /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */);
                }
                content = content.substr(1, content.length - 2);
            }
            else if (isSlot) {
                // #1241 special case for v-slot: vuetify relies extensively on slot
                // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
                // supports such usage so we are keeping it consistent with 2.x.
                content += match[3] || '';
            }
            arg = {
                type: 4 /* SIMPLE_EXPRESSION */,
                content,
                isStatic,
                constType: isStatic
                    ? 3 /* CAN_STRINGIFY */
                    : 0 /* NOT_CONSTANT */,
                loc
            };
        }
        if (value && value.isQuoted) {
            const valueLoc = value.loc;
            valueLoc.start.offset++;
            valueLoc.start.column++;
            valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
            valueLoc.source = valueLoc.source.slice(1, -1);
        }
        return {
            type: 7 /* DIRECTIVE */,
            name: dirName,
            exp: value && {
                type: 4 /* SIMPLE_EXPRESSION */,
                content: value.content,
                isStatic: false,
                // Treat as non-constant by default. This can be potentially set to
                // other values by `transformExpression` to make it eligible for hoisting.
                constType: 0 /* NOT_CONSTANT */,
                loc: value.loc
            },
            arg,
            modifiers: match[3] ? match[3].substr(1).split('.') : [],
            loc
        };
    }
    return {
        type: 6 /* ATTRIBUTE */,
        name,
        value: value && {
            type: 2 /* TEXT */,
            content: value.content,
            loc: value.loc
        },
        loc
    };
}
function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
        // Quoted value.
        advanceBy(context, 1);
        const endIndex = context.source.indexOf(quote);
        if (endIndex === -1) {
            content = parseTextData(context, context.source.length, 4 /* ATTRIBUTE_VALUE */);
        }
        else {
            content = parseTextData(context, endIndex, 4 /* ATTRIBUTE_VALUE */);
            advanceBy(context, 1);
        }
    }
    else {
        // Unquoted
        const match = /^[^\t\r\n\f >]+/.exec(context.source);
        if (!match) {
            return undefined;
        }
        const unexpectedChars = /["'<=`]/g;
        let m;
        while ((m = unexpectedChars.exec(match[0]))) {
            emitError(context, 18 /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */, m.index);
        }
        content = parseTextData(context, match[0].length, 4 /* ATTRIBUTE_VALUE */);
    }
    return { content, isQuoted, loc: getSelection(context, start) };
}
function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
        emitError(context, 25 /* X_MISSING_INTERPOLATION_END */);
        return undefined;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
        advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
        type: 5 /* INTERPOLATION */,
        content: {
            type: 4 /* SIMPLE_EXPRESSION */,
            isStatic: false,
            // Set `isConstant` to false by default and will decide in transformExpression
            constType: 0 /* NOT_CONSTANT */,
            content,
            loc: getSelection(context, innerStart, innerEnd)
        },
        loc: getSelection(context, start)
    };
}
function parseText(context, mode) {
    const endTokens = ['<', context.options.delimiters[0]];
    if (mode === 3 /* CDATA */) {
        endTokens.push(']]>');
    }
    let endIndex = context.source.length;
    for (let i = 0; i < endTokens.length; i++) {
        const index = context.source.indexOf(endTokens[i], 1);
        if (index !== -1 && endIndex > index) {
            endIndex = index;
        }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
        type: 2 /* TEXT */,
        content,
        loc: getSelection(context, start)
    };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */
function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2 /* RAWTEXT */ ||
        mode === 3 /* CDATA */ ||
        rawText.indexOf('&') === -1) {
        return rawText;
    }
    else {
        // DATA or RCDATA containing "&"". Entity decoding required.
        return context.options.decodeEntities(rawText, mode === 4 /* ATTRIBUTE_VALUE */);
    }
}
function getCursor(context) {
    const { column, line, offset } = context;
    return { column, line, offset };
}
function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
        start,
        end,
        source: context.originalSource.slice(start.offset, end.offset)
    };
}
function last(xs) {
    return xs[xs.length - 1];
}
function startsWith(source, searchString) {
    return source.startsWith(searchString);
}
function advanceBy(context, numberOfCharacters) {
    const { source } = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
}
function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
        advanceBy(context, match[0].length);
    }
}
function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}
function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
        loc.offset += offset;
        loc.column += offset;
    }
    context.options.onError(createCompilerError(code, {
        start: loc,
        end: loc,
        source: ''
    }));
}
function isEnd(context, mode, ancestors) {
    const s = context.source;
    switch (mode) {
        case 0 /* DATA */:
            if (startsWith(s, '</')) {
                //TODO: probably bad performance
                for (let i = ancestors.length - 1; i >= 0; --i) {
                    if (startsWithEndTagOpen(s, ancestors[i].tag)) {
                        return true;
                    }
                }
            }
            break;
        case 1 /* RCDATA */:
        case 2 /* RAWTEXT */: {
            const parent = last(ancestors);
            if (parent && startsWithEndTagOpen(s, parent.tag)) {
                return true;
            }
            break;
        }
        case 3 /* CDATA */:
            if (startsWith(s, ']]>')) {
                return true;
            }
            break;
    }
    return !s;
}
function startsWithEndTagOpen(source, tag) {
    return (startsWith(source, '</') &&
        source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() &&
        /[\t\r\n\f />]/.test(source[2 + tag.length] || '>'));
}

function hoistStatic(root, context) {
    walk(root, context, new Map(), 
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    isSingleElementRoot(root, root.children[0]));
}
function isSingleElementRoot(root, child) {
    const { children } = root;
    return (children.length === 1 &&
        child.type === 1 /* ELEMENT */ &&
        !isSlotOutlet(child));
}
function walk(node, context, resultCache, doNotHoistNode = false) {
    let hasHoistedNode = false;
    // Some transforms, e.g. transformAssetUrls from @vue/compiler-sfc, replaces
    // static bindings with expressions. These expressions are guaranteed to be
    // constant so they are still eligible for hoisting, but they are only
    // available at runtime and therefore cannot be evaluated ahead of time.
    // This is only a concern for pre-stringification (via transformHoist by
    // @vue/compiler-dom), but doing it here allows us to perform only one full
    // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
    // stringficiation threshold is met.
    let canStringify = true;
    const { children } = node;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // only plain elements & text calls are eligible for hoisting.
        if (child.type === 1 /* ELEMENT */ &&
            child.tagType === 0 /* ELEMENT */) {
            const constantType = doNotHoistNode
                ? 0 /* NOT_CONSTANT */
                : getConstantType(child, resultCache);
            if (constantType > 0 /* NOT_CONSTANT */) {
                if (constantType < 3 /* CAN_STRINGIFY */) {
                    canStringify = false;
                }
                if (constantType >= 2 /* CAN_HOIST */) {
                    child.codegenNode.patchFlag =
                        -1 /* HOISTED */ + (( true) ? ` /* HOISTED */` : 0);
                    child.codegenNode = context.hoist(child.codegenNode);
                    hasHoistedNode = true;
                    continue;
                }
            }
            else {
                // node may contain dynamic children, but its props may be eligible for
                // hoisting.
                const codegenNode = child.codegenNode;
                if (codegenNode.type === 13 /* VNODE_CALL */) {
                    const flag = getPatchFlag(codegenNode);
                    if ((!flag ||
                        flag === 512 /* NEED_PATCH */ ||
                        flag === 1 /* TEXT */) &&
                        getGeneratedPropsConstantType(child, resultCache) >=
                            2 /* CAN_HOIST */) {
                        const props = getNodeProps(child);
                        if (props) {
                            codegenNode.props = context.hoist(props);
                        }
                    }
                }
            }
        }
        else if (child.type === 12 /* TEXT_CALL */) {
            const contentType = getConstantType(child.content, resultCache);
            if (contentType > 0) {
                if (contentType < 3 /* CAN_STRINGIFY */) {
                    canStringify = false;
                }
                if (contentType >= 2 /* CAN_HOIST */) {
                    child.codegenNode = context.hoist(child.codegenNode);
                    hasHoistedNode = true;
                }
            }
        }
        // walk further
        if (child.type === 1 /* ELEMENT */) {
            walk(child, context, resultCache);
        }
        else if (child.type === 11 /* FOR */) {
            // Do not hoist v-for single child because it has to be a block
            walk(child, context, resultCache, child.children.length === 1);
        }
        else if (child.type === 9 /* IF */) {
            for (let i = 0; i < child.branches.length; i++) {
                // Do not hoist v-if single child because it has to be a block
                walk(child.branches[i], context, resultCache, child.branches[i].children.length === 1);
            }
        }
    }
    if (canStringify && hasHoistedNode && context.transformHoist) {
        context.transformHoist(children, context, node);
    }
}
function getConstantType(node, resultCache = new Map()) {
    switch (node.type) {
        case 1 /* ELEMENT */:
            if (node.tagType !== 0 /* ELEMENT */) {
                return 0 /* NOT_CONSTANT */;
            }
            const cached = resultCache.get(node);
            if (cached !== undefined) {
                return cached;
            }
            const codegenNode = node.codegenNode;
            if (codegenNode.type !== 13 /* VNODE_CALL */) {
                return 0 /* NOT_CONSTANT */;
            }
            const flag = getPatchFlag(codegenNode);
            if (!flag) {
                let returnType = 3 /* CAN_STRINGIFY */;
                // Element itself has no patch flag. However we still need to check:
                // 1. Even for a node with no patch flag, it is possible for it to contain
                // non-hoistable expressions that refers to scope variables, e.g. compiler
                // injected keys or cached event handlers. Therefore we need to always
                // check the codegenNode's props to be sure.
                const generatedPropsType = getGeneratedPropsConstantType(node, resultCache);
                if (generatedPropsType === 0 /* NOT_CONSTANT */) {
                    resultCache.set(node, 0 /* NOT_CONSTANT */);
                    return 0 /* NOT_CONSTANT */;
                }
                if (generatedPropsType < returnType) {
                    returnType = generatedPropsType;
                }
                // 2. its children.
                for (let i = 0; i < node.children.length; i++) {
                    const childType = getConstantType(node.children[i], resultCache);
                    if (childType === 0 /* NOT_CONSTANT */) {
                        resultCache.set(node, 0 /* NOT_CONSTANT */);
                        return 0 /* NOT_CONSTANT */;
                    }
                    if (childType < returnType) {
                        returnType = childType;
                    }
                }
                // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
                // type, check if any of the props can cause the type to be lowered
                // we can skip can_patch because it's guaranteed by the absence of a
                // patchFlag.
                if (returnType > 1 /* CAN_SKIP_PATCH */) {
                    for (let i = 0; i < node.props.length; i++) {
                        const p = node.props[i];
                        if (p.type === 7 /* DIRECTIVE */ && p.name === 'bind' && p.exp) {
                            const expType = getConstantType(p.exp, resultCache);
                            if (expType === 0 /* NOT_CONSTANT */) {
                                resultCache.set(node, 0 /* NOT_CONSTANT */);
                                return 0 /* NOT_CONSTANT */;
                            }
                            if (expType < returnType) {
                                returnType = expType;
                            }
                        }
                    }
                }
                // only svg/foreignObject could be block here, however if they are
                // static then they don't need to be blocks since there will be no
                // nested updates.
                if (codegenNode.isBlock) {
                    codegenNode.isBlock = false;
                }
                resultCache.set(node, returnType);
                return returnType;
            }
            else {
                resultCache.set(node, 0 /* NOT_CONSTANT */);
                return 0 /* NOT_CONSTANT */;
            }
        case 2 /* TEXT */:
        case 3 /* COMMENT */:
            return 3 /* CAN_STRINGIFY */;
        case 9 /* IF */:
        case 11 /* FOR */:
        case 10 /* IF_BRANCH */:
            return 0 /* NOT_CONSTANT */;
        case 5 /* INTERPOLATION */:
        case 12 /* TEXT_CALL */:
            return getConstantType(node.content, resultCache);
        case 4 /* SIMPLE_EXPRESSION */:
            return node.constType;
        case 8 /* COMPOUND_EXPRESSION */:
            let returnType = 3 /* CAN_STRINGIFY */;
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(child)) {
                    continue;
                }
                const childType = getConstantType(child, resultCache);
                if (childType === 0 /* NOT_CONSTANT */) {
                    return 0 /* NOT_CONSTANT */;
                }
                else if (childType < returnType) {
                    returnType = childType;
                }
            }
            return returnType;
        default:
            if ((true)) ;
            return 0 /* NOT_CONSTANT */;
    }
}
function getGeneratedPropsConstantType(node, resultCache) {
    let returnType = 3 /* CAN_STRINGIFY */;
    const props = getNodeProps(node);
    if (props && props.type === 15 /* JS_OBJECT_EXPRESSION */) {
        const { properties } = props;
        for (let i = 0; i < properties.length; i++) {
            const { key, value } = properties[i];
            const keyType = getConstantType(key, resultCache);
            if (keyType === 0 /* NOT_CONSTANT */) {
                return keyType;
            }
            if (keyType < returnType) {
                returnType = keyType;
            }
            if (value.type !== 4 /* SIMPLE_EXPRESSION */) {
                return 0 /* NOT_CONSTANT */;
            }
            const valueType = getConstantType(value, resultCache);
            if (valueType === 0 /* NOT_CONSTANT */) {
                return valueType;
            }
            if (valueType < returnType) {
                returnType = valueType;
            }
        }
    }
    return returnType;
}
function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13 /* VNODE_CALL */) {
        return codegenNode.props;
    }
}
function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, { filename = '', prefixIdentifiers = false, hoistStatic = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP, isCustomElement = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP, expressionPlugins = [], scopeId = null, ssr = false, ssrCssVars = ``, bindingMetadata = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError }) {
    const nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
    const context = {
        // options
        selfName: nameMatch && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(nameMatch[1])),
        prefixIdentifiers,
        hoistStatic,
        cacheHandlers,
        nodeTransforms,
        directiveTransforms,
        transformHoist,
        isBuiltInComponent,
        isCustomElement,
        expressionPlugins,
        scopeId,
        ssr,
        ssrCssVars,
        bindingMetadata,
        inline,
        isTS,
        onError,
        // state
        root,
        helpers: new Set(),
        components: new Set(),
        directives: new Set(),
        hoists: [],
        imports: new Set(),
        temps: 0,
        cached: 0,
        identifiers: Object.create(null),
        scopes: {
            vFor: 0,
            vSlot: 0,
            vPre: 0,
            vOnce: 0
        },
        parent: null,
        currentNode: root,
        childIndex: 0,
        // methods
        helper(name) {
            context.helpers.add(name);
            return name;
        },
        helperString(name) {
            return `_${helperNameMap[context.helper(name)]}`;
        },
        replaceNode(node) {
            /* istanbul ignore if */
            if ((true)) {
                if (!context.currentNode) {
                    throw new Error(`Node being replaced is already removed.`);
                }
                if (!context.parent) {
                    throw new Error(`Cannot replace root node.`);
                }
            }
            context.parent.children[context.childIndex] = context.currentNode = node;
        },
        removeNode(node) {
            if (( true) && !context.parent) {
                throw new Error(`Cannot remove root node.`);
            }
            const list = context.parent.children;
            const removalIndex = node
                ? list.indexOf(node)
                : context.currentNode
                    ? context.childIndex
                    : -1;
            /* istanbul ignore if */
            if (( true) && removalIndex < 0) {
                throw new Error(`node being removed is not a child of current parent`);
            }
            if (!node || node === context.currentNode) {
                // current node removed
                context.currentNode = null;
                context.onNodeRemoved();
            }
            else {
                // sibling node removed
                if (context.childIndex > removalIndex) {
                    context.childIndex--;
                    context.onNodeRemoved();
                }
            }
            context.parent.children.splice(removalIndex, 1);
        },
        onNodeRemoved: () => { },
        addIdentifiers(exp) {
        },
        removeIdentifiers(exp) {
        },
        hoist(exp) {
            context.hoists.push(exp);
            const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2 /* CAN_HOIST */);
            identifier.hoisted = exp;
            return identifier;
        },
        cache(exp, isVNode = false) {
            return createCacheExpression(++context.cached, exp, isVNode);
        }
    };
    return context;
}
function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
        hoistStatic(root, context);
    }
    if (!options.ssr) {
        createRootCodegen(root, context);
    }
    // finalize meta information
    root.helpers = [...context.helpers];
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = [...context.imports];
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
}
function createRootCodegen(root, context) {
    const { helper } = context;
    const { children } = root;
    if (children.length === 1) {
        const child = children[0];
        // if the single child is an element, turn it into a block.
        if (isSingleElementRoot(root, child) && child.codegenNode) {
            // single element root is never hoisted so codegenNode will never be
            // SimpleExpressionNode
            const codegenNode = child.codegenNode;
            if (codegenNode.type === 13 /* VNODE_CALL */) {
                codegenNode.isBlock = true;
                helper(OPEN_BLOCK);
                helper(CREATE_BLOCK);
            }
            root.codegenNode = codegenNode;
        }
        else {
            // - single <slot/>, IfNode, ForNode: already blocks.
            // - single text node: always patched.
            // root codegen falls through via genNode()
            root.codegenNode = child;
        }
    }
    else if (children.length > 1) {
        // root has multiple nodes - return a fragment block.
        let patchFlag = 64 /* STABLE_FRAGMENT */;
        let patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64];
        // check if the fragment actually contains a single valid child with
        // the rest being comments
        if (( true) &&
            children.filter(c => c.type !== 3 /* COMMENT */).length === 1) {
            patchFlag |= 2048 /* DEV_ROOT_FRAGMENT */;
            patchFlagText += `, ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]}`;
        }
        root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + (( true) ? ` /* ${patchFlagText} */` : 0), undefined, undefined, true);
    }
    else ;
}
function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
        i--;
    };
    for (; i < parent.children.length; i++) {
        const child = parent.children[i];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child))
            continue;
        context.parent = parent;
        context.childIndex = i;
        context.onNodeRemoved = nodeRemoved;
        traverseNode(child, context);
    }
}
function traverseNode(node, context) {
    context.currentNode = node;
    // apply transform plugins
    const { nodeTransforms } = context;
    const exitFns = [];
    for (let i = 0; i < nodeTransforms.length; i++) {
        const onExit = nodeTransforms[i](node, context);
        if (onExit) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(onExit)) {
                exitFns.push(...onExit);
            }
            else {
                exitFns.push(onExit);
            }
        }
        if (!context.currentNode) {
            // node was removed
            return;
        }
        else {
            // node may have been replaced
            node = context.currentNode;
        }
    }
    switch (node.type) {
        case 3 /* COMMENT */:
            if (!context.ssr) {
                // inject import for the Comment symbol, which is needed for creating
                // comment nodes with `createVNode`
                context.helper(CREATE_COMMENT);
            }
            break;
        case 5 /* INTERPOLATION */:
            // no need to traverse, but we need to inject toString helper
            if (!context.ssr) {
                context.helper(TO_DISPLAY_STRING);
            }
            break;
        // for container types, further traverse downwards
        case 9 /* IF */:
            for (let i = 0; i < node.branches.length; i++) {
                traverseNode(node.branches[i], context);
            }
            break;
        case 10 /* IF_BRANCH */:
        case 11 /* FOR */:
        case 1 /* ELEMENT */:
        case 0 /* ROOT */:
            traverseChildren(node, context);
            break;
    }
    // exit transforms
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
        exitFns[i]();
    }
}
function createStructuralDirectiveTransform(name, fn) {
    const matches = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name)
        ? (n) => n === name
        : (n) => name.test(n);
    return (node, context) => {
        if (node.type === 1 /* ELEMENT */) {
            const { props } = node;
            // structural directive transforms are not concerned with slots
            // as they are handled separately in vSlot.ts
            if (node.tagType === 3 /* TEMPLATE */ && props.some(isVSlot)) {
                return;
            }
            const exitFns = [];
            for (let i = 0; i < props.length; i++) {
                const prop = props[i];
                if (prop.type === 7 /* DIRECTIVE */ && matches(prop.name)) {
                    // structural directives are removed to avoid infinite recursion
                    // also we remove them *before* applying so that it can further
                    // traverse itself in case it moves the node around
                    props.splice(i, 1);
                    i--;
                    const onExit = fn(node, prop, context);
                    if (onExit)
                        exitFns.push(onExit);
                }
            }
            return exitFns;
        }
    };
}

const PURE_ANNOTATION = `/*#__PURE__*/`;
function createCodegenContext(ast, { mode = 'function', prefixIdentifiers = mode === 'module', sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssr = false }) {
    const context = {
        mode,
        prefixIdentifiers,
        sourceMap,
        filename,
        scopeId,
        optimizeImports,
        runtimeGlobalName,
        runtimeModuleName,
        ssr,
        source: ast.loc.source,
        code: ``,
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: false,
        map: undefined,
        helper(key) {
            return `_${helperNameMap[key]}`;
        },
        push(code, node) {
            context.code += code;
        },
        indent() {
            newline(++context.indentLevel);
        },
        deindent(withoutNewLine = false) {
            if (withoutNewLine) {
                --context.indentLevel;
            }
            else {
                newline(--context.indentLevel);
            }
        },
        newline() {
            newline(context.indentLevel);
        }
    };
    function newline(n) {
        context.push('\n' + `  `.repeat(n));
    }
    return context;
}
function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated)
        options.onContextCreated(context);
    const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
    const hasHelpers = ast.helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== 'module';
    // preambles
    // in setup() inline mode, the preamble is generated in a sub context
    // and returned separately.
    const preambleContext =  context;
    {
        genFunctionPreamble(ast, preambleContext);
    }
    // enter render function
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
    const signature =  args.join(', ');
    {
        push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
        push(`with (_ctx) {`);
        indent();
        // function mode const declarations should be inside with block
        // also they should be renamed to avoid collision with user properties
        if (hasHelpers) {
            push(`const { ${ast.helpers
                .map(s => `${helperNameMap[s]}: _${helperNameMap[s]}`)
                .join(', ')} } = _Vue`);
            push(`\n`);
            newline();
        }
    }
    // generate asset resolution statements
    if (ast.components.length) {
        genAssets(ast.components, 'component', context);
        if (ast.directives.length || ast.temps > 0) {
            newline();
        }
    }
    if (ast.directives.length) {
        genAssets(ast.directives, 'directive', context);
        if (ast.temps > 0) {
            newline();
        }
    }
    if (ast.temps > 0) {
        push(`let `);
        for (let i = 0; i < ast.temps; i++) {
            push(`${i > 0 ? `, ` : ``}_temp${i}`);
        }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
        push(`\n`);
        newline();
    }
    // generate the VNode tree expression
    if (!ssr) {
        push(`return `);
    }
    if (ast.codegenNode) {
        genNode(ast.codegenNode, context);
    }
    else {
        push(`null`);
    }
    if (useWithBlock) {
        deindent();
        push(`}`);
    }
    deindent();
    push(`}`);
    return {
        ast,
        code: context.code,
        preamble:  ``,
        // SourceMapGenerator does have toJSON() method but it's not in the types
        map: context.map ? context.map.toJSON() : undefined
    };
}
function genFunctionPreamble(ast, context) {
    const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName } = context;
    const VueBinding =  runtimeGlobalName;
    const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
    // Generate const declaration for helpers
    // In prefix mode, we place the const declaration at top so it's done
    // only once; But if we not prefixing, we place the declaration inside the
    // with block so it doesn't incur the `in` check cost for every helper access.
    if (ast.helpers.length > 0) {
        {
            // "with" mode.
            // save Vue in a separate variable to avoid collision
            push(`const _Vue = ${VueBinding}\n`);
            // in "with" mode, helpers are declared inside the with block to avoid
            // has check cost, but hoists are lifted out of the function - we need
            // to provide the helper here.
            if (ast.hoists.length) {
                const staticHelpers = [
                    CREATE_VNODE,
                    CREATE_COMMENT,
                    CREATE_TEXT,
                    CREATE_STATIC
                ]
                    .filter(helper => ast.helpers.includes(helper))
                    .map(aliasHelper)
                    .join(', ');
                push(`const { ${staticHelpers} } = _Vue\n`);
            }
        }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
}
function genAssets(assets, type, { helper, push, newline }) {
    const resolver = helper(type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for (let i = 0; i < assets.length; i++) {
        const id = assets[i];
        push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)})`);
        if (i < assets.length - 1) {
            newline();
        }
    }
}
function genHoists(hoists, context) {
    if (!hoists.length) {
        return;
    }
    context.pure = true;
    const { push, newline, helper, scopeId, mode } = context;
    newline();
    hoists.forEach((exp, i) => {
        if (exp) {
            push(`const _hoisted_${i + 1} = `);
            genNode(exp, context);
            newline();
        }
    });
    context.pure = false;
}
function isText$1(n) {
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(n) ||
        n.type === 4 /* SIMPLE_EXPRESSION */ ||
        n.type === 2 /* TEXT */ ||
        n.type === 5 /* INTERPOLATION */ ||
        n.type === 8 /* COMPOUND_EXPRESSION */);
}
function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 ||
        (( ( true)) && nodes.some(n => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) || !isText$1(n)));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
            push(node);
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
            genNodeListAsArray(node, context);
        }
        else {
            genNode(node, context);
        }
        if (i < nodes.length - 1) {
            if (multilines) {
                comma && push(',');
                newline();
            }
            else {
                comma && push(', ');
            }
        }
    }
}
function genNode(node, context) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
        context.push(node);
        return;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(node)) {
        context.push(context.helper(node));
        return;
    }
    switch (node.type) {
        case 1 /* ELEMENT */:
        case 9 /* IF */:
        case 11 /* FOR */:
            ( true) &&
                assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. ` +
                    `Apply appropriate transforms first.`);
            genNode(node.codegenNode, context);
            break;
        case 2 /* TEXT */:
            genText(node, context);
            break;
        case 4 /* SIMPLE_EXPRESSION */:
            genExpression(node, context);
            break;
        case 5 /* INTERPOLATION */:
            genInterpolation(node, context);
            break;
        case 12 /* TEXT_CALL */:
            genNode(node.codegenNode, context);
            break;
        case 8 /* COMPOUND_EXPRESSION */:
            genCompoundExpression(node, context);
            break;
        case 3 /* COMMENT */:
            genComment(node, context);
            break;
        case 13 /* VNODE_CALL */:
            genVNodeCall(node, context);
            break;
        case 14 /* JS_CALL_EXPRESSION */:
            genCallExpression(node, context);
            break;
        case 15 /* JS_OBJECT_EXPRESSION */:
            genObjectExpression(node, context);
            break;
        case 17 /* JS_ARRAY_EXPRESSION */:
            genArrayExpression(node, context);
            break;
        case 18 /* JS_FUNCTION_EXPRESSION */:
            genFunctionExpression(node, context);
            break;
        case 19 /* JS_CONDITIONAL_EXPRESSION */:
            genConditionalExpression(node, context);
            break;
        case 20 /* JS_CACHE_EXPRESSION */:
            genCacheExpression(node, context);
            break;
        // SSR only types
        case 21 /* JS_BLOCK_STATEMENT */:
            break;
        case 22 /* JS_TEMPLATE_LITERAL */:
            break;
        case 23 /* JS_IF_STATEMENT */:
            break;
        case 24 /* JS_ASSIGNMENT_EXPRESSION */:
            break;
        case 25 /* JS_SEQUENCE_EXPRESSION */:
            break;
        case 26 /* JS_RETURN_STATEMENT */:
            break;
        /* istanbul ignore next */
        case 10 /* IF_BRANCH */:
            // noop
            break;
        default:
            if ((true)) {
                assert(false, `unhandled codegen node type: ${node.type}`);
                // make sure we exhaust all possible types
                const exhaustiveCheck = node;
                return exhaustiveCheck;
            }
    }
}
function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
}
function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
}
function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure)
        push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
}
function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) {
            context.push(child);
        }
        else {
            genNode(child, context);
        }
    }
}
function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8 /* COMPOUND_EXPRESSION */) {
        push(`[`);
        genCompoundExpression(node, context);
        push(`]`);
    }
    else if (node.isStatic) {
        // only quote keys if necessary
        const text = isSimpleIdentifier(node.content)
            ? node.content
            : JSON.stringify(node.content);
        push(text, node);
    }
    else {
        push(`[${node.content}]`, node);
    }
}
function genComment(node, context) {
    if ((true)) {
        const { push, helper, pure } = context;
        if (pure) {
            push(PURE_ANNOTATION);
        }
        push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
    }
}
function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking } = node;
    if (directives) {
        push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
        push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
        push(PURE_ANNOTATION);
    }
    push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
        push(`)`);
    }
    if (directives) {
        push(`, `);
        genNode(directives, context);
        push(`)`);
    }
}
function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
        if (args[i] != null)
            break;
    }
    return args.slice(0, i + 1).map(arg => arg || `null`);
}
// JavaScript
function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
        push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
}
function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
        push(`{}`, node);
        return;
    }
    const multilines = properties.length > 1 ||
        (( ( true)) &&
            properties.some(p => p.value.type !== 4 /* SIMPLE_EXPRESSION */));
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
        const { key, value } = properties[i];
        // key
        genExpressionAsPropertyKey(key, context);
        push(`: `);
        // value
        genNode(value, context);
        if (i < properties.length - 1) {
            // will only reach this if it's multilines
            push(`,`);
            newline();
        }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
    const { push, indent, deindent, scopeId, mode } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) {
        push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(params)) {
        genNodeList(params, context);
    }
    else if (params) {
        genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
        push(`{`);
        indent();
    }
    if (returns) {
        if (newline) {
            push(`return `);
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(returns)) {
            genNodeListAsArray(returns, context);
        }
        else {
            genNode(returns, context);
        }
    }
    else if (body) {
        genNode(body, context);
    }
    if (newline || body) {
        deindent();
        push(`}`);
    }
    if ( isSlot) {
        push(`)`);
    }
}
function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4 /* SIMPLE_EXPRESSION */) {
        const needsParens = !isSimpleIdentifier(test.content);
        needsParens && push(`(`);
        genExpression(test, context);
        needsParens && push(`)`);
    }
    else {
        push(`(`);
        genNode(test, context);
        push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19 /* JS_CONDITIONAL_EXPRESSION */;
    if (!isNested) {
        context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
        context.indentLevel--;
    }
    needNewline && deindent(true /* without newline */);
}
function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
        indent();
        push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
        newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
        push(`,`);
        newline();
        push(`${helper(SET_BLOCK_TRACKING)}(1),`);
        newline();
        push(`_cache[${node.index}]`);
        deindent();
    }
    push(`)`);
}

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
const prohibitedKeywordRE = new RegExp('\\b' +
    ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
        'super,throw,while,yield,delete,export,import,return,switch,default,' +
        'extends,finally,continue,debugger,function,arguments,typeof,void')
        .split(',')
        .join('\\b|\\b') +
    '\\b');
// strip strings in expressions
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */
function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    // empty expressions are validated per-directive since some directives
    // do allow empty expressions.
    if (!exp.trim()) {
        return;
    }
    try {
        new Function(asRawStatements
            ? ` ${exp} `
            : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    }
    catch (e) {
        let message = e.message;
        const keywordMatch = exp
            .replace(stripStringRE, '')
            .match(prohibitedKeywordRE);
        if (keywordMatch) {
            message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
        }
        context.onError(createCompilerError(43 /* X_INVALID_EXPRESSION */, node.loc, undefined, message));
    }
}

const transformExpression = (node, context) => {
    if (node.type === 5 /* INTERPOLATION */) {
        node.content = processExpression(node.content, context);
    }
    else if (node.type === 1 /* ELEMENT */) {
        // handle directives on element
        for (let i = 0; i < node.props.length; i++) {
            const dir = node.props[i];
            // do not process for v-on & v-for since they are special handled
            if (dir.type === 7 /* DIRECTIVE */ && dir.name !== 'for') {
                const exp = dir.exp;
                const arg = dir.arg;
                // do not process exp if this is v-on:arg - we need special handling
                // for wrapping inline statements.
                if (exp &&
                    exp.type === 4 /* SIMPLE_EXPRESSION */ &&
                    !(dir.name === 'on' && arg)) {
                    dir.exp = processExpression(exp, context, 
                    // slot args must be processed as function params
                    dir.name === 'slot');
                }
                if (arg && arg.type === 4 /* SIMPLE_EXPRESSION */ && !arg.isStatic) {
                    dir.arg = processExpression(arg, context);
                }
            }
        }
    }
};
// Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.
function processExpression(node, context, 
// some expressions like v-slot props & v-for aliases should be parsed as
// function params
asParams = false, 
// v-on handler values may contain multiple statements
asRawStatements = false) {
    {
        if ((true)) {
            // simple in-browser validation (same logic in 2.x)
            validateBrowserExpression(node, context, asParams, asRawStatements);
        }
        return node;
    }
}

const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        // #1587: We need to dynamically increment the key based on the current
        // node's sibling nodes, since chained v-if/else branches are
        // rendered at the same depth
        const siblings = context.parent.children;
        let i = siblings.indexOf(ifNode);
        let key = 0;
        while (i-- >= 0) {
            const sibling = siblings[i];
            if (sibling && sibling.type === 9 /* IF */) {
                key += sibling.branches.length;
            }
        }
        // Exit callback. Complete the codegenNode when all children have been
        // transformed.
        return () => {
            if (isRoot) {
                ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
            }
            else {
                // attach this branch's codegen node to the v-if root.
                const parentCondition = getParentCondition(ifNode.codegenNode);
                parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
            }
        };
    });
});
// target-agnostic transform used for both Client and SSR
function processIf(node, dir, context, processCodegen) {
    if (dir.name !== 'else' &&
        (!dir.exp || !dir.exp.content.trim())) {
        const loc = dir.exp ? dir.exp.loc : node.loc;
        context.onError(createCompilerError(27 /* X_V_IF_NO_EXPRESSION */, dir.loc));
        dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if ( true && dir.exp) {
        validateBrowserExpression(dir.exp, context);
    }
    if (dir.name === 'if') {
        const branch = createIfBranch(node, dir);
        const ifNode = {
            type: 9 /* IF */,
            loc: node.loc,
            branches: [branch]
        };
        context.replaceNode(ifNode);
        if (processCodegen) {
            return processCodegen(ifNode, branch, true);
        }
    }
    else {
        // locate the adjacent v-if
        const siblings = context.parent.children;
        const comments = [];
        let i = siblings.indexOf(node);
        while (i-- >= -1) {
            const sibling = siblings[i];
            if (( true) && sibling && sibling.type === 3 /* COMMENT */) {
                context.removeNode(sibling);
                comments.unshift(sibling);
                continue;
            }
            if (sibling &&
                sibling.type === 2 /* TEXT */ &&
                !sibling.content.trim().length) {
                context.removeNode(sibling);
                continue;
            }
            if (sibling && sibling.type === 9 /* IF */) {
                // move the node to the if node's branches
                context.removeNode();
                const branch = createIfBranch(node, dir);
                if (( true) && comments.length) {
                    branch.children = [...comments, ...branch.children];
                }
                // check if user is forcing same key on different branches
                if (true) {
                    const key = branch.userKey;
                    if (key) {
                        sibling.branches.forEach(({ userKey }) => {
                            if (isSameKey(userKey, key)) {
                                context.onError(createCompilerError(28 /* X_V_IF_SAME_KEY */, branch.userKey.loc));
                            }
                        });
                    }
                }
                sibling.branches.push(branch);
                const onExit = processCodegen && processCodegen(sibling, branch, false);
                // since the branch was removed, it will not be traversed.
                // make sure to traverse here.
                traverseNode(branch, context);
                // call on exit
                if (onExit)
                    onExit();
                // make sure to reset currentNode after traversal to indicate this
                // node has been removed.
                context.currentNode = null;
            }
            else {
                context.onError(createCompilerError(29 /* X_V_ELSE_NO_ADJACENT_IF */, node.loc));
            }
            break;
        }
    }
}
function createIfBranch(node, dir) {
    return {
        type: 10 /* IF_BRANCH */,
        loc: node.loc,
        condition: dir.name === 'else' ? undefined : dir.exp,
        children: node.tagType === 3 /* TEMPLATE */ && !findDir(node, 'for')
            ? node.children
            : [node],
        userKey: findProp(node, `key`)
    };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
        return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), 
        // make sure to pass in asBlock: true so that the comment node call
        // closes the current block.
        createCallExpression(context.helper(CREATE_COMMENT), [
            ( true) ? '"v-if"' : 0,
            'true'
        ]));
    }
    else {
        return createChildrenCodegenNode(branch, keyIndex, context);
    }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2 /* CAN_HOIST */));
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1 /* ELEMENT */;
    if (needFragmentWrapper) {
        if (children.length === 1 && firstChild.type === 11 /* FOR */) {
            // optimize away nested fragments when child is a ForNode
            const vnodeCall = firstChild.codegenNode;
            injectProp(vnodeCall, keyProperty, context);
            return vnodeCall;
        }
        else {
            return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, 64 /* STABLE_FRAGMENT */ +
                (( true)
                    ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]} */`
                    : 0), undefined, undefined, true, false, branch.loc);
        }
    }
    else {
        const vnodeCall = firstChild
            .codegenNode;
        // Change createVNode to createBlock.
        if (vnodeCall.type === 13 /* VNODE_CALL */) {
            vnodeCall.isBlock = true;
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
        }
        // inject branch key
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
    }
}
function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
        return false;
    }
    if (a.type === 6 /* ATTRIBUTE */) {
        if (a.value.content !== b.value.content) {
            return false;
        }
    }
    else {
        // directive
        const exp = a.exp;
        const branchExp = b.exp;
        if (exp.type !== branchExp.type) {
            return false;
        }
        if (exp.type !== 4 /* SIMPLE_EXPRESSION */ ||
            (exp.isStatic !== branchExp.isStatic ||
                exp.content !== branchExp.content)) {
            return false;
        }
    }
    return true;
}
function getParentCondition(node) {
    while (true) {
        if (node.type === 19 /* JS_CONDITIONAL_EXPRESSION */) {
            if (node.alternate.type === 19 /* JS_CONDITIONAL_EXPRESSION */) {
                node = node.alternate;
            }
            else {
                return node;
            }
        }
        else if (node.type === 20 /* JS_CACHE_EXPRESSION */) {
            node = node.value;
        }
    }
}

const transformFor = createStructuralDirectiveTransform('for', (node, dir, context) => {
    const { helper } = context;
    return processFor(node, dir, context, forNode => {
        // create the loop render function expression now, and add the
        // iterator on exit after all children have been traversed
        const renderExp = createCallExpression(helper(RENDER_LIST), [
            forNode.source
        ]);
        const keyProp = findProp(node, `key`);
        const keyProperty = keyProp
            ? createObjectProperty(`key`, keyProp.type === 6 /* ATTRIBUTE */
                ? createSimpleExpression(keyProp.value.content, true)
                : keyProp.exp)
            : null;
        const isStableFragment = forNode.source.type === 4 /* SIMPLE_EXPRESSION */ &&
            forNode.source.constType > 0;
        const fragmentFlag = isStableFragment
            ? 64 /* STABLE_FRAGMENT */
            : keyProp
                ? 128 /* KEYED_FRAGMENT */
                : 256 /* UNKEYED_FRAGMENT */;
        forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag +
            (( true) ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[fragmentFlag]} */` : 0), undefined, undefined, true /* isBlock */, !isStableFragment /* disableTracking */, node.loc);
        return () => {
            // finish the codegen now that all children have been traversed
            let childBlock;
            const isTemplate = isTemplateNode(node);
            const { children } = forNode;
            // check <template v-for> key placement
            if (( true) && isTemplate) {
                node.children.some(c => {
                    if (c.type === 1 /* ELEMENT */) {
                        const key = findProp(c, 'key');
                        if (key) {
                            context.onError(createCompilerError(32 /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */, key.loc));
                            return true;
                        }
                    }
                });
            }
            const needFragmentWrapper = children.length !== 1 || children[0].type !== 1 /* ELEMENT */;
            const slotOutlet = isSlotOutlet(node)
                ? node
                : isTemplate &&
                    node.children.length === 1 &&
                    isSlotOutlet(node.children[0])
                    ? node.children[0] // api-extractor somehow fails to infer this
                    : null;
            if (slotOutlet) {
                // <slot v-for="..."> or <template v-for="..."><slot/></template>
                childBlock = slotOutlet.codegenNode;
                if (isTemplate && keyProperty) {
                    // <template v-for="..." :key="..."><slot/></template>
                    // we need to inject the key to the renderSlot() call.
                    // the props for renderSlot is passed as the 3rd argument.
                    injectProp(childBlock, keyProperty, context);
                }
            }
            else if (needFragmentWrapper) {
                // <template v-for="..."> with text or multi-elements
                // should generate a fragment block for each loop
                childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64 /* STABLE_FRAGMENT */ +
                    (( true)
                        ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]} */`
                        : 0), undefined, undefined, true);
            }
            else {
                // Normal element v-for. Directly use the child's codegenNode
                // but mark it as a block.
                childBlock = children[0]
                    .codegenNode;
                if (isTemplate && keyProperty) {
                    injectProp(childBlock, keyProperty, context);
                }
                childBlock.isBlock = !isStableFragment;
                if (childBlock.isBlock) {
                    helper(OPEN_BLOCK);
                    helper(CREATE_BLOCK);
                }
            }
            renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true /* force newline */));
        };
    });
});
// target-agnostic transform used for both Client and SSR
function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
        context.onError(createCompilerError(30 /* X_V_FOR_NO_EXPRESSION */, dir.loc));
        return;
    }
    const parseResult = parseForExpression(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    dir.exp, context);
    if (!parseResult) {
        context.onError(createCompilerError(31 /* X_V_FOR_MALFORMED_EXPRESSION */, dir.loc));
        return;
    }
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
        type: 11 /* FOR */,
        loc: dir.loc,
        source,
        valueAlias: value,
        keyAlias: key,
        objectIndexAlias: index,
        parseResult,
        children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    // bookkeeping
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
        scopes.vFor--;
        if (onExit)
            onExit();
    };
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
// This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch)
        return;
    const [, LHS, RHS] = inMatch;
    const result = {
        source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
        value: undefined,
        key: undefined,
        index: undefined
    };
    if (true) {
        validateBrowserExpression(result.source, context);
    }
    let valueContent = LHS.trim()
        .replace(stripParensRE, '')
        .trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
        valueContent = valueContent.replace(forIteratorRE, '').trim();
        const keyContent = iteratorMatch[1].trim();
        let keyOffset;
        if (keyContent) {
            keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
            result.key = createAliasExpression(loc, keyContent, keyOffset);
            if (true) {
                validateBrowserExpression(result.key, context, true);
            }
        }
        if (iteratorMatch[2]) {
            const indexContent = iteratorMatch[2].trim();
            if (indexContent) {
                result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key
                    ? keyOffset + keyContent.length
                    : trimmedOffset + valueContent.length));
                if (true) {
                    validateBrowserExpression(result.index, context, true);
                }
            }
        }
    }
    if (valueContent) {
        result.value = createAliasExpression(loc, valueContent, trimmedOffset);
        if (true) {
            validateBrowserExpression(result.value, context, true);
        }
    }
    return result;
}
function createAliasExpression(range, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}
function createForLoopParams({ value, key, index }) {
    const params = [];
    if (value) {
        params.push(value);
    }
    if (key) {
        if (!value) {
            params.push(createSimpleExpression(`_`, false));
        }
        params.push(key);
    }
    if (index) {
        if (!key) {
            if (!value) {
                params.push(createSimpleExpression(`_`, false));
            }
            params.push(createSimpleExpression(`__`, false));
        }
        params.push(index);
    }
    return params;
}

const defaultFallback = createSimpleExpression(`undefined`, false);
// A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.
const trackSlotScopes = (node, context) => {
    if (node.type === 1 /* ELEMENT */ &&
        (node.tagType === 1 /* COMPONENT */ ||
            node.tagType === 3 /* TEMPLATE */)) {
        // We are only checking non-empty v-slot here
        // since we only care about slots that introduce scope variables.
        const vSlot = findDir(node, 'slot');
        if (vSlot) {
            const slotProps = vSlot.exp;
            context.scopes.vSlot++;
            return () => {
                context.scopes.vSlot--;
            };
        }
    }
};
// A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }
const trackVForSlotScopes = (node, context) => {
    let vFor;
    if (isTemplateNode(node) &&
        node.props.some(isVSlot) &&
        (vFor = findDir(node, 'for'))) {
        const result = (vFor.parseResult = parseForExpression(vFor.exp, context));
        if (result) {
            const { value, key, index } = result;
            const { addIdentifiers, removeIdentifiers } = context;
            value && addIdentifiers(value);
            key && addIdentifiers(key);
            index && addIdentifiers(index);
            return () => {
                value && removeIdentifiers(value);
                key && removeIdentifiers(key);
                index && removeIdentifiers(index);
            };
        }
    }
};
const buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false /* newline */, true /* isSlot */, children.length ? children[0].loc : loc);
// Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    const buildDefaultSlotProperty = (props, children) => createObjectProperty(`default`, buildSlotFn(props, children, loc));
    // If the slot is inside a v-for or another v-slot, force it to be dynamic
    // since it likely uses a scope variable.
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    // 1. Check for slot with slotProps on component itself.
    //    <Comp v-slot="{ prop }"/>
    const onComponentSlot = findDir(node, 'slot', true);
    if (onComponentSlot) {
        const { arg, exp } = onComponentSlot;
        if (arg && !isStaticExp(arg)) {
            hasDynamicSlots = true;
        }
        slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
    }
    // 2. Iterate through children and check for template slots
    //    <template v-slot:foo="{ prop }">
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = new Set();
    for (let i = 0; i < children.length; i++) {
        const slotElement = children[i];
        let slotDir;
        if (!isTemplateNode(slotElement) ||
            !(slotDir = findDir(slotElement, 'slot', true))) {
            // not a <template v-slot>, skip.
            if (slotElement.type !== 3 /* COMMENT */) {
                implicitDefaultChildren.push(slotElement);
            }
            continue;
        }
        if (onComponentSlot) {
            // already has on-component slot - this is incorrect usage.
            context.onError(createCompilerError(36 /* X_V_SLOT_MIXED_SLOT_USAGE */, slotDir.loc));
            break;
        }
        hasTemplateSlots = true;
        const { children: slotChildren, loc: slotLoc } = slotElement;
        const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
        // check if name is dynamic.
        let staticSlotName;
        if (isStaticExp(slotName)) {
            staticSlotName = slotName ? slotName.content : `default`;
        }
        else {
            hasDynamicSlots = true;
        }
        const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
        // check if this slot is conditional (v-if/v-for)
        let vIf;
        let vElse;
        let vFor;
        if ((vIf = findDir(slotElement, 'if'))) {
            hasDynamicSlots = true;
            dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
        }
        else if ((vElse = findDir(slotElement, /^else(-if)?$/, true /* allowEmpty */))) {
            // find adjacent v-if
            let j = i;
            let prev;
            while (j--) {
                prev = children[j];
                if (prev.type !== 3 /* COMMENT */) {
                    break;
                }
            }
            if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
                // remove node
                children.splice(i, 1);
                i--;
                // attach this slot to previous conditional
                let conditional = dynamicSlots[dynamicSlots.length - 1];
                while (conditional.alternate.type === 19 /* JS_CONDITIONAL_EXPRESSION */) {
                    conditional = conditional.alternate;
                }
                conditional.alternate = vElse.exp
                    ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback)
                    : buildDynamicSlot(slotName, slotFunction);
            }
            else {
                context.onError(createCompilerError(29 /* X_V_ELSE_NO_ADJACENT_IF */, vElse.loc));
            }
        }
        else if ((vFor = findDir(slotElement, 'for'))) {
            hasDynamicSlots = true;
            const parseResult = vFor.parseResult ||
                parseForExpression(vFor.exp, context);
            if (parseResult) {
                // Render the dynamic slots as an array and add it to the createSlot()
                // args. The runtime knows how to handle it appropriately.
                dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
                    parseResult.source,
                    createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true /* force newline */)
                ]));
            }
            else {
                context.onError(createCompilerError(31 /* X_V_FOR_MALFORMED_EXPRESSION */, vFor.loc));
            }
        }
        else {
            // check duplicate static names
            if (staticSlotName) {
                if (seenSlotNames.has(staticSlotName)) {
                    context.onError(createCompilerError(37 /* X_V_SLOT_DUPLICATE_SLOT_NAMES */, dirLoc));
                    continue;
                }
                seenSlotNames.add(staticSlotName);
                if (staticSlotName === 'default') {
                    hasNamedDefaultSlot = true;
                }
            }
            slotsProperties.push(createObjectProperty(slotName, slotFunction));
        }
    }
    if (!onComponentSlot) {
        if (!hasTemplateSlots) {
            // implicit default slot (on component)
            slotsProperties.push(buildDefaultSlotProperty(undefined, children));
        }
        else if (implicitDefaultChildren.length) {
            // implicit default slot (mixed with named slots)
            if (hasNamedDefaultSlot) {
                context.onError(createCompilerError(38 /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */, implicitDefaultChildren[0].loc));
            }
            else {
                slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
            }
        }
    }
    const slotFlag = hasDynamicSlots
        ? 2 /* DYNAMIC */
        : hasForwardedSlots(node.children)
            ? 3 /* FORWARDED */
            : 1 /* STABLE */;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, 
    // 2 = compiled but dynamic = can skip normalization, but must run diff
    // 1 = compiled and static = can skip normalization AND diff as optimized
    createSimpleExpression(slotFlag + (( true) ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.slotFlagsText[slotFlag]} */` : 0), false))), loc);
    if (dynamicSlots.length) {
        slots = createCallExpression(context.helper(CREATE_SLOTS), [
            slots,
            createArrayExpression(dynamicSlots)
        ]);
    }
    return {
        slots,
        hasDynamicSlots
    };
}
function buildDynamicSlot(name, fn) {
    return createObjectExpression([
        createObjectProperty(`name`, name),
        createObjectProperty(`fn`, fn)
    ]);
}
function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type === 1 /* ELEMENT */) {
            if (child.tagType === 2 /* SLOT */ ||
                (child.tagType === 0 /* ELEMENT */ &&
                    hasForwardedSlots(child.children))) {
                return true;
            }
        }
    }
    return false;
}

// some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.
const directiveImportMap = new WeakMap();
// generate a JavaScript AST for this element's codegen
const transformElement = (node, context) => {
    if (!(node.type === 1 /* ELEMENT */ &&
        (node.tagType === 0 /* ELEMENT */ ||
            node.tagType === 1 /* COMPONENT */))) {
        return;
    }
    // perform the work on exit, after all child expressions have been
    // processed and merged.
    return function postTransformElement() {
        const { tag, props } = node;
        const isComponent = node.tagType === 1 /* COMPONENT */;
        // The goal of the transform is to create a codegenNode implementing the
        // VNodeCall interface.
        const vnodeTag = isComponent
            ? resolveComponentType(node, context)
            : `"${tag}"`;
        const isDynamicComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
        let vnodeProps;
        let vnodeChildren;
        let vnodePatchFlag;
        let patchFlag = 0;
        let vnodeDynamicProps;
        let dynamicPropNames;
        let vnodeDirectives;
        let shouldUseBlock = 
        // dynamic component may resolve to plain elements
        isDynamicComponent ||
            vnodeTag === TELEPORT ||
            vnodeTag === SUSPENSE ||
            (!isComponent &&
                // <svg> and <foreignObject> must be forced into blocks so that block
                // updates inside get proper isSVG flag at runtime. (#639, #643)
                // This is technically web-specific, but splitting the logic out of core
                // leads to too much unnecessary complexity.
                (tag === 'svg' ||
                    tag === 'foreignObject' ||
                    // #938: elements with dynamic keys should be forced into blocks
                    findProp(node, 'key', true)));
        // props
        if (props.length > 0) {
            const propsBuildResult = buildProps(node, context);
            vnodeProps = propsBuildResult.props;
            patchFlag = propsBuildResult.patchFlag;
            dynamicPropNames = propsBuildResult.dynamicPropNames;
            const directives = propsBuildResult.directives;
            vnodeDirectives =
                directives && directives.length
                    ? createArrayExpression(directives.map(dir => buildDirectiveArgs(dir, context)))
                    : undefined;
        }
        // children
        if (node.children.length > 0) {
            if (vnodeTag === KEEP_ALIVE) {
                // Although a built-in component, we compile KeepAlive with raw children
                // instead of slot functions so that it can be used inside Transition
                // or other Transition-wrapping HOCs.
                // To ensure correct updates with block optimizations, we need to:
                // 1. Force keep-alive into a block. This avoids its children being
                //    collected by a parent block.
                shouldUseBlock = true;
                // 2. Force keep-alive to always be updated, since it uses raw children.
                patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                if (( true) && node.children.length > 1) {
                    context.onError(createCompilerError(44 /* X_KEEP_ALIVE_INVALID_CHILDREN */, {
                        start: node.children[0].loc.start,
                        end: node.children[node.children.length - 1].loc.end,
                        source: ''
                    }));
                }
            }
            const shouldBuildAsSlots = isComponent &&
                // Teleport is not a real component and has dedicated runtime handling
                vnodeTag !== TELEPORT &&
                // explained above.
                vnodeTag !== KEEP_ALIVE;
            if (shouldBuildAsSlots) {
                const { slots, hasDynamicSlots } = buildSlots(node, context);
                vnodeChildren = slots;
                if (hasDynamicSlots) {
                    patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
            }
            else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
                const child = node.children[0];
                const type = child.type;
                // check for dynamic text children
                const hasDynamicTextChild = type === 5 /* INTERPOLATION */ ||
                    type === 8 /* COMPOUND_EXPRESSION */;
                if (hasDynamicTextChild &&
                    getConstantType(child) === 0 /* NOT_CONSTANT */) {
                    patchFlag |= 1 /* TEXT */;
                }
                // pass directly if the only child is a text node
                // (plain / interpolation / expression)
                if (hasDynamicTextChild || type === 2 /* TEXT */) {
                    vnodeChildren = child;
                }
                else {
                    vnodeChildren = node.children;
                }
            }
            else {
                vnodeChildren = node.children;
            }
        }
        // patchFlag & dynamicPropNames
        if (patchFlag !== 0) {
            if ((true)) {
                if (patchFlag < 0) {
                    // special flags (negative and mutually exclusive)
                    vnodePatchFlag = patchFlag + ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[patchFlag]} */`;
                }
                else {
                    // bitwise flags
                    const flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames)
                        .map(Number)
                        .filter(n => n > 0 && patchFlag & n)
                        .map(n => _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[n])
                        .join(`, `);
                    vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
                }
            }
            else {}
            if (dynamicPropNames && dynamicPropNames.length) {
                vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
            }
        }
        node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false /* disableTracking */, node.loc);
    };
};
function resolveComponentType(node, context, ssr = false) {
    const { tag } = node;
    // 1. dynamic component
    const isProp = node.tag === 'component' ? findProp(node, 'is') : findDir(node, 'is');
    if (isProp) {
        const exp = isProp.type === 6 /* ATTRIBUTE */
            ? isProp.value && createSimpleExpression(isProp.value.content, true)
            : isProp.exp;
        if (exp) {
            return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
                exp
            ]);
        }
    }
    // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
        // built-ins are simply fallthroughs / have special handling during ssr
        // so we don't need to import their runtime equivalents
        if (!ssr)
            context.helper(builtIn);
        return builtIn;
    }
    // 5. user component (resolve)
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, ssr = false) {
    const { tag, loc: elementLoc } = node;
    const isComponent = node.tagType === 1 /* COMPONENT */;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    // patchFlag analysis
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const analyzePatchFlag = ({ key, value }) => {
        if (isStaticExp(key)) {
            const name = key.content;
            const isEventHandler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name);
            if (!isComponent &&
                isEventHandler &&
                // omit the flag for click handlers because hydration gives click
                // dedicated fast path.
                name.toLowerCase() !== 'onclick' &&
                // omit v-model handlers
                name !== 'onUpdate:modelValue' &&
                // omit onVnodeXXX hooks
                !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
                hasHydrationEventBinding = true;
            }
            if (isEventHandler && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
                hasVnodeHook = true;
            }
            if (value.type === 20 /* JS_CACHE_EXPRESSION */ ||
                ((value.type === 4 /* SIMPLE_EXPRESSION */ ||
                    value.type === 8 /* COMPOUND_EXPRESSION */) &&
                    getConstantType(value) > 0)) {
                // skip if the prop is a cached handler or has constant value
                return;
            }
            if (name === 'ref') {
                hasRef = true;
            }
            else if (name === 'class' && !isComponent) {
                hasClassBinding = true;
            }
            else if (name === 'style' && !isComponent) {
                hasStyleBinding = true;
            }
            else if (name !== 'key' && !dynamicPropNames.includes(name)) {
                dynamicPropNames.push(name);
            }
        }
        else {
            hasDynamicKeys = true;
        }
    };
    for (let i = 0; i < props.length; i++) {
        // static attribute
        const prop = props[i];
        if (prop.type === 6 /* ATTRIBUTE */) {
            const { loc, name, value } = prop;
            let isStatic = true;
            if (name === 'ref') {
                hasRef = true;
            }
            // skip :is on <component>
            if (name === 'is' && tag === 'component') {
                continue;
            }
            properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
        }
        else {
            // directives
            const { name, arg, exp, loc } = prop;
            const isBind = name === 'bind';
            const isOn = name === 'on';
            // skip v-slot - it is handled by its dedicated transform.
            if (name === 'slot') {
                if (!isComponent) {
                    context.onError(createCompilerError(39 /* X_V_SLOT_MISPLACED */, loc));
                }
                continue;
            }
            // skip v-once - it is handled by its dedicated transform.
            if (name === 'once') {
                continue;
            }
            // skip v-is and :is on <component>
            if (name === 'is' ||
                (isBind && tag === 'component' && isBindKey(arg, 'is'))) {
                continue;
            }
            // skip v-on in SSR compilation
            if (isOn && ssr) {
                continue;
            }
            // special case for v-bind and v-on with no argument
            if (!arg && (isBind || isOn)) {
                hasDynamicKeys = true;
                if (exp) {
                    if (properties.length) {
                        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
                        properties = [];
                    }
                    if (isBind) {
                        mergeArgs.push(exp);
                    }
                    else {
                        // v-on="obj" -> toHandlers(obj)
                        mergeArgs.push({
                            type: 14 /* JS_CALL_EXPRESSION */,
                            loc,
                            callee: context.helper(TO_HANDLERS),
                            arguments: [exp]
                        });
                    }
                }
                else {
                    context.onError(createCompilerError(isBind
                        ? 33 /* X_V_BIND_NO_EXPRESSION */
                        : 34 /* X_V_ON_NO_EXPRESSION */, loc));
                }
                continue;
            }
            const directiveTransform = context.directiveTransforms[name];
            if (directiveTransform) {
                // has built-in directive transform.
                const { props, needRuntime } = directiveTransform(prop, node, context);
                !ssr && props.forEach(analyzePatchFlag);
                properties.push(...props);
                if (needRuntime) {
                    runtimeDirectives.push(prop);
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(needRuntime)) {
                        directiveImportMap.set(prop, needRuntime);
                    }
                }
            }
            else {
                // no built-in transform, this is a user custom directive.
                runtimeDirectives.push(prop);
            }
        }
    }
    let propsExpression = undefined;
    // has v-bind="object" or v-on="object", wrap with mergeProps
    if (mergeArgs.length) {
        if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
        }
        if (mergeArgs.length > 1) {
            propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
        }
        else {
            // single v-bind with nothing else - no need for a mergeProps call
            propsExpression = mergeArgs[0];
        }
    }
    else if (properties.length) {
        propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    // patchFlag analysis
    if (hasDynamicKeys) {
        patchFlag |= 16 /* FULL_PROPS */;
    }
    else {
        if (hasClassBinding) {
            patchFlag |= 2 /* CLASS */;
        }
        if (hasStyleBinding) {
            patchFlag |= 4 /* STYLE */;
        }
        if (dynamicPropNames.length) {
            patchFlag |= 8 /* PROPS */;
        }
        if (hasHydrationEventBinding) {
            patchFlag |= 32 /* HYDRATE_EVENTS */;
        }
    }
    if ((patchFlag === 0 || patchFlag === 32 /* HYDRATE_EVENTS */) &&
        (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
        patchFlag |= 512 /* NEED_PATCH */;
    }
    return {
        props: propsExpression,
        directives: runtimeDirectives,
        patchFlag,
        dynamicPropNames
    };
}
// Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation
function dedupeProperties(properties) {
    const knownProps = new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
        const prop = properties[i];
        // dynamic keys are always allowed
        if (prop.key.type === 8 /* COMPOUND_EXPRESSION */ || !prop.key.isStatic) {
            deduped.push(prop);
            continue;
        }
        const name = prop.key.content;
        const existing = knownProps.get(name);
        if (existing) {
            if (name === 'style' || name === 'class' || name.startsWith('on')) {
                mergeAsArray(existing, prop);
            }
            // unexpected duplicate, should have emitted error during parse
        }
        else {
            knownProps.set(name, prop);
            deduped.push(prop);
        }
    }
    return deduped;
}
function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17 /* JS_ARRAY_EXPRESSION */) {
        existing.value.elements.push(incoming.value);
    }
    else {
        existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
}
function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
        // built-in directive with runtime
        dirArgs.push(context.helperString(runtime));
    }
    else {
        {
            // inject statement for resolving directive
            context.helper(RESOLVE_DIRECTIVE);
            context.directives.add(dir.name);
            dirArgs.push(toValidAssetId(dir.name, `directive`));
        }
    }
    const { loc } = dir;
    if (dir.exp)
        dirArgs.push(dir.exp);
    if (dir.arg) {
        if (!dir.exp) {
            dirArgs.push(`void 0`);
        }
        dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
        if (!dir.arg) {
            if (!dir.exp) {
                dirArgs.push(`void 0`);
            }
            dirArgs.push(`void 0`);
        }
        const trueExpression = createSimpleExpression(`true`, false, loc);
        dirArgs.push(createObjectExpression(dir.modifiers.map(modifier => createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
        propsNamesString += JSON.stringify(props[i]);
        if (i < l - 1)
            propsNamesString += ', ';
    }
    return propsNamesString + `]`;
}

const EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : 0;
const EMPTY_ARR = ( true) ? Object.freeze([]) : 0;
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

const transformSlotOutlet = (node, context) => {
    if (isSlotOutlet(node)) {
        const { children, loc } = node;
        const { slotName, slotProps } = processSlotOutlet(node, context);
        const slotArgs = [
            context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
            slotName
        ];
        if (slotProps) {
            slotArgs.push(slotProps);
        }
        if (children.length) {
            if (!slotProps) {
                slotArgs.push(`{}`);
            }
            slotArgs.push(createFunctionExpression([], children, false, false, loc));
        }
        node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
    }
};
function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = undefined;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 6 /* ATTRIBUTE */) {
            if (p.value) {
                if (p.name === 'name') {
                    slotName = JSON.stringify(p.value.content);
                }
                else {
                    p.name = camelize(p.name);
                    nonNameProps.push(p);
                }
            }
        }
        else {
            if (p.name === 'bind' && isBindKey(p.arg, 'name')) {
                if (p.exp)
                    slotName = p.exp;
            }
            else {
                if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
                    p.arg.content = camelize(p.arg.content);
                }
                nonNameProps.push(p);
            }
        }
    }
    if (nonNameProps.length > 0) {
        const { props, directives } = buildProps(node, context, nonNameProps);
        slotProps = props;
        if (directives.length) {
            context.onError(createCompilerError(35 /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */, directives[0].loc));
        }
    }
    return {
        slotName,
        slotProps
    };
}

const fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;
const transformOn = (dir, node, context, augmentor) => {
    const { loc, modifiers, arg } = dir;
    if (!dir.exp && !modifiers.length) {
        context.onError(createCompilerError(34 /* X_V_ON_NO_EXPRESSION */, loc));
    }
    let eventName;
    if (arg.type === 4 /* SIMPLE_EXPRESSION */) {
        if (arg.isStatic) {
            const rawName = arg.content;
            // for all event listeners, auto convert it to camelCase. See issue #2249
            eventName = createSimpleExpression((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(rawName)), true, arg.loc);
        }
        else {
            // #2388
            eventName = createCompoundExpression([
                `${context.helperString(TO_HANDLER_KEY)}(`,
                arg,
                `)`
            ]);
        }
    }
    else {
        // already a compound expression.
        eventName = arg;
        eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
        eventName.children.push(`)`);
    }
    // handler processing
    let exp = dir.exp;
    if (exp && !exp.content.trim()) {
        exp = undefined;
    }
    let shouldCache = context.cacheHandlers && !exp;
    if (exp) {
        const isMemberExp = isMemberExpression(exp.content);
        const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
        const hasMultipleStatements = exp.content.includes(`;`);
        if (true) {
            validateBrowserExpression(exp, context, false, hasMultipleStatements);
        }
        if (isInlineStatement || (shouldCache && isMemberExp)) {
            // wrap inline statement in a function expression
            exp = createCompoundExpression([
                `${isInlineStatement
                    ?  `$event`
                    : `${ ``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
                exp,
                hasMultipleStatements ? `}` : `)`
            ]);
        }
    }
    let ret = {
        props: [
            createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
        ]
    };
    // apply extended compiler augmentor
    if (augmentor) {
        ret = augmentor(ret);
    }
    if (shouldCache) {
        // cache handlers so that it's always the same handler being passed down.
        // this avoids unnecessary re-renders when users use inline handlers on
        // components.
        ret.props[0].value = context.cache(ret.props[0].value);
    }
    return ret;
};

// v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.
const transformBind = (dir, node, context) => {
    const { exp, modifiers, loc } = dir;
    const arg = dir.arg;
    if (arg.type !== 4 /* SIMPLE_EXPRESSION */) {
        arg.children.unshift(`(`);
        arg.children.push(`) || ""`);
    }
    else if (!arg.isStatic) {
        arg.content = `${arg.content} || ""`;
    }
    // .prop is no longer necessary due to new patch behavior
    // .sync is replaced by v-model:arg
    if (modifiers.includes('camel')) {
        if (arg.type === 4 /* SIMPLE_EXPRESSION */) {
            if (arg.isStatic) {
                arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content);
            }
            else {
                arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
            }
        }
        else {
            arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
            arg.children.push(`)`);
        }
    }
    if (!exp ||
        (exp.type === 4 /* SIMPLE_EXPRESSION */ && !exp.content.trim())) {
        context.onError(createCompilerError(33 /* X_V_BIND_NO_EXPRESSION */, loc));
        return {
            props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
        };
    }
    return {
        props: [createObjectProperty(arg, exp)]
    };
};

// Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.
const transformText = (node, context) => {
    if (node.type === 0 /* ROOT */ ||
        node.type === 1 /* ELEMENT */ ||
        node.type === 11 /* FOR */ ||
        node.type === 10 /* IF_BRANCH */) {
        // perform the transform on node exit so that all expressions have already
        // been processed.
        return () => {
            const children = node.children;
            let currentContainer = undefined;
            let hasText = false;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (isText(child)) {
                    hasText = true;
                    for (let j = i + 1; j < children.length; j++) {
                        const next = children[j];
                        if (isText(next)) {
                            if (!currentContainer) {
                                currentContainer = children[i] = {
                                    type: 8 /* COMPOUND_EXPRESSION */,
                                    loc: child.loc,
                                    children: [child]
                                };
                            }
                            // merge adjacent text node into current
                            currentContainer.children.push(` + `, next);
                            children.splice(j, 1);
                            j--;
                        }
                        else {
                            currentContainer = undefined;
                            break;
                        }
                    }
                }
            }
            if (!hasText ||
                // if this is a plain element with a single text child, leave it
                // as-is since the runtime has dedicated fast path for this by directly
                // setting textContent of the element.
                // for component root it's always normalized anyway.
                (children.length === 1 &&
                    (node.type === 0 /* ROOT */ ||
                        (node.type === 1 /* ELEMENT */ &&
                            node.tagType === 0 /* ELEMENT */)))) {
                return;
            }
            // pre-convert text nodes into createTextVNode(text) calls to avoid
            // runtime normalization.
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (isText(child) || child.type === 8 /* COMPOUND_EXPRESSION */) {
                    const callArgs = [];
                    // createTextVNode defaults to single whitespace, so if it is a
                    // single space the code could be an empty call to save bytes.
                    if (child.type !== 2 /* TEXT */ || child.content !== ' ') {
                        callArgs.push(child);
                    }
                    // mark dynamic text with flag so it gets patched inside a block
                    if (!context.ssr &&
                        getConstantType(child) === 0 /* NOT_CONSTANT */) {
                        callArgs.push(1 /* TEXT */ +
                            (( true) ? ` /* ${_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[1]} */` : 0));
                    }
                    children[i] = {
                        type: 12 /* TEXT_CALL */,
                        content: child,
                        loc: child.loc,
                        codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                    };
                }
            }
        };
    }
};

const seen = new WeakSet();
const transformOnce = (node, context) => {
    if (node.type === 1 /* ELEMENT */ && findDir(node, 'once', true)) {
        if (seen.has(node)) {
            return;
        }
        seen.add(node);
        context.helper(SET_BLOCK_TRACKING);
        return () => {
            const cur = context.currentNode;
            if (cur.codegenNode) {
                cur.codegenNode = context.cache(cur.codegenNode, true /* isVNode */);
            }
        };
    }
};

const transformModel = (dir, node, context) => {
    const { exp, arg } = dir;
    if (!exp) {
        context.onError(createCompilerError(40 /* X_V_MODEL_NO_EXPRESSION */, dir.loc));
        return createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4 /* SIMPLE_EXPRESSION */ ? exp.content : rawExp;
    // im SFC <script setup> inline mode, the exp may have been transformed into
    // _unref(exp)
    const bindingType = context.bindingMetadata[rawExp];
    const maybeRef = !true    /* SETUP_CONST */;
    if (!isMemberExpression(expString) && !maybeRef) {
        context.onError(createCompilerError(41 /* X_V_MODEL_MALFORMED_EXPRESSION */, exp.loc));
        return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression('modelValue', true);
    const eventName = arg
        ? isStaticExp(arg)
            ? `onUpdate:${arg.content}`
            : createCompoundExpression(['"onUpdate:" + ', arg])
        : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    {
        assignmentExp = createCompoundExpression([
            `${eventArg} => (`,
            exp,
            ` = $event)`
        ]);
    }
    const props = [
        // modelValue: foo
        createObjectProperty(propName, dir.exp),
        // "onUpdate:modelValue": $event => (foo = $event)
        createObjectProperty(eventName, assignmentExp)
    ];
    // modelModifiers: { foo: true, "bar-baz": true }
    if (dir.modifiers.length && node.tagType === 1 /* COMPONENT */) {
        const modifiers = dir.modifiers
            .map(m => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`)
            .join(`, `);
        const modifiersKey = arg
            ? isStaticExp(arg)
                ? `${arg.content}Modifiers`
                : createCompoundExpression([arg, ' + "Modifiers"'])
            : `modelModifiers`;
        props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2 /* CAN_HOIST */)));
    }
    return createTransformProps(props);
};
function createTransformProps(props = []) {
    return { props };
}

function getBaseTransformPreset(prefixIdentifiers) {
    return [
        [
            transformOnce,
            transformIf,
            transformFor,
            ...(  ( true)
                    ? [transformExpression]
                    : 0),
            transformSlotOutlet,
            transformElement,
            trackSlotScopes,
            transformText
        ],
        {
            on: transformOn,
            bind: transformBind,
            model: transformModel
        }
    ];
}
// we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.
function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === 'module';
    /* istanbul ignore if */
    {
        if (options.prefixIdentifiers === true) {
            onError(createCompilerError(45 /* X_PREFIX_ID_NOT_SUPPORTED */));
        }
        else if (isModuleMode) {
            onError(createCompilerError(46 /* X_MODULE_MODE_NOT_SUPPORTED */));
        }
    }
    const prefixIdentifiers = !true ;
    if ( options.cacheHandlers) {
        onError(createCompilerError(47 /* X_CACHE_HANDLER_NOT_SUPPORTED */));
    }
    if (options.scopeId && !isModuleMode) {
        onError(createCompilerError(48 /* X_SCOPE_ID_NOT_SUPPORTED */));
    }
    const ast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
        prefixIdentifiers,
        nodeTransforms: [
            ...nodeTransforms,
            ...(options.nodeTransforms || []) // user transforms
        ],
        directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
        )
    }));
    return generate(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
        prefixIdentifiers
    }));
}

const noopDirectiveTransform = () => ({ props: [] });




/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TRANSITION": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.BASE_TRANSITION,
/* harmony export */   "CAMELIZE": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAMELIZE,
/* harmony export */   "CAPITALIZE": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAPITALIZE,
/* harmony export */   "CREATE_BLOCK": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_BLOCK,
/* harmony export */   "CREATE_COMMENT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_COMMENT,
/* harmony export */   "CREATE_SLOTS": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_SLOTS,
/* harmony export */   "CREATE_STATIC": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_STATIC,
/* harmony export */   "CREATE_TEXT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_TEXT,
/* harmony export */   "CREATE_VNODE": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_VNODE,
/* harmony export */   "FRAGMENT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.FRAGMENT,
/* harmony export */   "IS_REF": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_REF,
/* harmony export */   "KEEP_ALIVE": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.KEEP_ALIVE,
/* harmony export */   "MERGE_PROPS": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.MERGE_PROPS,
/* harmony export */   "OPEN_BLOCK": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.OPEN_BLOCK,
/* harmony export */   "POP_SCOPE_ID": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.POP_SCOPE_ID,
/* harmony export */   "PUSH_SCOPE_ID": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.PUSH_SCOPE_ID,
/* harmony export */   "RENDER_LIST": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_LIST,
/* harmony export */   "RENDER_SLOT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_SLOT,
/* harmony export */   "RESOLVE_COMPONENT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_COMPONENT,
/* harmony export */   "RESOLVE_DIRECTIVE": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DIRECTIVE,
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DYNAMIC_COMPONENT,
/* harmony export */   "SET_BLOCK_TRACKING": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCK_TRACKING,
/* harmony export */   "SUSPENSE": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SUSPENSE,
/* harmony export */   "TELEPORT": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TELEPORT,
/* harmony export */   "TO_DISPLAY_STRING": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING,
/* harmony export */   "TO_HANDLERS": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLERS,
/* harmony export */   "TO_HANDLER_KEY": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLER_KEY,
/* harmony export */   "UNREF": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.UNREF,
/* harmony export */   "WITH_CTX": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_CTX,
/* harmony export */   "WITH_DIRECTIVES": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_DIRECTIVES,
/* harmony export */   "WITH_SCOPE_ID": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_SCOPE_ID,
/* harmony export */   "advancePositionWithClone": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithClone,
/* harmony export */   "advancePositionWithMutation": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithMutation,
/* harmony export */   "assert": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.assert,
/* harmony export */   "baseCompile": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile,
/* harmony export */   "baseParse": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse,
/* harmony export */   "buildProps": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildProps,
/* harmony export */   "buildSlots": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildSlots,
/* harmony export */   "createArrayExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createArrayExpression,
/* harmony export */   "createAssignmentExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createAssignmentExpression,
/* harmony export */   "createBlockStatement": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createBlockStatement,
/* harmony export */   "createCacheExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCacheExpression,
/* harmony export */   "createCallExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression,
/* harmony export */   "createCompilerError": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError,
/* harmony export */   "createCompoundExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression,
/* harmony export */   "createConditionalExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createConditionalExpression,
/* harmony export */   "createForLoopParams": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createForLoopParams,
/* harmony export */   "createFunctionExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createFunctionExpression,
/* harmony export */   "createIfStatement": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createIfStatement,
/* harmony export */   "createInterpolation": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createInterpolation,
/* harmony export */   "createObjectExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectExpression,
/* harmony export */   "createObjectProperty": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty,
/* harmony export */   "createReturnStatement": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createReturnStatement,
/* harmony export */   "createRoot": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createRoot,
/* harmony export */   "createSequenceExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSequenceExpression,
/* harmony export */   "createSimpleExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression,
/* harmony export */   "createStructuralDirectiveTransform": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createStructuralDirectiveTransform,
/* harmony export */   "createTemplateLiteral": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTemplateLiteral,
/* harmony export */   "createTransformContext": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTransformContext,
/* harmony export */   "createVNodeCall": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createVNodeCall,
/* harmony export */   "findDir": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findDir,
/* harmony export */   "findProp": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp,
/* harmony export */   "generate": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generate,
/* harmony export */   "generateCodeFrame": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame,
/* harmony export */   "getBaseTransformPreset": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getBaseTransformPreset,
/* harmony export */   "getInnerRange": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getInnerRange,
/* harmony export */   "hasDynamicKeyVBind": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind,
/* harmony export */   "hasScopeRef": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasScopeRef,
/* harmony export */   "helperNameMap": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.helperNameMap,
/* harmony export */   "injectProp": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.injectProp,
/* harmony export */   "isBindKey": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBindKey,
/* harmony export */   "isBuiltInType": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType,
/* harmony export */   "isCoreComponent": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isCoreComponent,
/* harmony export */   "isMemberExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpression,
/* harmony export */   "isSimpleIdentifier": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSimpleIdentifier,
/* harmony export */   "isSlotOutlet": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSlotOutlet,
/* harmony export */   "isStaticExp": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp,
/* harmony export */   "isTemplateNode": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isTemplateNode,
/* harmony export */   "isText": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isText,
/* harmony export */   "isVSlot": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isVSlot,
/* harmony export */   "locStub": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.locStub,
/* harmony export */   "noopDirectiveTransform": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
/* harmony export */   "processExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processExpression,
/* harmony export */   "processFor": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processFor,
/* harmony export */   "processIf": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processIf,
/* harmony export */   "processSlotOutlet": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processSlotOutlet,
/* harmony export */   "registerRuntimeHelpers": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers,
/* harmony export */   "resolveComponentType": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponentType,
/* harmony export */   "toValidAssetId": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.toValidAssetId,
/* harmony export */   "trackSlotScopes": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackSlotScopes,
/* harmony export */   "trackVForSlotScopes": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackVForSlotScopes,
/* harmony export */   "transform": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transform,
/* harmony export */   "transformBind": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformBind,
/* harmony export */   "transformElement": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformElement,
/* harmony export */   "transformExpression": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformExpression,
/* harmony export */   "transformModel": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel,
/* harmony export */   "transformOn": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn,
/* harmony export */   "traverseNode": () => /* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.traverseNode,
/* harmony export */   "DOMDirectiveTransforms": () => /* binding */ DOMDirectiveTransforms,
/* harmony export */   "DOMNodeTransforms": () => /* binding */ DOMNodeTransforms,
/* harmony export */   "TRANSITION": () => /* binding */ TRANSITION,
/* harmony export */   "TRANSITION_GROUP": () => /* binding */ TRANSITION_GROUP,
/* harmony export */   "V_MODEL_CHECKBOX": () => /* binding */ V_MODEL_CHECKBOX,
/* harmony export */   "V_MODEL_DYNAMIC": () => /* binding */ V_MODEL_DYNAMIC,
/* harmony export */   "V_MODEL_RADIO": () => /* binding */ V_MODEL_RADIO,
/* harmony export */   "V_MODEL_SELECT": () => /* binding */ V_MODEL_SELECT,
/* harmony export */   "V_MODEL_TEXT": () => /* binding */ V_MODEL_TEXT,
/* harmony export */   "V_ON_WITH_KEYS": () => /* binding */ V_ON_WITH_KEYS,
/* harmony export */   "V_ON_WITH_MODIFIERS": () => /* binding */ V_ON_WITH_MODIFIERS,
/* harmony export */   "V_SHOW": () => /* binding */ V_SHOW,
/* harmony export */   "compile": () => /* binding */ compile,
/* harmony export */   "createDOMCompilerError": () => /* binding */ createDOMCompilerError,
/* harmony export */   "parse": () => /* binding */ parse,
/* harmony export */   "parserOptions": () => /* binding */ parserOptions,
/* harmony export */   "transformStyle": () => /* binding */ transformStyle
/* harmony export */ });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");




const V_MODEL_RADIO = Symbol(( true) ? `vModelRadio` : 0);
const V_MODEL_CHECKBOX = Symbol(( true) ? `vModelCheckbox` : 0);
const V_MODEL_TEXT = Symbol(( true) ? `vModelText` : 0);
const V_MODEL_SELECT = Symbol(( true) ? `vModelSelect` : 0);
const V_MODEL_DYNAMIC = Symbol(( true) ? `vModelDynamic` : 0);
const V_ON_WITH_MODIFIERS = Symbol(( true) ? `vOnModifiersGuard` : 0);
const V_ON_WITH_KEYS = Symbol(( true) ? `vOnKeysGuard` : 0);
const V_SHOW = Symbol(( true) ? `vShow` : 0);
const TRANSITION = Symbol(( true) ? `Transition` : 0);
const TRANSITION_GROUP = Symbol(( true) ? `TransitionGroup` : 0);
(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers)({
    [V_MODEL_RADIO]: `vModelRadio`,
    [V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [V_MODEL_TEXT]: `vModelText`,
    [V_MODEL_SELECT]: `vModelSelect`,
    [V_MODEL_DYNAMIC]: `vModelDynamic`,
    [V_ON_WITH_MODIFIERS]: `withModifiers`,
    [V_ON_WITH_KEYS]: `withKeys`,
    [V_SHOW]: `vShow`,
    [TRANSITION]: `Transition`,
    [TRANSITION_GROUP]: `TransitionGroup`
});

/* eslint-disable no-restricted-globals */
let decoder;
function decodeHtmlBrowser(raw) {
    (decoder || (decoder = document.createElement('div'))).innerHTML = raw;
    return decoder.textContent;
}

const isRawTextContainer = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('style,iframe,script,noscript', true);
const parserOptions = {
    isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.isVoidTag,
    isNativeTag: tag => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag),
    isPreTag: tag => tag === 'pre',
    decodeEntities:  decodeHtmlBrowser ,
    isBuiltInComponent: (tag) => {
        if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, `Transition`)) {
            return TRANSITION;
        }
        else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, `TransitionGroup`)) {
            return TRANSITION_GROUP;
        }
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
    getNamespace(tag, parent) {
        let ns = parent ? parent.ns : 0 /* HTML */;
        if (parent && ns === 2 /* MATH_ML */) {
            if (parent.tag === 'annotation-xml') {
                if (tag === 'svg') {
                    return 1 /* SVG */;
                }
                if (parent.props.some(a => a.type === 6 /* ATTRIBUTE */ &&
                    a.name === 'encoding' &&
                    a.value != null &&
                    (a.value.content === 'text/html' ||
                        a.value.content === 'application/xhtml+xml'))) {
                    ns = 0 /* HTML */;
                }
            }
            else if (/^m(?:[ions]|text)$/.test(parent.tag) &&
                tag !== 'mglyph' &&
                tag !== 'malignmark') {
                ns = 0 /* HTML */;
            }
        }
        else if (parent && ns === 1 /* SVG */) {
            if (parent.tag === 'foreignObject' ||
                parent.tag === 'desc' ||
                parent.tag === 'title') {
                ns = 0 /* HTML */;
            }
        }
        if (ns === 0 /* HTML */) {
            if (tag === 'svg') {
                return 1 /* SVG */;
            }
            if (tag === 'math') {
                return 2 /* MATH_ML */;
            }
        }
        return ns;
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
    getTextMode({ tag, ns }) {
        if (ns === 0 /* HTML */) {
            if (tag === 'textarea' || tag === 'title') {
                return 1 /* RCDATA */;
            }
            if (isRawTextContainer(tag)) {
                return 2 /* RAWTEXT */;
            }
        }
        return 0 /* DATA */;
    }
};

// Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.
const transformStyle = node => {
    if (node.type === 1 /* ELEMENT */) {
        node.props.forEach((p, i) => {
            if (p.type === 6 /* ATTRIBUTE */ && p.name === 'style' && p.value) {
                // replace p with an expression node
                node.props[i] = {
                    type: 7 /* DIRECTIVE */,
                    name: `bind`,
                    arg: (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`style`, true, p.loc),
                    exp: parseInlineCSS(p.value.content, p.loc),
                    modifiers: [],
                    loc: p.loc
                };
            }
        });
    }
};
const parseInlineCSS = (cssText, loc) => {
    const normalized = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.parseStringStyle)(cssText);
    return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(JSON.stringify(normalized), false, loc, 3 /* CAN_STRINGIFY */);
};

function createDOMCompilerError(code, loc) {
    return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError)(code, loc,  true ? DOMErrorMessages : 0);
}
const DOMErrorMessages = {
    [49 /* X_V_HTML_NO_EXPRESSION */]: `v-html is missing expression.`,
    [50 /* X_V_HTML_WITH_CHILDREN */]: `v-html will override element children.`,
    [51 /* X_V_TEXT_NO_EXPRESSION */]: `v-text is missing expression.`,
    [52 /* X_V_TEXT_WITH_CHILDREN */]: `v-text will override element children.`,
    [53 /* X_V_MODEL_ON_INVALID_ELEMENT */]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
    [54 /* X_V_MODEL_ARG_ON_ELEMENT */]: `v-model argument is not supported on plain elements.`,
    [55 /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
    [56 /* X_V_MODEL_UNNECESSARY_VALUE */]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
    [57 /* X_V_SHOW_NO_EXPRESSION */]: `v-show is missing expression.`,
    [58 /* X_TRANSITION_INVALID_CHILDREN */]: `<Transition> expects exactly one child element or component.`,
    [59 /* X_IGNORED_SIDE_EFFECT_TAG */]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};

const transformVHtml = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
        context.onError(createDOMCompilerError(49 /* X_V_HTML_NO_EXPRESSION */, loc));
    }
    if (node.children.length) {
        context.onError(createDOMCompilerError(50 /* X_V_HTML_WITH_CHILDREN */, loc));
        node.children.length = 0;
    }
    return {
        props: [
            (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`innerHTML`, true, loc), exp || (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))
        ]
    };
};

const transformVText = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
        context.onError(createDOMCompilerError(51 /* X_V_TEXT_NO_EXPRESSION */, loc));
    }
    if (node.children.length) {
        context.onError(createDOMCompilerError(52 /* X_V_TEXT_WITH_CHILDREN */, loc));
        node.children.length = 0;
    }
    return {
        props: [
            (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`textContent`, true), exp
                ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING), [exp], loc)
                : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))
        ]
    };
};

const transformModel = (dir, node, context) => {
    const baseResult = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel)(dir, node, context);
    // base transform has errors OR component v-model (only need props)
    if (!baseResult.props.length || node.tagType === 1 /* COMPONENT */) {
        return baseResult;
    }
    if (dir.arg) {
        context.onError(createDOMCompilerError(54 /* X_V_MODEL_ARG_ON_ELEMENT */, dir.arg.loc));
    }
    function checkDuplicatedValue() {
        const value = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, 'value');
        if (value) {
            context.onError(createDOMCompilerError(56 /* X_V_MODEL_UNNECESSARY_VALUE */, value.loc));
        }
    }
    const { tag } = node;
    const isCustomElement = context.isCustomElement(tag);
    if (tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        isCustomElement) {
        let directiveToUse = V_MODEL_TEXT;
        let isInvalidType = false;
        if (tag === 'input' || isCustomElement) {
            const type = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, `type`);
            if (type) {
                if (type.type === 7 /* DIRECTIVE */) {
                    // :type="foo"
                    directiveToUse = V_MODEL_DYNAMIC;
                }
                else if (type.value) {
                    switch (type.value.content) {
                        case 'radio':
                            directiveToUse = V_MODEL_RADIO;
                            break;
                        case 'checkbox':
                            directiveToUse = V_MODEL_CHECKBOX;
                            break;
                        case 'file':
                            isInvalidType = true;
                            context.onError(createDOMCompilerError(55 /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */, dir.loc));
                            break;
                        default:
                            // text type
                            ( true) && checkDuplicatedValue();
                            break;
                    }
                }
            }
            else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind)(node)) {
                // element has bindings with dynamic keys, which can possibly contain
                // "type".
                directiveToUse = V_MODEL_DYNAMIC;
            }
            else {
                // text type
                ( true) && checkDuplicatedValue();
            }
        }
        else if (tag === 'select') {
            directiveToUse = V_MODEL_SELECT;
        }
        else {
            // textarea
            ( true) && checkDuplicatedValue();
        }
        // inject runtime directive
        // by returning the helper symbol via needRuntime
        // the import will replaced a resolveDirective call.
        if (!isInvalidType) {
            baseResult.needRuntime = context.helper(directiveToUse);
        }
    }
    else {
        context.onError(createDOMCompilerError(53 /* X_V_MODEL_ON_INVALID_ELEMENT */, dir.loc));
    }
    // native vmodel doesn't need the `modelValue` props since they are also
    // passed to the runtime as `binding.value`. removing it reduces code size.
    baseResult.props = baseResult.props.filter(p => !(p.key.type === 4 /* SIMPLE_EXPRESSION */ &&
        p.key.content === 'modelValue'));
    return baseResult;
};

const isEventOptionModifier = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(`passive,once,capture`);
const isNonKeyModifier = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
// event propagation management
`stop,prevent,self,` +
    // system modifiers + exact
    `ctrl,shift,alt,meta,exact,` +
    // mouse
    `middle`);
// left & right could be mouse or key modifiers based on event type
const maybeKeyModifier = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('left,right');
const isKeyboardEvent = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(`onkeyup,onkeydown,onkeypress`, true);
const resolveModifiers = (key, modifiers) => {
    const keyModifiers = [];
    const nonKeyModifiers = [];
    const eventOptionModifiers = [];
    for (let i = 0; i < modifiers.length; i++) {
        const modifier = modifiers[i];
        if (isEventOptionModifier(modifier)) {
            // eventOptionModifiers: modifiers for addEventListener() options,
            // e.g. .passive & .capture
            eventOptionModifiers.push(modifier);
        }
        else {
            // runtimeModifiers: modifiers that needs runtime guards
            if (maybeKeyModifier(modifier)) {
                if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)) {
                    if (isKeyboardEvent(key.content)) {
                        keyModifiers.push(modifier);
                    }
                    else {
                        nonKeyModifiers.push(modifier);
                    }
                }
                else {
                    keyModifiers.push(modifier);
                    nonKeyModifiers.push(modifier);
                }
            }
            else {
                if (isNonKeyModifier(modifier)) {
                    nonKeyModifiers.push(modifier);
                }
                else {
                    keyModifiers.push(modifier);
                }
            }
        }
    }
    return {
        keyModifiers,
        nonKeyModifiers,
        eventOptionModifiers
    };
};
const transformClick = (key, event) => {
    const isStaticClick = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) && key.content.toLowerCase() === 'onclick';
    return isStaticClick
        ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(event, true)
        : key.type !== 4 /* SIMPLE_EXPRESSION */
            ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)([
                `(`,
                key,
                `) === "onClick" ? "${event}" : (`,
                key,
                `)`
            ])
            : key;
};
const transformOn = (dir, node, context) => {
    return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn)(dir, node, context, baseResult => {
        const { modifiers } = dir;
        if (!modifiers.length)
            return baseResult;
        let { key, value: handlerExp } = baseResult.props[0];
        const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers);
        // normalize click.right and click.middle since they don't actually fire
        if (nonKeyModifiers.includes('right')) {
            key = transformClick(key, `onContextmenu`);
        }
        if (nonKeyModifiers.includes('middle')) {
            key = transformClick(key, `onMouseup`);
        }
        if (nonKeyModifiers.length) {
            handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_MODIFIERS), [
                handlerExp,
                JSON.stringify(nonKeyModifiers)
            ]);
        }
        if (keyModifiers.length &&
            // if event name is dynamic, always wrap with keys guard
            (!(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) || isKeyboardEvent(key.content))) {
            handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_KEYS), [
                handlerExp,
                JSON.stringify(keyModifiers)
            ]);
        }
        if (eventOptionModifiers.length) {
            const modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join('');
            key = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)
                ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(`${key.content}${modifierPostfix}`, true)
                : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)([`(`, key, `) + "${modifierPostfix}"`]);
        }
        return {
            props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(key, handlerExp)]
        };
    });
};

const transformShow = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
        context.onError(createDOMCompilerError(57 /* X_V_SHOW_NO_EXPRESSION */, loc));
    }
    return {
        props: [],
        needRuntime: context.helper(V_SHOW)
    };
};

const warnTransitionChildren = (node, context) => {
    if (node.type === 1 /* ELEMENT */ &&
        node.tagType === 1 /* COMPONENT */) {
        const component = context.isBuiltInComponent(node.tag);
        if (component === TRANSITION) {
            return () => {
                if (node.children.length && hasMultipleChildren(node)) {
                    context.onError(createDOMCompilerError(58 /* X_TRANSITION_INVALID_CHILDREN */, {
                        start: node.children[0].loc.start,
                        end: node.children[node.children.length - 1].loc.end,
                        source: ''
                    }));
                }
            };
        }
    }
};
function hasMultipleChildren(node) {
    // #1352 filter out potential comment nodes.
    const children = (node.children = node.children.filter(c => c.type !== 3 /* COMMENT */));
    const child = children[0];
    return (children.length !== 1 ||
        child.type === 11 /* FOR */ ||
        (child.type === 9 /* IF */ && child.branches.some(hasMultipleChildren)));
}

const ignoreSideEffectTags = (node, context) => {
    if (node.type === 1 /* ELEMENT */ &&
        node.tagType === 0 /* ELEMENT */ &&
        (node.tag === 'script' || node.tag === 'style')) {
        context.onError(createDOMCompilerError(59 /* X_IGNORED_SIDE_EFFECT_TAG */, node.loc));
        context.removeNode();
    }
};

const DOMNodeTransforms = [
    transformStyle,
    ...(( true) ? [warnTransitionChildren] : 0)
];
const DOMDirectiveTransforms = {
    cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
    html: transformVHtml,
    text: transformVText,
    model: transformModel,
    on: transformOn,
    show: transformShow
};
function compile(template, options = {}) {
    return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options, {
        nodeTransforms: [
            // ignore <script> and <tag>
            // this is not put inside DOMNodeTransforms because that list is used
            // by compiler-ssr to generate vnode fallback branches
            ignoreSideEffectTags,
            ...DOMNodeTransforms,
            ...(options.nodeTransforms || [])
        ],
        directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
        transformHoist:  null 
    }));
}
function parse(template, options = {}) {
    return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options));
}




/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATE_KEY": () => /* binding */ ITERATE_KEY,
/* harmony export */   "computed": () => /* binding */ computed,
/* harmony export */   "customRef": () => /* binding */ customRef,
/* harmony export */   "effect": () => /* binding */ effect,
/* harmony export */   "enableTracking": () => /* binding */ enableTracking,
/* harmony export */   "isProxy": () => /* binding */ isProxy,
/* harmony export */   "isReactive": () => /* binding */ isReactive,
/* harmony export */   "isReadonly": () => /* binding */ isReadonly,
/* harmony export */   "isRef": () => /* binding */ isRef,
/* harmony export */   "markRaw": () => /* binding */ markRaw,
/* harmony export */   "pauseTracking": () => /* binding */ pauseTracking,
/* harmony export */   "proxyRefs": () => /* binding */ proxyRefs,
/* harmony export */   "reactive": () => /* binding */ reactive,
/* harmony export */   "readonly": () => /* binding */ readonly,
/* harmony export */   "ref": () => /* binding */ ref,
/* harmony export */   "resetTracking": () => /* binding */ resetTracking,
/* harmony export */   "shallowReactive": () => /* binding */ shallowReactive,
/* harmony export */   "shallowReadonly": () => /* binding */ shallowReadonly,
/* harmony export */   "shallowRef": () => /* binding */ shallowRef,
/* harmony export */   "stop": () => /* binding */ stop,
/* harmony export */   "toRaw": () => /* binding */ toRaw,
/* harmony export */   "toRef": () => /* binding */ toRef,
/* harmony export */   "toRefs": () => /* binding */ toRefs,
/* harmony export */   "track": () => /* binding */ track,
/* harmony export */   "trigger": () => /* binding */ trigger,
/* harmony export */   "triggerRef": () => /* binding */ triggerRef,
/* harmony export */   "unref": () => /* binding */ unref
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");


const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol(( true) ? 'iterate' : 0);
const MAP_KEY_ITERATE_KEY = Symbol(( true) ? 'Map key iterate' : 0);
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect(fn, options = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
function stop(effect) {
    if (effect.active) {
        cleanup(effect);
        if (effect.options.onStop) {
            effect.options.onStop();
        }
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effect.active) {
            return options.scheduler ? undefined : fn();
        }
        if (!effectStack.includes(effect)) {
            cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn();
            }
            finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (( true) && activeEffect.options.onTrack) {
            activeEffect.options.onTrack({
                effect: activeEffect,
                target,
                type,
                key
            });
        }
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || effect.allowRecurse) {
                    effects.add(effect);
                }
            });
        }
    };
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        depsMap.forEach(add);
    }
    else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                add(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            add(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
                    // new index added to array -> length changes
                    add(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const run = (effect) => {
        if (( true) && effect.options.onTrigger) {
            effect.options.onTrigger({
                effect,
                target,
                key,
                type,
                newValue,
                oldValue,
                oldTarget
            });
        }
        if (effect.options.scheduler) {
            effect.options.scheduler(effect);
        }
        else {
            effect();
        }
    };
    effects.forEach(run);
}

const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get" /* GET */, i + '');
        }
        // we run the method using the original args first (which may be reactive)
        const res = method.apply(arr, args);
        if (res === -1 || res === false) {
            // if that didn't work, run it again using raw values.
            return method.apply(arr, args.map(toRaw));
        }
        else {
            return res;
        }
    };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
        if (!isReadonly && targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key)
            ? builtInSymbols.has(key)
            : key === `__proto__` || key === `__v_isRef`) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
            return shouldUnwrap ? res.value : res;
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        const oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)
            ? Number(key) < target.length
            : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((true)) {
            console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    },
    deleteProperty(target, key) {
        if ((true)) {
            console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    }
};
const shallowReactiveHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "get" /* GET */, key);
    }
    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "has" /* HAS */, key);
    }
    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    target.add(value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((true)) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((true)) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( true)
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)
            ? new Map(target)
            : new Set(target)
        : 0;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((true)) {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */ ? false : this;
    };
}
const mutableInstrumentations = {
    get(key) {
        return get$1(this, key);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
};
const shallowInstrumentations = {
    get(key) {
        return get$1(this, key, false, true);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
};
const readonlyInstrumentations = {
    get(key) {
        return get$1(this, key, true);
    },
    get size() {
        return size(this, true);
    },
    has(key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add" /* ADD */),
    set: createReadonlyMethod("set" /* SET */),
    delete: createReadonlyMethod("delete" /* DELETE */),
    clear: createReadonlyMethod("clear" /* CLEAR */),
    forEach: createForEach(true, false)
};
const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
        if ((true)) {
            console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const proxyMap = isReadonly ? readonlyMap : reactiveMap;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
}
function markRaw(value) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip" /* SKIP */, true);
    return value;
}

const convert = (val) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(val) ? reactive(val) : val;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
class RefImpl {
    constructor(_rawValue, _shallow = false) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newVal) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(toRaw(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw(this), "set" /* SET */, 'value', newVal);
        }
    }
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
function triggerRef(ref) {
    trigger(toRaw(ref), "set" /* SET */, 'value', ( true) ? ref.value : 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.__v_isRef = true;
        const { get, set } = factory(() => track(this, "get" /* GET */, 'value'), () => trigger(this, "set" /* SET */, 'value'));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (( true) && !isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    return isRef(object[key])
        ? object[key]
        : new ObjectRefImpl(object, key);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect(getter, {
            lazy: true,
            scheduler: () => {
                if (!this._dirty) {
                    this._dirty = true;
                    trigger(toRaw(this), "set" /* SET */, 'value');
                }
            }
        });
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        if (this._dirty) {
            this._value = this.effect();
            this._dirty = false;
        }
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions) {
    let getter;
    let setter;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions)) {
        getter = getterOrOptions;
        setter = ( true)
            ? () => {
                console.warn('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions) || !getterOrOptions.set);
}




/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef,
/* harmony export */   "isProxy": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy,
/* harmony export */   "isReactive": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive,
/* harmony export */   "isReadonly": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly,
/* harmony export */   "isRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef,
/* harmony export */   "markRaw": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw,
/* harmony export */   "proxyRefs": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs,
/* harmony export */   "reactive": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive,
/* harmony export */   "readonly": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly,
/* harmony export */   "ref": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref,
/* harmony export */   "shallowReactive": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive,
/* harmony export */   "shallowReadonly": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly,
/* harmony export */   "shallowRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
/* harmony export */   "toRaw": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw,
/* harmony export */   "toRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef,
/* harmony export */   "toRefs": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs,
/* harmony export */   "triggerRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef,
/* harmony export */   "unref": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref,
/* harmony export */   "camelize": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize,
/* harmony export */   "capitalize": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize,
/* harmony export */   "toDisplayString": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString,
/* harmony export */   "toHandlerKey": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey,
/* harmony export */   "BaseTransition": () => /* binding */ BaseTransition,
/* harmony export */   "Comment": () => /* binding */ Comment,
/* harmony export */   "Fragment": () => /* binding */ Fragment,
/* harmony export */   "KeepAlive": () => /* binding */ KeepAlive,
/* harmony export */   "Static": () => /* binding */ Static,
/* harmony export */   "Suspense": () => /* binding */ Suspense,
/* harmony export */   "Teleport": () => /* binding */ Teleport,
/* harmony export */   "Text": () => /* binding */ Text,
/* harmony export */   "callWithAsyncErrorHandling": () => /* binding */ callWithAsyncErrorHandling,
/* harmony export */   "callWithErrorHandling": () => /* binding */ callWithErrorHandling,
/* harmony export */   "cloneVNode": () => /* binding */ cloneVNode,
/* harmony export */   "computed": () => /* binding */ computed,
/* harmony export */   "createBlock": () => /* binding */ createBlock,
/* harmony export */   "createCommentVNode": () => /* binding */ createCommentVNode,
/* harmony export */   "createHydrationRenderer": () => /* binding */ createHydrationRenderer,
/* harmony export */   "createRenderer": () => /* binding */ createRenderer,
/* harmony export */   "createSlots": () => /* binding */ createSlots,
/* harmony export */   "createStaticVNode": () => /* binding */ createStaticVNode,
/* harmony export */   "createTextVNode": () => /* binding */ createTextVNode,
/* harmony export */   "createVNode": () => /* binding */ createVNode,
/* harmony export */   "defineAsyncComponent": () => /* binding */ defineAsyncComponent,
/* harmony export */   "defineComponent": () => /* binding */ defineComponent,
/* harmony export */   "defineEmit": () => /* binding */ defineEmit,
/* harmony export */   "defineProps": () => /* binding */ defineProps,
/* harmony export */   "devtools": () => /* binding */ devtools,
/* harmony export */   "getCurrentInstance": () => /* binding */ getCurrentInstance,
/* harmony export */   "getTransitionRawChildren": () => /* binding */ getTransitionRawChildren,
/* harmony export */   "h": () => /* binding */ h,
/* harmony export */   "handleError": () => /* binding */ handleError,
/* harmony export */   "initCustomFormatter": () => /* binding */ initCustomFormatter,
/* harmony export */   "inject": () => /* binding */ inject,
/* harmony export */   "isVNode": () => /* binding */ isVNode,
/* harmony export */   "mergeProps": () => /* binding */ mergeProps,
/* harmony export */   "nextTick": () => /* binding */ nextTick,
/* harmony export */   "onActivated": () => /* binding */ onActivated,
/* harmony export */   "onBeforeMount": () => /* binding */ onBeforeMount,
/* harmony export */   "onBeforeUnmount": () => /* binding */ onBeforeUnmount,
/* harmony export */   "onBeforeUpdate": () => /* binding */ onBeforeUpdate,
/* harmony export */   "onDeactivated": () => /* binding */ onDeactivated,
/* harmony export */   "onErrorCaptured": () => /* binding */ onErrorCaptured,
/* harmony export */   "onMounted": () => /* binding */ onMounted,
/* harmony export */   "onRenderTracked": () => /* binding */ onRenderTracked,
/* harmony export */   "onRenderTriggered": () => /* binding */ onRenderTriggered,
/* harmony export */   "onUnmounted": () => /* binding */ onUnmounted,
/* harmony export */   "onUpdated": () => /* binding */ onUpdated,
/* harmony export */   "openBlock": () => /* binding */ openBlock,
/* harmony export */   "popScopeId": () => /* binding */ popScopeId,
/* harmony export */   "provide": () => /* binding */ provide,
/* harmony export */   "pushScopeId": () => /* binding */ pushScopeId,
/* harmony export */   "queuePostFlushCb": () => /* binding */ queuePostFlushCb,
/* harmony export */   "registerRuntimeCompiler": () => /* binding */ registerRuntimeCompiler,
/* harmony export */   "renderList": () => /* binding */ renderList,
/* harmony export */   "renderSlot": () => /* binding */ renderSlot,
/* harmony export */   "resolveComponent": () => /* binding */ resolveComponent,
/* harmony export */   "resolveDirective": () => /* binding */ resolveDirective,
/* harmony export */   "resolveDynamicComponent": () => /* binding */ resolveDynamicComponent,
/* harmony export */   "resolveTransitionHooks": () => /* binding */ resolveTransitionHooks,
/* harmony export */   "setBlockTracking": () => /* binding */ setBlockTracking,
/* harmony export */   "setDevtoolsHook": () => /* binding */ setDevtoolsHook,
/* harmony export */   "setTransitionHooks": () => /* binding */ setTransitionHooks,
/* harmony export */   "ssrContextKey": () => /* binding */ ssrContextKey,
/* harmony export */   "ssrUtils": () => /* binding */ ssrUtils,
/* harmony export */   "toHandlers": () => /* binding */ toHandlers,
/* harmony export */   "transformVNodeArgs": () => /* binding */ transformVNodeArgs,
/* harmony export */   "useContext": () => /* binding */ useContext,
/* harmony export */   "useSSRContext": () => /* binding */ useSSRContext,
/* harmony export */   "useTransitionState": () => /* binding */ useTransitionState,
/* harmony export */   "version": () => /* binding */ version,
/* harmony export */   "warn": () => /* binding */ warn,
/* harmony export */   "watch": () => /* binding */ watch,
/* harmony export */   "watchEffect": () => /* binding */ watchEffect,
/* harmony export */   "withCtx": () => /* binding */ withCtx,
/* harmony export */   "withDirectives": () => /* binding */ withDirectives,
/* harmony export */   "withScopeId": () => /* binding */ withScopeId
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");





const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
        value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( true) ? ErrorTypeStrings[type] : 0;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((true)) {
        const info = ErrorTypeStrings[type];
        if (contextVNode) {
            pushWarningContext(contextVNode);
        }
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) {
            popWarningContext();
        }
        // crash in dev by default so it's more noticeable
        if (throwInDev) {
            throw err;
        }
        else {
            console.error(err);
        }
    }
    else {}
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        queue.push(job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > -1) {
        queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((true)) {
            seen = seen || new Map();
        }
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if ((true)) {
                checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex]);
            }
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((true)) {
            seen = seen || new Map();
        }
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if ((true)) {
                checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex]);
            }
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((true)) {
        seen = seen || new Map();
    }
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b) => getId(a) - getId(b));
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job) {
                if ((true)) {
                    checkRecursiveUpdates(seen, job);
                }
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            throw new Error(`Maximum recursive updates exceeded. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((true)) {
    const globalObject = typeof __webpack_require__.g !== 'undefined'
        ? __webpack_require__.g
        : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
                ? window
                : {};
    globalObject.__VUE_HMR_RUNTIME__ = {
        createRecord: tryWrap(createRecord),
        rerender: tryWrap(rerender),
        reload: tryWrap(reload)
    };
}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, component) {
    if (!component) {
        warn(`HMR API usage is out of date.\n` +
            `Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant ` +
            `depdendency that handles Vue SFC compilation.`);
        component = {};
    }
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        component: isClassComponent(component) ? component.__vccOpts : component,
        instances: new Set()
    });
    return true;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record)
        return;
    if (newRender)
        record.component.render = newRender;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    Array.from(record.instances).forEach(instance => {
        if (newRender) {
            instance.render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    const { component, instances } = record;
    if (!hmrDirtyComponents.has(component)) {
        // 1. Update existing comp definition to match new one
        newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(component, newComp);
        for (const key in component) {
            if (!(key in newComp)) {
                delete component[key];
            }
        }
        // 2. Mark component dirty. This forces the renderer to replace the component
        // on patch.
        hmrDirtyComponents.add(component);
        // 3. Make sure to unmark the component after the reload.
        queuePostFlushCb(() => {
            hmrDirtyComponents.delete(component);
        });
    }
    Array.from(instances).forEach(instance => {
        if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    });
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
function setDevtoolsHook(hook) {
    devtools = hook;
}
function devtoolsInitApp(app, version) {
    // TODO queue if devtools is undefined
    if (!devtools)
        return;
    devtools.emit("app:init" /* APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    if (!devtools)
        return;
    devtools.emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
function createDevtoolsComponentHook(hook) {
    return (component) => {
        if (!devtools)
            return;
        devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined);
    };
}
function devtoolsComponentEmit(component, event, params) {
    if (!devtools)
        return;
    devtools.emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if ((true)) {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions)) {
                if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
                    warn(`Component emitted event "${event}" but it is neither declared in ` +
                        `the emits option nor as an "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)}" prop.`);
                }
            }
            else {
                const validator = emitsOptions[event];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) {
                        warn(`Invalid event arguments: event validation failed for event "${event}".`);
                    }
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        else if (number) {
            args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber);
        }
    }
    if (true) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((true)) {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
            warn(`Event "${lowerCaseEvent}" is emitted in component ` +
                `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` +
                `Note that HTML attributes are case-insensitive and you cannot use ` +
                `v-on to listen to camelCase events when using in-DOM templates. ` +
                `You should probably use "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event)}" instead of "${event}".`);
        }
    }
    // convert handler name to camelCase. See issue #2249
    let handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event));
    let handler = props[handlerName];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event));
        handler = props[handlerName];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            (instance.emitted = {})[handlerName] = true;
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__emits !== undefined) {
        return comp.__emits;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        const extendEmits = (raw) => {
            hasExtends = true;
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizeEmitsOptions(raw, appContext, true));
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__emits = null);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
    }
    return (comp.__emits = normalized);
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) ||
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) ||
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
    currentRenderingInstance = instance;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx } = instance;
    let result;
    currentRenderingInstance = instance;
    if ((true)) {
        accessedAttrs = false;
    }
    try {
        let fallthroughAttrs;
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (( true) && attrs === props) {
                markAttrsAccessed();
            }
            result = normalizeVNode(render.length > 1
                ? render(props, ( true)
                    ? {
                        get attrs() {
                            markAttrsAccessed();
                            return attrs;
                        },
                        slots,
                        emit
                    }
                    : 0)
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
        // attr merging
        // in dev mode, comments are preserved, and it's possible for a template
        // to have comments along side the root element which makes it a fragment
        let root = result;
        let setRoot = undefined;
        if (( true) && result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */) {
            ;
            [root, setRoot] = getChildRoot(result);
        }
        if (Component.inheritAttrs !== false && fallthroughAttrs) {
            const keys = Object.keys(fallthroughAttrs);
            const { shapeFlag } = root;
            if (keys.length) {
                if (shapeFlag & 1 /* ELEMENT */ ||
                    shapeFlag & 6 /* COMPONENT */) {
                    if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
                        // If a v-model listener (onUpdate:xxx) has a corresponding declared
                        // prop, it indicates this component expects to handle v-model and
                        // it should not fallthrough.
                        // related: #1543, #1643, #1989
                        fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                    }
                    root = cloneVNode(root, fallthroughAttrs);
                }
                else if (( true) && !accessedAttrs && root.type !== Comment) {
                    const allAttrs = Object.keys(attrs);
                    const eventAttrs = [];
                    const extraAttrs = [];
                    for (let i = 0, l = allAttrs.length; i < l; i++) {
                        const key = allAttrs[i];
                        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                            // ignore v-model handlers when they fail to fallthrough
                            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                                // remove `on`, lowercase first letter to reflect event casing
                                // accurately
                                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                            }
                        }
                        else {
                            extraAttrs.push(key);
                        }
                    }
                    if (extraAttrs.length) {
                        warn(`Extraneous non-props attributes (` +
                            `${extraAttrs.join(', ')}) ` +
                            `were passed to component but could not be automatically inherited ` +
                            `because component renders fragment or text root nodes.`);
                    }
                    if (eventAttrs.length) {
                        warn(`Extraneous non-emits event listeners (` +
                            `${eventAttrs.join(', ')}) ` +
                            `were passed to component but could not be automatically inherited ` +
                            `because component renders fragment or text root nodes. ` +
                            `If the listener is intended to be a component custom event listener only, ` +
                            `declare it using the "emits" option.`);
                    }
                }
            }
        }
        // inherit directives
        if (vnode.dirs) {
            if (( true) && !isElementRoot(root)) {
                warn(`Runtime directive used on component with non-element root node. ` +
                    `The directives will not function as intended.`);
            }
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        // inherit transition data
        if (vnode.transition) {
            if (( true) && !isElementRoot(root)) {
                warn(`Component inside <Transition> renders non-element root node ` +
                    `that cannot be animated.`);
            }
            root.transition = vnode.transition;
        }
        if (( true) && setRoot) {
            setRoot(root);
        }
        else {
            result = root;
        }
    }
    catch (err) {
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    currentRenderingInstance = null;
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & 6 /* COMPONENT */ ||
        vnode.shapeFlag & 1 /* ELEMENT */ ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (( true) && (prevChildren || nextChildren) && isHmrUpdating) {
        return true;
    }
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary
};
// Force-casted public typing for h and TSX props inference
const Suspense = ( SuspenseImpl
    );
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            const onPending = n2.props && n2.props.onPending;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onPending)) {
                onPending();
            }
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if ( true && !hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((true)) {
                if (!resume && !suspense.pendingBranch) {
                    throw new Error(`suspense.resolve() is called without a pending branch.`);
                }
                if (suspense.isUnmounted) {
                    throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
                }
            }
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            const onResolve = vnode.props && vnode.props.onResolve;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onResolve)) {
                onResolve();
            }
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            const onFallback = vnode.props && vnode.props.onFallback;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onFallback)) {
                onFallback();
            }
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            suspense.isInFallback = true;
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((true)) {
                    pushWarningContext(vnode);
                }
                handleSetupResult(instance, asyncSetupResult);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((true)) {
                    popWarningContext();
                }
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    let content;
    let fallback;
    if (shapeFlag & 32 /* SLOTS_CHILDREN */) {
        content = normalizeSuspenseSlot(children.default);
        fallback = normalizeSuspenseSlot(children.fallback);
    }
    else {
        content = normalizeSuspenseSlot(children);
        fallback = normalizeVNode(null);
    }
    return {
        content,
        fallback
    };
}
function normalizeSuspenseSlot(s) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
        s = s();
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (( true) && !singleChild) {
            warn(`<Suspense> slots expect a single root node.`);
        }
        s = singleChild;
    }
    return normalizeVNode(s);
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

let isRenderingCompiledSlot = 0;
const setCompiledSlotRendering = (n) => (isRenderingCompiledSlot += n);
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback) {
    let slot = slots[name];
    if (( true) && slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` +
            `function. You need to mark this component with $dynamic-slots in the ` +
            `parent template.`);
        slot = () => [];
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    isRenderingCompiledSlot++;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
        ? 64 /* STABLE_FRAGMENT */
        : -2 /* BAIL */);
    isRenderingCompiledSlot--;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === Comment)
            return false;
        if (child.type === Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */
function withCtx(fn, ctx = currentRenderingInstance) {
    if (!ctx)
        return fn;
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we need to push a null block to
        // avoid that. This isn't necessary if rendering a compiled `<slot>`.
        if (!isRenderingCompiledSlot) {
            openBlock(true /* null block that disables tracking */);
        }
        const owner = currentRenderingInstance;
        setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(owner);
        if (!isRenderingCompiledSlot) {
            closeBlock();
        }
        return res;
    };
    renderFnWithContext._c = true;
    return renderFnWithContext;
}

// SFC scoped style ID management.
let currentScopeId = null;
const scopeIdStack = [];
/**
 * @private
 */
function pushScopeId(id) {
    scopeIdStack.push((currentScopeId = id));
}
/**
 * @private
 */
function popScopeId() {
    scopeIdStack.pop();
    currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */
function withScopeId(id) {
    return ((fn) => withCtx(function () {
        pushScopeId(id);
        const res = fn.apply(this, arguments);
        popScopeId();
        return res;
    }));
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
    setFullProps(instance, rawProps, props, attrs);
    // validation
    if ((true)) {
        validateProps(props, instance);
    }
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const [options] = instance.propsOptions;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(( true) &&
        (instance.type.__hmrId ||
            (instance.parent && instance.parent.type.__hmrId))) &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
                        attrs[key] = value;
                    }
                    else {
                        const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
                    }
                }
                else {
                    attrs[key] = value;
                }
            }
        }
    }
    else {
        // full props update.
        setFullProps(instance, rawProps, props, attrs);
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawProps || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ, key, undefined, instance);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key)) {
                    delete attrs[key];
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set" /* SET */, '$attrs');
    if (( true) && rawProps) {
        validateProps(props, instance);
    }
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    if (rawProps) {
        for (const key in rawProps) {
            const value = rawProps[key];
            // key, ref are reserved and never passed down
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                continue;
            }
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)))) {
                props[camelKey] = value;
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                // Any non-declared (either as a prop or an emitted event) props are put
                // into a separate `attrs` object for spreading. Make sure to preserve
                // original key casing
                attrs[key] = value;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
        }
    }
}
function resolvePropValue(options, props, key, value, instance) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
                setCurrentInstance(instance);
                value = defaultValue(props);
                setCurrentInstance(null);
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(props, key) && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__props) {
        return comp.__props;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__props = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
                warn(`props must be strings when using array syntax.`, raw[i]);
            }
            const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
            warn(`invalid props options`, raw);
        }
        for (const key in raw) {
            const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    return (comp.__props = [normalized, needCastKeys]);
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((true)) {
        warn(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
        for (let i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
                return i;
            }
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(props, instance) {
    const rawValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, rawValues[key], opt, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawValues, key));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('String,Number,Boolean,Function,Symbol');
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
    }
    else if (expectedType === 'Array') {
        valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(', ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                setCurrentInstance(null);
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((true)) {
        const apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ''));
        warn(`${apiName} is called when there is no active component instance to be ` +
            `associated with. ` +
            `Lifecycle injection APIs can only be used during execution of setup().` +
            ( ` If you are using async setup(), make sure to register lifecycle ` +
                    `hooks before the first await statement.`
                ));
    }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR
!isInSSRComponentSetup && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
const onErrorCaptured = (hook, target = currentInstance) => {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
};

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
        warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` +
            `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
            `supports \`watch(source, cb, options?) signature.`);
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ, instance = currentInstance) {
    if (( true) && !cb) {
        if (immediate !== undefined) {
            warn(`watch() "immediate" option is only respected when using the ` +
                `watch(source, callback, options?) signature.`);
        }
        if (deep !== undefined) {
            warn(`watch() "deep" option is only respected when using the ` +
                `watch(source, callback, options?) signature.`);
        }
    }
    const warnInvalidSource = (s) => {
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    let getter;
    let forceTrigger = false;
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
        getter = () => source.value;
        forceTrigger = !!source._shallow;
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
        getter = () => source;
        deep = true;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
        getter = () => source.map(s => {
            if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
                return s.value;
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
                return traverse(s);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
            else {
                ( true) && warnInvalidSource(s);
            }
        });
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
            };
        }
    }
    else {
        getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
        ( true) && warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    const onInvalidate = (fn) => {
        cleanup = runner.options.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    let oldValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!runner.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = runner();
            if (deep || forceTrigger || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onInvalidate
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            runner();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job;
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => {
            if (!instance || instance.isMounted) {
                queuePreFlushCb(job);
            }
            else {
                // with 'pre' option, the first call must happen before
                // the component is mounted so it is called synchronously.
                job();
            }
        };
    }
    const runner = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(getter, {
        lazy: true,
        onTrack,
        onTrigger,
        scheduler
    });
    recordInstanceBoundEffect(runner, instance);
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = runner();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(runner, instance && instance.suspense);
    }
    else {
        runner();
    }
    return () => {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(runner);
        if (instance) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.effects, runner);
        }
    };
}
// this.$watch
function instanceWatch(source, cb, options) {
    const publicThis = this.proxy;
    const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)
        ? () => publicThis[source]
        : source.bind(publicThis);
    return doWatch(getter, cb.bind(publicThis), options, this);
}
function traverse(value, seen = new Set()) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
        traverse(value.value, seen);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            // warn multiple elements
            if (( true) && children.length > 1) {
                warn('<transition> can only be used on a single element or component. Use ' +
                    '<transition-group> for lists.');
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
            const { mode } = rawProps;
            // check mode
            if (( true) && mode && !['in-out', 'out-in', 'default'].includes(mode)) {
                warn(`invalid <transition> mode: ${mode}`);
            }
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out') {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    inheritRef: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const cache = new Map();
        const keys = new Set();
        let current = null;
        const instance = getCurrentInstance();
        const parentSuspense = instance.suspense;
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((true)) {
                    warn(`KeepAlive should contain exactly one component child.`);
                }
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getName(comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function getName(comp) {
    return comp.displayName || comp.name;
}
function matches(pattern, name) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => withCtx((props) => {
    if (( true) && currentInstance) {
        warn(`Slot "${key}" invoked outside of the render function: ` +
            `this will not track dependencies used in the slot. ` +
            `Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(props));
}, ctx);
const normalizeObjectSlots = (rawSlots, slots) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if ((true)) {
                warn(`Non-function value encountered for slot "${key}". ` +
                    `Prefer function slots for better performance.`);
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (( true) && !isKeepAlive(instance.vnode)) {
        warn(`Non-function value encountered for default slot. ` +
            `Prefer function slots for better performance.`);
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            instance.slots = children;
            // make compiler marker non-enumerable
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (( true) && isHmrUpdating) {
                // Parent was HMR updated so slot content may have changed.
                // force update slots and mark instance for hmr as well
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
            }
            else if (type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
const isBuiltInDirective = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( true) && warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ] = directives[i];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        const hook = binding.dir[name];
        if (hook) {
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
        }
    }
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
            errorHandler: undefined,
            warnHandler: undefined
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null)
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
            ( true) && warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((true)) {
                    warn(`app.config cannot be replaced. Modify individual options instead.`);
                }
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( true) && warn(`Plugin has already been applied to target app.`);
                }
                else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((true)) {
                    warn(`A plugin must either be a function or an object with an "install" ` +
                        `function.`);
                }
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                        // global mixin with props/emits de-optimizes props/emits
                        // normalization caching.
                        if (mixin.props || mixin.emits) {
                            context.deopt = true;
                        }
                    }
                    else if ((true)) {
                        warn('Mixin has already been applied to target app' +
                            (mixin.name ? `: ${mixin.name}` : ''));
                    }
                }
                else if ((true)) {
                    warn('Mixins are only available in builds supporting Options API');
                }
                return app;
            },
            component(name, component) {
                if ((true)) {
                    validateComponentName(name, context.config);
                }
                if (!component) {
                    return context.components[name];
                }
                if (( true) && context.components[name]) {
                    warn(`Component "${name}" has already been registered in target app.`);
                }
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((true)) {
                    validateDirectiveName(name);
                }
                if (!directive) {
                    return context.directives[name];
                }
                if (( true) && context.directives[name]) {
                    warn(`Directive "${name}" has already been registered in target app.`);
                }
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((true)) {
                        context.reload = () => {
                            render(cloneVNode(vnode), rootContainer);
                        };
                    }
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (true) {
                        devtoolsInitApp(app, version);
                    }
                    return vnode.component.proxy;
                }
                else if ((true)) {
                    warn(`App has already been mounted.\n` +
                        `If you want to remount the same app, move your app creation logic ` +
                        `into a factory function and create fresh app instances for each ` +
                        `mount - e.g. \`const createMyApp = () => createApp(App)\``);
                }
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (true) {
                        devtoolsUnmountApp(app);
                    }
                }
                else if ((true)) {
                    warn(`Cannot unmount an app that is not mounted.`);
                }
            },
            provide(key, value) {
                if (( true) && key in context.provides) {
                    warn(`App already provides property with key "${String(key)}". ` +
                        `It will be overwritten with the new value.`);
                }
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (( true) && !container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` +
                `Performing full mount instead.`);
            patch(null, vnode, container);
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null);
        flushPostFlushCbs();
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, isFragmentStart);
        const { type, ref, shapeFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( true) &&
                            warn(`Hydration text mismatch:` +
                                `\n- Client: ${JSON.stringify(node.data)}` +
                                `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type !== node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    const container = parentNode(node);
                    const hydrateComponent = () => {
                        mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    };
                    // async component
                    const loadAsync = vnode.type.__asyncLoader;
                    if (loadAsync) {
                        loadAsync().then(hydrateComponent);
                    }
                    else {
                        hydrateComponent();
                    }
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), optimized, rendererInternals, hydrateNode);
                }
                else if ((true)) {
                    warn('Invalid HostVNode type:', type, `(${typeof type})`);
                }
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { props, patchFlag, shapeFlag, dirs } = vnode;
        // skip props & children if this is hoisted static nodes
        if (patchFlag !== -1 /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (!optimized ||
                    (patchFlag & 16 /* FULL_PROPS */ ||
                        patchFlag & 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                            patchProp(el, key, null, props[key]);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (( true) && !hasWarned) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` +
                            `server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( true) &&
                        warn(`Hydration text content mismatch in <${vnode.type}>:\n` +
                            `- Client: ${el.textContent}\n` +
                            `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, optimized);
            }
            else {
                hasMismatch = true;
                if (( true) && !hasWarned) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` +
                        `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container));
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, optimized) => {
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, isFragment) => {
        hasMismatch = true;
        ( true) &&
            warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */
                ? `(text)`
                : isComment(node) && node.data === '['
                    ? `(start of fragment)`
                    : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container));
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    /* eslint-disable no-restricted-globals */
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    /* eslint-enable no-restricted-globals */
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    let needWarn = false;
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (( true) && needWarn) {
        console.warn(`You are running the esm-bundler build of Vue. It is recommended to ` +
            `configure your bundler to explicitly replace feature flag globals ` +
            `with boolean literals to get proper tree-shaking in the final bundle. ` +
            `See http://link.vuejs.org/feature-flags for more details.`);
    }
}

// implementation, close to no-op
function defineComponent(options) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent: loadingComponent, errorComponent: errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest = loader()
                .catch(err => {
                err = err instanceof Error ? err : new Error(String(err));
                if (userOnError) {
                    return new Promise((resolve, reject) => {
                        const userRetry = () => resolve(retry());
                        const userFail = () => reject(err);
                        userOnError(err, userRetry, userFail, retries + 1);
                    });
                }
                else {
                    throw err;
                }
            })
                .then((comp) => {
                if (thisRequest !== pendingRequest && pendingRequest) {
                    return pendingRequest;
                }
                if (( true) && !comp) {
                    warn(`Async component loader resolved to undefined. ` +
                        `If you are using retry(), make sure to return its return value.`);
                }
                // interop module default
                if (comp &&
                    (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                    comp = comp.default;
                }
                if (( true) && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
                    throw new Error(`Invalid async component load result: ${comp}`);
                }
                resolvedComp = comp;
                return comp;
            })));
    };
    return defineComponent({
        __asyncLoader: load,
        name: 'AsyncComponentWrapper',
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if (( suspensible && instance.suspense) ||
                (false )) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
            const error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
            const delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref, props, children } }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}

const prodEffectOptions = {
    scheduler: queueJob,
    // #1801, #2043 component render effects should allow recursive updates
    allowRecurse: true
};
function createDevEffectOptions(instance) {
    return {
        scheduler: queueJob,
        allowRecurse: true,
        onTrack: instance.rtc ? e => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e) : void 0,
        onTrigger: instance.rtg ? e => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e) : void 0
    };
}
const queuePostRenderEffect =  queueEffectWithSuspense
    ;
const setRef = (rawRef, oldRawRef, parentSuspense, vnode) => {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode));
        return;
    }
    let value;
    if (!vnode || isAsyncWrapper(vnode)) {
        value = null;
    }
    else {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            value = vnode.component.exposed || vnode.component.proxy;
        }
        else {
            value = vnode.el;
        }
    }
    const { i: owner, r: ref } = rawRef;
    if (( true) && !owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` +
            `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // unset old ref
    if (oldRef != null && oldRef !== ref) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
            oldRef.value = null;
        }
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref)) {
        const doSet = () => {
            refs[ref] = value;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                setupState[ref] = value;
            }
        };
        // #1789: for non-null values, set them after render
        // null values means this is unmount and it should not overwrite another
        // ref with the same key
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref)) {
        const doSet = () => {
            ref.value = value;
        };
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
        callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
    }
    else if ((true)) {
        warn('Invalid template ref type:', value, `(${typeof value})`);
    }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((true)) {
                    patchStaticNode(n1, n2, container, isSVG);
                }
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ((true)) {
                    warn('Invalid VNode type:', type, `(${typeof type})`);
                }
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, scopeId, patchFlag, dirs } = vnode;
        if (false /* HOISTED */) {}
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, scopeId, vnode, parentComponent);
        }
        if (true) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, scopeId, vnode, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (parentComponent) {
            const treeOwnerId = parentComponent.type.__scopeId;
            // vnode's own scopeId and the current patched component's scopeId is
            // different - this is a slot content node.
            if (treeOwnerId && treeOwnerId !== scopeId) {
                hostSetScopeId(el, treeOwnerId + '-s');
            }
            let subTree = parentComponent.subTree;
            if (( true) && subTree.type === Fragment) {
                subTree =
                    filterSingleRoot(subTree.children) || subTree;
            }
            if (vnode === subTree) {
                setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        let vnodeHook;
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        if (( true) && isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev ||
                            (hostForcePatchProp && hostForcePatchProp(el, key))) {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
            if (( true) && parentComponent && parentComponent.type.__hmrId) {
                traverseStaticChildren(n1, n2);
            }
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            oldVNode.type === Fragment ||
                // - In the case of different nodes, there is going to be a replacement
                // which also requires the correct parent container
                !isSameVNodeType(oldVNode, newVNode) ||
                // - In the case of a component, it could contain anything.
                oldVNode.shapeFlag & 6 /* COMPONENT */ ||
                oldVNode.shapeFlag & 64 /* TELEPORT */
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev ||
                    (hostForcePatchProp && hostForcePatchProp(el, key))) {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
                for (const key in oldProps) {
                    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren } = n2;
        if (patchFlag > 0) {
            optimized = true;
        }
        if (( true) && isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
                if (( true) && parentComponent && parentComponent.type.__hmrId) {
                    traverseStaticChildren(n1, n2);
                }
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (( true) && instance.type.__hmrId) {
            registerHMR(instance);
        }
        if ((true)) {
            pushWarningContext(initialVNode);
            startMeasure(instance, `mount`);
        }
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        if ((true)) {
            startMeasure(instance, `init`);
        }
        setupComponent(instance);
        if ((true)) {
            endMeasure(instance, `init`);
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if ( instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((true)) {
            popWarningContext();
            endMeasure(instance, `mount`);
        }
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (
                instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((true)) {
                    pushWarningContext(n2);
                }
                updateComponentPreRender(instance, n2, optimized);
                if ((true)) {
                    popWarningContext();
                }
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect runner.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        // create reactive effect for rendering
        instance.update = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(function componentEffect() {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                // beforeMount hook
                if (bm) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
                }
                // onVnodeBeforeMount
                if ((vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                // render
                if ((true)) {
                    startMeasure(instance, `render`);
                }
                const subTree = (instance.subTree = renderComponentRoot(instance));
                if ((true)) {
                    endMeasure(instance, `render`);
                }
                if (el && hydrateNode) {
                    if ((true)) {
                        startMeasure(instance, `hydrate`);
                    }
                    // vnode has adopted host node - perform hydration instead of mount.
                    hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
                    if ((true)) {
                        endMeasure(instance, `hydrate`);
                    }
                }
                else {
                    if ((true)) {
                        startMeasure(instance, `patch`);
                    }
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((true)) {
                        endMeasure(instance, `patch`);
                    }
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if ((vnodeHook = props && props.onVnodeMounted)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, initialVNode);
                    }, parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                const { a } = instance;
                if (a &&
                    initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                    queuePostRenderEffect(a, parentSuspense);
                }
                instance.isMounted = true;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((true)) {
                    pushWarningContext(next || instance.vnode);
                }
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                // render
                if ((true)) {
                    startMeasure(instance, `render`);
                }
                const nextTree = renderComponentRoot(instance);
                if ((true)) {
                    endMeasure(instance, `render`);
                }
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((true)) {
                    startMeasure(instance, `patch`);
                }
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((true)) {
                    endMeasure(instance, `patch`);
                }
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, next, vnode);
                    }, parentSuspense);
                }
                if (true) {
                    devtoolsComponentUpdated(instance);
                }
                if ((true)) {
                    popWarningContext();
                }
            }
        }, ( true) ? createDevEffectOptions(instance) : 0);
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children);
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
        c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (( true) && keyToNewIndexMap.has(nextChild.key)) {
                        warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    }
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if ( shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, null);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        let vnodeHook;
        if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if ( shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                (patchFlag & 128 /* KEYED_FRAGMENT */ ||
                    patchFlag & 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            // an unmounted teleport should always remove its children if not disabled
            if (shapeFlag & 64 /* TELEPORT */ &&
                (doRemove || !isTeleportDisabled(vnode.props))) {
                vnode.type.remove(vnode, internals);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (( true) && instance.type.__hmrId) {
            unregisterHMR(instance);
        }
        const { bum, effects, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
        }
        if (effects) {
            for (let i = 0; i < effects.length; i++) {
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(effects[i]);
            }
        }
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(update);
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (
            parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (true) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (( true) && c2.type === Comment && !c2.el) {
                c2.el = c1.el;
            }
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
        if (!select) {
            ( true) &&
                warn(`Current renderer does not support string target for Teleports. ` +
                    `(missing querySelector renderer option)`);
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( true) &&
                    warn(`Failed to locate Teleport target with selector "${targetSelector}". ` +
                        `Note the target element must exist before the component is mounted - ` +
                        `i.e. the target cannot be rendered by the component itself, and ` +
                        `ideally should be outside of the entire Vue component tree.`);
            }
            return target;
        }
    }
    else {
        if (( true) && !targetSelector && !isTeleportDisabled(props)) {
            warn(`Invalid Teleport target: ${targetSelector}`);
        }
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        const { shapeFlag, children } = n2;
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( true)
                ? createComment('teleport start')
                : 0);
            const mainAnchor = (n2.anchor = ( true)
                ? createComment('teleport end')
                : 0);
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (( true) && !disabled) {
                warn('Invalid Teleport target on mount:', target, `(${typeof target})`);
            }
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (n2.dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((true)) {
                        warn('Invalid Teleport target on update:', target, `(${typeof target})`);
                    }
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, { r: remove, o: { remove: hostRemove } }) {
        const { shapeFlag, children, anchor } = vnode;
        hostRemove(anchor);
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                remove(children[i]);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
            }
            target._lpa =
                vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name) {
    return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // self name has highest priority
        if (type === COMPONENTS) {
            // special self referencing call generated by compiler
            // inferred from SFC filename
            if (name === `_self`) {
                return Component;
            }
            const selfName = Component.displayName || Component.name;
            if (selfName &&
                (selfName === name ||
                    selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) ||
                    selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first for components with mixin or extends.
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (( true) && warnMissing && !res) {
            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}`);
        }
        return res;
    }
    else if ((true)) {
        warn(`resolve${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1))} ` +
            `can only be used in render() or setup().`);
    }
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] ||
            registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]));
}

const Fragment = Symbol(( true) ? 'Fragment' : 0);
const Text = Symbol(( true) ? 'Text' : 0);
const Comment = Symbol(( true) ? 'Comment' : 0);
const Static = Symbol(( true) ? 'Static' : 0);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let shouldTrack = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    shouldTrack += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */);
    // save current block children on the block vnode
    vnode.dynamicChildren = currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (shouldTrack > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (( true) &&
        n2.shapeFlag & 6 /* COMPONENT */ &&
        hmrDirtyComponents.has(n2.type)) {
        // HMR only: if the component has been hot-updated, force a reload.
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref }) => {
    return (ref != null
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)
            ? { i: currentRenderingInstance, r: ref }
            : ref
        : null);
};
const createVNode = (( true)
    ? createVNodeWithArgsTransform
    : 0);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (( true) && !type) {
            warn(`Invalid vnode type when creating vnode: ${type}.`);
        }
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props) {
            props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props);
        }
        let { class: klass, style } = props;
        if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
            props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
                style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
            }
            props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type)
        ? 1 /* ELEMENT */
        :  isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (( true) && shapeFlag & 4 /* STATEFUL_COMPONENT */ && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
        type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
        warn(`Vue received a Component which was made a reactive object. This can ` +
            `lead to unnecessary performance overhead, and should be avoided by ` +
            `marking the component with \`markRaw\` or using \`shallowRef\` ` +
            `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    const vnode = {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    // validate key
    if (( true) && vnode.key !== vnode.key) {
        warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    normalizeChildren(vnode, children);
    // normalize suspense children
    if ( shapeFlag & 128 /* SUSPENSE */) {
        const { content, fallback } = normalizeSuspenseChildren(vnode);
        vnode.ssContent = content;
        vnode.ssFallback = fallback;
    }
    if (shouldTrack > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    return {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        children: vnode.children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: perserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
        // fragment
        return createVNode(Fragment, null, child);
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return child.el === null ? child : cloneVNode(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & 1 /* ELEMENT */ || shapeFlag & 64 /* TELEPORT */) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && setCompiledSlotRendering(1);
                normalizeChildren(vnode, slot());
                slot._c && setCompiledSlotRendering(-1);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */) {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
                else {
                    children._ = 1 /* STABLE */;
                }
            }
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, args[0]);
    for (let i = 1; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (existing !== incoming) {
                    ret[key] = existing
                        ? [].concat(existing, toMerge[key])
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}

function provide(key, value) {
    if (!currentInstance) {
        if ((true)) {
            warn(`provide() can only be used inside setup().`);
        }
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the intance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)
                ? defaultValue()
                : defaultValue;
        }
        else if ((true)) {
            warn(`injection "${String(key)}" not found.`);
        }
    }
    else if ((true)) {
        warn(`inject() can only be used inside setup() or functional components.`);
    }
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let isInBeforeCreate = false;
function applyOptions(instance, options, deferredData = [], deferredWatch = [], deferredProvide = [], asMixin = false) {
    const { 
    // composition
    mixins, extends: extendsOptions, 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // assets
    components, directives, 
    // lifecycle
    beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, 
    // public API
    expose } = options;
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    const globalMixins = instance.appContext.mixins;
    if (asMixin && render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        instance.render = render;
    }
    // applyOptions is called non-as-mixin once per instance
    if (!asMixin) {
        isInBeforeCreate = true;
        callSyncHook('beforeCreate', "bc" /* BEFORE_CREATE */, options, instance, globalMixins);
        isInBeforeCreate = false;
        // global mixins are applied first
        applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
    }
    // extending a base component...
    if (extendsOptions) {
        applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
    }
    // local mixins
    if (mixins) {
        applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
    }
    const checkDuplicateProperties = ( true) ? createDuplicateChecker() : 0;
    if ((true)) {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) {
            for (const key in propsOptions) {
                checkDuplicateProperties("Props" /* PROPS */, key);
            }
        }
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
            for (let i = 0; i < injectOptions.length; i++) {
                const key = injectOptions[i];
                ctx[key] = inject(key);
                if ((true)) {
                    checkDuplicateProperties("Inject" /* INJECT */, key);
                }
            }
        }
        else {
            for (const key in injectOptions) {
                const opt = injectOptions[key];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
                    ctx[key] = inject(opt.from || key, opt.default, true /* treat default function as factory */);
                }
                else {
                    ctx[key] = inject(opt);
                }
                if ((true)) {
                    checkDuplicateProperties("Inject" /* INJECT */, key);
                }
            }
        }
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
                ctx[key] = methodHandler.bind(publicThis);
                if ((true)) {
                    checkDuplicateProperties("Methods" /* METHODS */, key);
                }
            }
            else if ((true)) {
                warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
                    `Did you reference the function correctly?`);
            }
        }
    }
    if (!asMixin) {
        if (deferredData.length) {
            deferredData.forEach(dataFn => resolveData(instance, dataFn, publicThis));
        }
        if (dataOptions) {
            resolveData(instance, dataOptions, publicThis);
        }
        if ((true)) {
            const rawData = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data);
            for (const key in rawData) {
                checkDuplicateProperties("Data" /* DATA */, key);
                // expose data on ctx during dev
                if (key[0] !== '$' && key[0] !== '_') {
                    Object.defineProperty(ctx, key, {
                        configurable: true,
                        enumerable: true,
                        get: () => rawData[key],
                        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
                    });
                }
            }
        }
    }
    else if (dataOptions) {
        deferredData.push(dataOptions);
    }
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)
                ? opt.bind(publicThis, publicThis)
                : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
            if (( true) && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
                warn(`Computed property "${key}" has no getter.`);
            }
            const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set)
                ? opt.set.bind(publicThis)
                : ( true)
                    ? () => {
                        warn(`Write operation failed: computed property "${key}" is readonly.`);
                    }
                    : 0;
            const c = computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((true)) {
                checkDuplicateProperties("Computed" /* COMPUTED */, key);
            }
        }
    }
    if (watchOptions) {
        deferredWatch.push(watchOptions);
    }
    if (!asMixin && deferredWatch.length) {
        deferredWatch.forEach(watchOptions => {
            for (const key in watchOptions) {
                createWatcher(watchOptions[key], ctx, publicThis, key);
            }
        });
    }
    if (provideOptions) {
        deferredProvide.push(provideOptions);
    }
    if (!asMixin && deferredProvide.length) {
        deferredProvide.forEach(provideOptions => {
            const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions)
                ? provideOptions.call(publicThis)
                : provideOptions;
            Reflect.ownKeys(provides).forEach(key => {
                provide(key, provides[key]);
            });
        });
    }
    // asset options.
    // To reduce memory usage, only components with mixins or extends will have
    // resolved asset registry attached to instance.
    if (asMixin) {
        if (components) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(instance.components ||
                (instance.components = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, instance.type.components)), components);
        }
        if (directives) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(instance.directives ||
                (instance.directives = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, instance.type.directives)), directives);
        }
    }
    // lifecycle options
    if (!asMixin) {
        callSyncHook('created', "c" /* CREATED */, options, instance, globalMixins);
    }
    if (beforeMount) {
        onBeforeMount(beforeMount.bind(publicThis));
    }
    if (mounted) {
        onMounted(mounted.bind(publicThis));
    }
    if (beforeUpdate) {
        onBeforeUpdate(beforeUpdate.bind(publicThis));
    }
    if (updated) {
        onUpdated(updated.bind(publicThis));
    }
    if (activated) {
        onActivated(activated.bind(publicThis));
    }
    if (deactivated) {
        onDeactivated(deactivated.bind(publicThis));
    }
    if (errorCaptured) {
        onErrorCaptured(errorCaptured.bind(publicThis));
    }
    if (renderTracked) {
        onRenderTracked(renderTracked.bind(publicThis));
    }
    if (renderTriggered) {
        onRenderTriggered(renderTriggered.bind(publicThis));
    }
    if (( true) && beforeDestroy) {
        warn(`\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`);
    }
    if (beforeUnmount) {
        onBeforeUnmount(beforeUnmount.bind(publicThis));
    }
    if (( true) && destroyed) {
        warn(`\`destroyed\` has been renamed to \`unmounted\`.`);
    }
    if (unmounted) {
        onUnmounted(unmounted.bind(publicThis));
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
        if (!asMixin) {
            if (expose.length) {
                const exposed = instance.exposed || (instance.exposed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)({}));
                expose.forEach(key => {
                    exposed[key] = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef)(publicThis, key);
                });
            }
            else if (!instance.exposed) {
                instance.exposed = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
            }
        }
        else if ((true)) {
            warn(`The \`expose\` option is ignored when used in mixins.`);
        }
    }
}
function callSyncHook(name, type, options, instance, globalMixins) {
    callHookFromMixins(name, type, globalMixins, instance);
    const { extends: base, mixins } = options;
    if (base) {
        callHookFromExtends(name, type, base, instance);
    }
    if (mixins) {
        callHookFromMixins(name, type, mixins, instance);
    }
    const selfHook = options[name];
    if (selfHook) {
        callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromExtends(name, type, base, instance) {
    if (base.extends) {
        callHookFromExtends(name, type, base.extends, instance);
    }
    const baseHook = base[name];
    if (baseHook) {
        callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromMixins(name, type, mixins, instance) {
    for (let i = 0; i < mixins.length; i++) {
        const chainedMixins = mixins[i].mixins;
        if (chainedMixins) {
            callHookFromMixins(name, type, chainedMixins, instance);
        }
        const fn = mixins[i][name];
        if (fn) {
            callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
        }
    }
}
function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
    for (let i = 0; i < mixins.length; i++) {
        applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
    }
}
function resolveData(instance, dataFn, publicThis) {
    if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataFn)) {
        warn(`The data option must be a function. ` +
            `Plain object usage is no longer supported.`);
    }
    const data = dataFn.call(publicThis, publicThis);
    if (( true) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
        warn(`data() returned a Promise - note data() cannot be async; If you ` +
            `intend to perform data fetching before component renders, use ` +
            `async setup() + <Suspense>.`);
    }
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
        ( true) && warn(`data() should return an object.`);
    }
    else if (instance.data === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
    }
    else {
        // existing data: this is a mixin or extends.
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(instance.data, data);
    }
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
        const handler = ctx[raw];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
            watch(getter, handler);
        }
        else if ((true)) {
            warn(`Invalid watch handler specified by key "${raw}"`, handler);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
                watch(getter, handler, raw);
            }
            else if ((true)) {
                warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
            }
        }
    }
    else if ((true)) {
        warn(`Invalid watch option: "${key}"`, raw);
    }
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function resolveMergedOptions(instance) {
    const raw = instance.type;
    const { __merged, mixins, extends: extendsOptions } = raw;
    if (__merged)
        return __merged;
    const globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions)
        return raw;
    const options = {};
    globalMixins.forEach(m => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return (raw.__merged = options);
}
function mergeOptions(to, from, instance) {
    const strats = instance.appContext.config.optionMergeStrategies;
    const { mixins, extends: extendsOptions } = from;
    extendsOptions && mergeOptions(to, extendsOptions, instance);
    mixins &&
        mixins.forEach((m) => mergeOptions(to, m, instance));
    for (const key in from) {
        if (strats && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(strats, key)) {
            to[key] = strats[key](to[key], from[key], instance.proxy, key);
        }
        else {
            to[key] = from[key];
        }
    }
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => i && (i.proxy ? i.proxy : getPublicInstance(i.parent));
const publicPropertiesMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0),
    $attrs: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0),
    $slots: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0),
    $refs: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0),
    $parent: i => getPublicInstance(i.parent),
    $root: i => i.root && i.root.proxy,
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => () => queueJob(i.update),
    $nextTick: i => nextTick.bind(i.proxy),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP)
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // let @vue/reactivity know it should never observe Vue public instances.
        if (key === "__v_skip" /* SKIP */) {
            return true;
        }
        // for internal formatters to know that this is a Vue instance
        if (( true) && key === '__isVue') {
            return true;
        }
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 0 /* SETUP */:
                        return setupState[key];
                    case 1 /* DATA */:
                        return data[key];
                    case 3 /* CONTEXT */:
                        return ctx[key];
                    case 2 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
                accessCache[key] = 0 /* SETUP */;
                return setupState[key];
            }
            else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
                accessCache[key] = 1 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 2 /* PROPS */;
                return props[key];
            }
            else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
                accessCache[key] = 3 /* CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || !isInBeforeCreate) {
                accessCache[key] = 4 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get" /* GET */, key);
                ( true) && markAttrsAccessed();
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 3 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key))) {
            return globalProperties[key];
        }
        else if (( true) &&
            currentRenderingInstance &&
            (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) ||
                // #1091 avoid internal isRef/isVNode checks on component instance leading
                // to infinite warning loop
                key.indexOf('__v') !== 0)) {
            if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ &&
                (key[0] === '$' || key[0] === '_') &&
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
                warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` +
                    `character ("$" or "_") and is not proxied on the render context.`);
            }
            else {
                warn(`Property ${JSON.stringify(key)} was accessed during render ` +
                    `but is not defined on instance.`);
            }
        }
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
            setupState[key] = value;
        }
        else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
            data[key] = value;
        }
        else if (key in instance.props) {
            ( true) &&
                warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( true) &&
                warn(`Attempting to mutate public property "${key}". ` +
                    `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        }
        else {
            if (( true) && key in instance.appContext.config.globalProperties) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    value
                });
            }
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (accessCache[key] !== undefined ||
            (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) ||
            (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key));
    }
};
if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
        warn(`Avoid app logic that relies on enumerating keys on a component instance. ` +
            `The keys will be empty in production mode to avoid performance overhead.`);
        return Reflect.ownKeys(target);
    };
}
const RuntimeCompiledPublicInstanceProxyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);
        if (( true) && !has && PublicInstanceProxyHandlers.has(_, key)) {
            warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        }
        return has;
    }
});
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
        });
    });
    // expose global properties
    const { globalProperties } = instance.appContext.config;
    Object.keys(globalProperties).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => globalProperties[key],
            set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach(key => {
        if (key[0] === '$' || key[0] === '_') {
            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                `which are reserved prefixes for Vue internals.`);
            return;
        }
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => setupState[key],
            set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
        });
    });
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        update: null,
        render: null,
        proxy: null,
        exposed: null,
        withProxy: null,
        effects: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // state
        ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null
    };
    if ((true)) {
        instance.ctx = createRenderContext(instance);
    }
    else {}
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (true) {
        devtoolsComponentAdded(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
};
const isBuiltInTag = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children, shapeFlag } = instance.vnode;
    const isStateful = shapeFlag & 4 /* STATEFUL_COMPONENT */;
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if ((true)) {
        if (Component.name) {
            validateComponentName(Component.name, instance.appContext.config);
        }
        if (Component.components) {
            const names = Object.keys(Component.components);
            for (let i = 0; i < names.length; i++) {
                validateComponentName(names[i], instance.appContext.config);
            }
        }
        if (Component.directives) {
            const names = Object.keys(Component.directives);
            for (let i = 0; i < names.length; i++) {
                validateDirectiveName(names[i]);
            }
        }
    }
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if ((true)) {
        exposePropsOnRenderContext(instance);
    }
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        currentInstance = instance;
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
        currentInstance = null;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult.then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult);
        }
    }
    else {
        finishComponentSetup(instance);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
        // setup returned an inline render function
        {
            instance.render = setupResult;
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
        if (( true) && isVNode(setupResult)) {
            warn(`setup() should not return VNodes directly - ` +
                `return a render function instead.`);
        }
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (true) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);
        if ((true)) {
            exposeSetupStateOnRenderContext(instance);
        }
    }
    else if (( true) && setupResult !== undefined) {
        warn(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
    }
    finishComponentSetup(instance);
}
let compile;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
}
function finishComponentSetup(instance, isSSR) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
        // could be set from setup()
        if (compile && Component.template && !Component.render) {
            if ((true)) {
                startMeasure(instance, `compile`);
            }
            Component.render = compile(Component.template, {
                isCustomElement: instance.appContext.config.isCustomElement,
                delimiters: Component.delimiters
            });
            if ((true)) {
                endMeasure(instance, `compile`);
            }
        }
        instance.render = (Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (instance.render._rc) {
            instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__) {
        currentInstance = instance;
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
        applyOptions(instance, Component);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
        currentInstance = null;
    }
    // warn missing template/render
    if (( true) && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        /* istanbul ignore if */
        if (!compile && Component.template) {
            warn(`Component provided template option but ` +
                `runtime compilation is not supported in this build of Vue.` +
                ( ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                    ) /* should not happen */);
        }
        else {
            warn(`Component is missing template or render function.`);
        }
    }
}
const attrHandlers = {
    get: (target, key) => {
        if ((true)) {
            markAttrsAccessed();
        }
        return target[key];
    },
    set: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    }
};
function createSetupContext(instance) {
    const expose = exposed => {
        if (( true) && instance.exposed) {
            warn(`expose() should be called only once per setup().`);
        }
        instance.exposed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(exposed);
    };
    if ((true)) {
        // We use getters in dev in case libs like test-utils overwrite instance
        // properties (overwrites should not be done in prod)
        return Object.freeze({
            get props() {
                return instance.props;
            },
            get attrs() {
                return new Proxy(instance.attrs, attrHandlers);
            },
            get slots() {
                return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.slots);
            },
            get emit() {
                return (event, ...args) => instance.emit(event, ...args);
            },
            expose
        });
    }
    else {}
}
// record effects created during a component's setup() so that they can be
// stopped when the component unmounts
function recordInstanceBoundEffect(effect, instance = currentInstance) {
    if (instance) {
        (instance.effects || (instance.effects = [])).push(effect);
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component)
        ? Component.displayName || Component.name
        : Component.name;
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

function computed(getterOrOptions) {
    const c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions);
    recordInstanceBoundEffect(c.effect);
    return c;
}

// implementation
function defineProps() {
    if ((true)) {
        warn(`defineProps() is a compiler-hint helper that is only usable inside ` +
            `<script setup> of a single file component. Its arguments should be ` +
            `compiled away and passing it at runtime has no effect.`);
    }
    return null;
}
// implementation
function defineEmit() {
    if ((true)) {
        warn(`defineEmit() is a compiler-hint helper that is only usable inside ` +
            `<script setup> of a single file component. Its arguments should be ` +
            `compiled away and passing it at runtime has no effect.`);
    }
    return null;
}
function useContext() {
    const i = getCurrentInstance();
    if (( true) && !i) {
        warn(`useContext() called without active instance.`);
    }
    return i.setupContext || (i.setupContext = createSetupContext(i));
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( true) ? `ssrContext` : 0);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            warn(`Server rendering context not provided. Make sure to only call ` +
                `useSsrContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if ( false || typeof window === 'undefined') {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
        }
        if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
            blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
            return ['object', { object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key)) ||
            ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (v._shallow) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

/**
 * Actual implementation
 */
function renderList(source, renderItem) {
    let ret;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i);
        }
    }
    else if (typeof source === 'number') {
        if (( true) && !Number.isInteger(source)) {
            warn(`The v-for range expect an integer value but got ${source}.`);
            return [];
        }
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, renderItem);
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i);
            }
        }
    }
    else {
        ret = [];
    }
    return ret;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for (const key in obj) {
        ret[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

// Core API ------------------------------------------------------------------
const version = "3.0.4";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */
const ssrUtils = ( null);




/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition,
/* harmony export */   "Comment": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment,
/* harmony export */   "Fragment": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment,
/* harmony export */   "KeepAlive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive,
/* harmony export */   "Static": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static,
/* harmony export */   "Suspense": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense,
/* harmony export */   "Teleport": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport,
/* harmony export */   "Text": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text,
/* harmony export */   "callWithAsyncErrorHandling": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling,
/* harmony export */   "callWithErrorHandling": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling,
/* harmony export */   "camelize": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize,
/* harmony export */   "capitalize": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize,
/* harmony export */   "cloneVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode,
/* harmony export */   "computed": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed,
/* harmony export */   "createBlock": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock,
/* harmony export */   "createCommentVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode,
/* harmony export */   "createHydrationRenderer": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer,
/* harmony export */   "createRenderer": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer,
/* harmony export */   "createSlots": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots,
/* harmony export */   "createStaticVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode,
/* harmony export */   "createTextVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode,
/* harmony export */   "createVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode,
/* harmony export */   "customRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef,
/* harmony export */   "defineAsyncComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent,
/* harmony export */   "defineComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent,
/* harmony export */   "defineEmit": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmit,
/* harmony export */   "defineProps": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps,
/* harmony export */   "devtools": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools,
/* harmony export */   "getCurrentInstance": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
/* harmony export */   "getTransitionRawChildren": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren,
/* harmony export */   "h": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h,
/* harmony export */   "handleError": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError,
/* harmony export */   "initCustomFormatter": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter,
/* harmony export */   "inject": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject,
/* harmony export */   "isProxy": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy,
/* harmony export */   "isReactive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive,
/* harmony export */   "isReadonly": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly,
/* harmony export */   "isRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef,
/* harmony export */   "isVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode,
/* harmony export */   "markRaw": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw,
/* harmony export */   "mergeProps": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps,
/* harmony export */   "nextTick": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick,
/* harmony export */   "onActivated": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated,
/* harmony export */   "onBeforeMount": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
/* harmony export */   "onBeforeUnmount": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount,
/* harmony export */   "onBeforeUpdate": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate,
/* harmony export */   "onDeactivated": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated,
/* harmony export */   "onErrorCaptured": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured,
/* harmony export */   "onMounted": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted,
/* harmony export */   "onRenderTracked": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked,
/* harmony export */   "onRenderTriggered": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered,
/* harmony export */   "onUnmounted": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted,
/* harmony export */   "onUpdated": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated,
/* harmony export */   "openBlock": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock,
/* harmony export */   "popScopeId": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId,
/* harmony export */   "provide": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide,
/* harmony export */   "proxyRefs": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs,
/* harmony export */   "pushScopeId": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId,
/* harmony export */   "queuePostFlushCb": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb,
/* harmony export */   "reactive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive,
/* harmony export */   "readonly": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly,
/* harmony export */   "ref": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref,
/* harmony export */   "registerRuntimeCompiler": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler,
/* harmony export */   "renderList": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList,
/* harmony export */   "renderSlot": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot,
/* harmony export */   "resolveComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent,
/* harmony export */   "resolveDirective": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective,
/* harmony export */   "resolveDynamicComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent,
/* harmony export */   "resolveTransitionHooks": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks,
/* harmony export */   "setBlockTracking": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking,
/* harmony export */   "setDevtoolsHook": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook,
/* harmony export */   "setTransitionHooks": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks,
/* harmony export */   "shallowReactive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive,
/* harmony export */   "shallowReadonly": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly,
/* harmony export */   "shallowRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
/* harmony export */   "ssrContextKey": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey,
/* harmony export */   "ssrUtils": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils,
/* harmony export */   "toDisplayString": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString,
/* harmony export */   "toHandlerKey": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey,
/* harmony export */   "toHandlers": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers,
/* harmony export */   "toRaw": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw,
/* harmony export */   "toRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef,
/* harmony export */   "toRefs": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs,
/* harmony export */   "transformVNodeArgs": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs,
/* harmony export */   "triggerRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef,
/* harmony export */   "unref": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref,
/* harmony export */   "useContext": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useContext,
/* harmony export */   "useSSRContext": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext,
/* harmony export */   "useTransitionState": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState,
/* harmony export */   "version": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version,
/* harmony export */   "warn": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn,
/* harmony export */   "watch": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch,
/* harmony export */   "watchEffect": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect,
/* harmony export */   "withCtx": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx,
/* harmony export */   "withDirectives": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives,
/* harmony export */   "withScopeId": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId,
/* harmony export */   "Transition": () => /* binding */ Transition,
/* harmony export */   "TransitionGroup": () => /* binding */ TransitionGroup,
/* harmony export */   "createApp": () => /* binding */ createApp,
/* harmony export */   "createSSRApp": () => /* binding */ createSSRApp,
/* harmony export */   "hydrate": () => /* binding */ hydrate,
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "useCssModule": () => /* binding */ useCssModule,
/* harmony export */   "useCssVars": () => /* binding */ useCssVars,
/* harmony export */   "vModelCheckbox": () => /* binding */ vModelCheckbox,
/* harmony export */   "vModelDynamic": () => /* binding */ vModelDynamic,
/* harmony export */   "vModelRadio": () => /* binding */ vModelRadio,
/* harmony export */   "vModelSelect": () => /* binding */ vModelSelect,
/* harmony export */   "vModelText": () => /* binding */ vModelText,
/* harmony export */   "vShow": () => /* binding */ vShow,
/* harmony export */   "withKeys": () => /* binding */ withKeys,
/* harmony export */   "withModifiers": () => /* binding */ withModifiers
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
let tempContainer;
let tempSVGContainer;
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is) => isSVG
        ? doc.createElementNS(svgNS, tag)
        : doc.createElement(tag, is ? { is } : undefined),
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        return el.cloneNode(true);
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
        const temp = isSVG
            ? tempSVGContainer ||
                (tempSVGContainer = doc.createElementNS(svgNS, 'svg'))
            : tempContainer || (tempContainer = doc.createElement('div'));
        temp.innerHTML = content;
        const first = temp.firstChild;
        let node = first;
        let last = node;
        while (node) {
            last = node;
            nodeOps.insert(node, parent, anchor);
            node = temp.firstChild;
        }
        return [first, last];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    if (value == null) {
        value = '';
    }
    if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        // directly setting className should be faster than setAttribute in theory
        // if this is an element during a transition, take the temporary transition
        // classes into account.
        const transitionClasses = el._vtc;
        if (transitionClasses) {
            value = (value
                ? [value, ...transitionClasses]
                : [...transitionClasses]).join(' ');
        }
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next)) {
        if (prev !== next) {
            style.cssText = next;
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (value === '' && type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = true;
            return;
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            el[key] = 0;
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    }
    catch (e) {
        if ((true)) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
                `value ${value} is invalid.`, e);
        }
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (typeof document !== 'undefined' &&
    _getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = () => performance.now();
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [name.slice(2).toLowerCase(), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (timeStamp >= invoker.attached - 1) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                // ignore v-model listeners
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML
        if (key === 'innerHTML') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787 form as an attribute must be a string, while it accepts an Element as
    // a prop
    if (key === 'form' && typeof value === 'string') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        return false;
    }
    return key in el;
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        if (!instance) {
            ( true) && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssModule must be called inside setup()`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( true) && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS modules injected.`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            ( true) &&
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS module named "${name}".`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    /* istanbul ignore next */
    if (!instance) {
        ( true) &&
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(setVars, { flush: 'post' }));
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(setVars);
}
function setVarsOnVNode(vnode, vars) {
    if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        const style = vnode.el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators));
function resolveTransitionProps(rawProps) {
    let { name = 'v', type, css = true, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (!css) {
        return baseProps;
    }
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            hook && hook(el, resolve);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!(hook && hook.length > 1)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
        onBeforeEnter(el) {
            onBeforeEnter && onBeforeEnter(el);
            addTransitionClass(el, enterActiveClass);
            addTransitionClass(el, enterFromClass);
        },
        onBeforeAppear(el) {
            onBeforeAppear && onBeforeAppear(el);
            addTransitionClass(el, appearActiveClass);
            addTransitionClass(el, appearFromClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveActiveClass);
            addTransitionClass(el, leaveFromClass);
            // ref #2531, #2593
            // disabling the transition before nextFrame ensures styles from
            // *-leave-from and *-enter-from classes are applied instantly before
            // the transition starts. This is applied for enter transition as well
            // so that it accounts for `visibility: hidden` cases.
            const cachedTransition = el.style.transitionProperty;
            el.style.transitionProperty = 'none';
            nextFrame(() => {
                el.style.transitionProperty = cachedTransition;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!(onLeave && onLeave.length > 1)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            onLeave && onLeave(el, resolve);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            onEnterCancelled && onEnterCancelled(el);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            onAppearCancelled && onAppearCancelled(el);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            onLeaveCancelled && onLeaveCancelled(el);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
    if ((true))
        validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
        let prevChildren;
        let children;
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            const tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
            prevChildren = children;
            children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                }
                else if ((true)) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<TransitionGroup> children must be keyed.`);
                }
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
// this is put in a dedicated function to avoid the line from being treeshaken
function forceReflow() {
    return document.body.offsetHeight;
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || el.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
                const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        ( true) &&
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<select multiple v-model> expects an Array or Set value for its binding, ` +
                `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
                option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
                el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event))
            return;
        const eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
        if (
        // None of the provided key modifiers match the current event key
        !modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return;
        }
        return fn(event);
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (transition && value !== oldValue) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container);
        container.removeAttribute('v-cloak');
        container.setAttribute('data-v-app', '');
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag),
        writable: false
    });
}
function normalizeContainer(container) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
        const res = document.querySelector(container);
        if (( true) && !res) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Failed to mount app: mount target selector returned null.`);
        }
        return res;
    }
    return container;
}




/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => /* binding */ EMPTY_ARR,
/* harmony export */   "EMPTY_OBJ": () => /* binding */ EMPTY_OBJ,
/* harmony export */   "NO": () => /* binding */ NO,
/* harmony export */   "NOOP": () => /* binding */ NOOP,
/* harmony export */   "PatchFlagNames": () => /* binding */ PatchFlagNames,
/* harmony export */   "babelParserDefaultPlugins": () => /* binding */ babelParserDefaultPlugins,
/* harmony export */   "camelize": () => /* binding */ camelize,
/* harmony export */   "capitalize": () => /* binding */ capitalize,
/* harmony export */   "def": () => /* binding */ def,
/* harmony export */   "escapeHtml": () => /* binding */ escapeHtml,
/* harmony export */   "escapeHtmlComment": () => /* binding */ escapeHtmlComment,
/* harmony export */   "extend": () => /* binding */ extend,
/* harmony export */   "generateCodeFrame": () => /* binding */ generateCodeFrame,
/* harmony export */   "getGlobalThis": () => /* binding */ getGlobalThis,
/* harmony export */   "hasChanged": () => /* binding */ hasChanged,
/* harmony export */   "hasOwn": () => /* binding */ hasOwn,
/* harmony export */   "hyphenate": () => /* binding */ hyphenate,
/* harmony export */   "invokeArrayFns": () => /* binding */ invokeArrayFns,
/* harmony export */   "isArray": () => /* binding */ isArray,
/* harmony export */   "isBooleanAttr": () => /* binding */ isBooleanAttr,
/* harmony export */   "isDate": () => /* binding */ isDate,
/* harmony export */   "isFunction": () => /* binding */ isFunction,
/* harmony export */   "isGloballyWhitelisted": () => /* binding */ isGloballyWhitelisted,
/* harmony export */   "isHTMLTag": () => /* binding */ isHTMLTag,
/* harmony export */   "isIntegerKey": () => /* binding */ isIntegerKey,
/* harmony export */   "isKnownAttr": () => /* binding */ isKnownAttr,
/* harmony export */   "isMap": () => /* binding */ isMap,
/* harmony export */   "isModelListener": () => /* binding */ isModelListener,
/* harmony export */   "isNoUnitNumericStyleProp": () => /* binding */ isNoUnitNumericStyleProp,
/* harmony export */   "isObject": () => /* binding */ isObject,
/* harmony export */   "isOn": () => /* binding */ isOn,
/* harmony export */   "isPlainObject": () => /* binding */ isPlainObject,
/* harmony export */   "isPromise": () => /* binding */ isPromise,
/* harmony export */   "isReservedProp": () => /* binding */ isReservedProp,
/* harmony export */   "isSSRSafeAttrName": () => /* binding */ isSSRSafeAttrName,
/* harmony export */   "isSVGTag": () => /* binding */ isSVGTag,
/* harmony export */   "isSet": () => /* binding */ isSet,
/* harmony export */   "isSpecialBooleanAttr": () => /* binding */ isSpecialBooleanAttr,
/* harmony export */   "isString": () => /* binding */ isString,
/* harmony export */   "isSymbol": () => /* binding */ isSymbol,
/* harmony export */   "isVoidTag": () => /* binding */ isVoidTag,
/* harmony export */   "looseEqual": () => /* binding */ looseEqual,
/* harmony export */   "looseIndexOf": () => /* binding */ looseIndexOf,
/* harmony export */   "makeMap": () => /* binding */ makeMap,
/* harmony export */   "normalizeClass": () => /* binding */ normalizeClass,
/* harmony export */   "normalizeStyle": () => /* binding */ normalizeStyle,
/* harmony export */   "objectToString": () => /* binding */ objectToString,
/* harmony export */   "parseStringStyle": () => /* binding */ parseStringStyle,
/* harmony export */   "propsToAttrMap": () => /* binding */ propsToAttrMap,
/* harmony export */   "remove": () => /* binding */ remove,
/* harmony export */   "slotFlagsText": () => /* binding */ slotFlagsText,
/* harmony export */   "stringifyStyle": () => /* binding */ stringifyStyle,
/* harmony export */   "toDisplayString": () => /* binding */ toDisplayString,
/* harmony export */   "toHandlerKey": () => /* binding */ toHandlerKey,
/* harmony export */   "toNumber": () => /* binding */ toNumber,
/* harmony export */   "toRawType": () => /* binding */ toRawType,
/* harmony export */   "toTypeString": () => /* binding */ toTypeString
/* harmony export */ });
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : 0;
const EMPTY_ARR = ( true) ? Object.freeze([]) : 0;
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DesktopWindow.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DesktopWindow.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  props: {
    title: String,
    width: String,
    position: String,
    dismissable: {
      type: Boolean,
      "default": true
    }
  },
  emits: ['close']
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuButton,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuItems,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuItem
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DesktopWindow.vue?vue&type=template&id=abc10e5e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DesktopWindow.vue?vue&type=template&id=abc10e5e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-center py-1 flex items-center select-none"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"w-24\"></div><div class=\"lines w-full\"><div class=\"bg-black h-px\"></div><div class=\"bg-black h-px mt-1\"></div><div class=\"bg-black h-px mt-1\"></div></div>", 2);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "lines w-full"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-black h-px"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-black h-px mt-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-black h-px mt-1"
})], -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  height: "13",
  width: "13",
  viewBox: "0 0 13 13",
  "class": "mx-auto"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "1.41",
  y1: "11.59",
  x2: "11.59",
  y2: "1.41",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "square",
  "stroke-width": "2"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "1.41",
  y1: "1.41",
  x2: "11.59",
  y2: "11.59",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "square",
  "stroke-width": "2"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "border-t-2 p-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    ref: "window",
    "class": ["mx-auto bg-tan font-display shadow border cursor-default window relative z-10", {
      width: _ctx.width,
      position: _ctx.position
    }]
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("header", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
    "class": "uppercase px-3 flex-1 whitespace-nowrap",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title)
  }, null, 8
  /* PROPS */
  , ["textContent"]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "w-24 outline-none relative",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    })
  }, [_ctx.dismissable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_5, [_hoisted_6, _hoisted_7])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBar.vue?vue&type=template&id=1c77ed99":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBar.vue?vue&type=template&id=1c77ed99 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "ui-menu-bar bg-tan px-3 flex items-center justify-between font-display shadow-sm fixed top-0 inset-x-0 z-10 select-none"
};
var _hoisted_2 = {
  "class": "flex items-center space-x-2"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "/",
  "class": "flex items-center py-1 px-2 md:mr-8 hover:bg-black hover:text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "mr-2 relative -mt-px",
  width: "12px",
  height: "14px",
  viewBox: "0 0 12 14",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "currentColor",
  d: "M9.33578369,8.08420429 C9.36936972,8.0851308 9.40179761,8.08953173 9.43283574,8.09740708 C9.51830639,8.09115313 9.60261891,8.08559406 9.68160398,8.08420429 C9.81803275,8.08767871 9.93894246,8.14975496 10.0098206,8.26394746 C10.0806987,8.37790833 10.0857945,8.5143371 10.0237182,8.63177238 C9.46734828,9.69772347 8.58438315,10.6290988 7.7329194,11.5292044 C7.48739394,11.7881643 7.23352988,12.0561576 6.99333187,12.3204449 C6.94492166,12.3739509 6.86894774,12.3929444 6.80154406,12.3653807 C6.75406036,12.3456923 6.71931619,12.3067789 6.70333387,12.2602217 C6.68503528,12.2803733 6.66581017,12.3005249 6.64751158,12.3204449 C6.59910137,12.3739509 6.52312746,12.3929444 6.45572377,12.3653807 C6.38832008,12.3375854 6.34523731,12.2720347 6.34685871,12.1993036 L6.36075638,11.7469345 C6.36585219,11.539396 6.37280102,11.3320891 6.37974985,11.1247823 C6.38669869,10.9262773 6.30725036,10.7740978 6.14302625,10.6740346 C6.06519932,10.6267825 5.9725482,10.595976 5.87526453,10.5783723 C5.7733483,10.5962077 5.67536975,10.627709 5.59059398,10.6772774 C5.46088242,10.7500085 5.30708156,10.8917647 5.31055598,11.1421544 C5.28994111,12.2030096 5.27442205,13.2583058 5.26052438,14.3122123 C5.25704996,14.6302372 5.50929262,14.7752362 5.61815768,14.8236464 C5.66633626,14.8447246 5.71636787,14.8588539 5.76686272,14.8697404 C5.88221336,14.8435664 5.98829889,14.7926083 6.07052676,14.7147814 C6.93959422,14.0377333 7.79476402,13.3152863 8.696491,12.4983351 L8.81925373,12.3843742 C9.84374343,11.4272882 10.9027457,10.435458 11.6351528,9.19161675 C12.0465237,8.55232405 12.1120744,7.89751229 11.8218448,7.34299537 C11.4971026,6.72292778 10.7885532,6.33402472 9.92481316,6.30460799 C9.92133874,6.30460799 9.91971735,6.30460799 9.91624293,6.3029866 C9.77240208,6.29071032 9.62879285,6.28445637 9.48541525,6.28144521 C8.33005584,6.31086194 7.18905735,6.59715389 6.07932861,6.87672863 C4.94944826,7.16163081 3.78158095,7.45533485 2.6067648,7.47432832 C2.5750318,7.47386507 2.54445693,7.4699274 2.51480857,7.46321019 C2.43026443,7.46714786 2.34572028,7.47293856 2.26117614,7.47432832 C2.12984319,7.47270693 2.01402929,7.41549487 1.94152979,7.30848283 C1.87065169,7.20309218 1.85675402,7.07175923 1.90701725,6.95432394 C2.3992263,5.7846036 3.35121652,4.80504969 4.27031558,3.85838691 C4.41878899,3.70643908 4.56401962,3.55611265 4.70577582,3.40578621 C4.7539544,3.35552298 4.82830692,3.34023555 4.89223619,3.36432484 C4.9406464,3.38216018 4.97654871,3.41991551 4.99345754,3.46600944 C5.01245102,3.44608945 5.03260263,3.4257062 5.05136449,3.40578621 C5.09977469,3.35552298 5.17412721,3.34023555 5.23805648,3.36432484 C5.30360715,3.38864576 5.34692154,3.44886898 5.35039596,3.51812569 C5.36591502,3.9257906 5.37958106,4.33183411 5.39695315,4.73787763 C5.40228059,4.93128683 5.49377356,5.07466443 5.66818929,5.16801043 C5.74485808,5.20808204 5.8333399,5.23425598 5.9266859,5.24884853 C6.06265141,5.2277704 6.19352111,5.18329787 6.30030152,5.11450441 C6.42283262,5.03667747 6.56621022,4.89492127 6.5560186,4.66005069 C6.505987,4.32650667 6.51617862,3.84448925 6.52822327,3.33490811 C6.54721675,2.50568063 6.56991627,1.47262069 6.28987827,1.14069807 C6.20301785,1.06750369 6.10550255,1.0225679 5.99988028,1.0001 C5.2206844,1.13606551 4.18090726,2.08249666 3.4327495,2.76487212 C3.12005198,3.05000593 2.85043724,3.29529976 2.63965595,3.44724759 L2.39436212,3.69254142 C1.51325001,4.56855771 0.602721174,5.47538051 0.155447914,6.63815201 C-0.0259166445,7.10812479 -0.0486161678,7.60728267 0.0880442276,8.04459594 C0.375725941,8.96740105 1.20333203,9.30418786 2.28410729,9.33499435 C3.48671877,9.30326134 4.94249942,8.95813594 6.30887175,8.63362541 C7.46816883,8.35729345 8.56168362,8.09810196 9.33578369,8.08420429"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SortaOS ")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "relative w-md"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" File ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "block px-3 py-1 hover:bg-tan-darker",
  href: "/comp-fun"
}, "GOTO: Comp.Fun", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "block px-3 py-1 hover:bg-tan-darker",
  href: "/404-4-fun"
}, "GOTO: 404 4 Fun", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "",
  "class": "py-1 px-2 hover:bg-black hover:text-white"
}, "Edit", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MenuButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuButton");

  var _component_MenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItem");

  var _component_MenuItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItems");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuButton, {
        "class": "py-1 px-2 hover:bg-black hover:text-white outline-none"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
        "class": "bg-tan absolute top-8 py-2 w-40 left-0 shadow outline-none"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_6];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_7];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.showSettings && _ctx.showSettings.apply(_ctx, arguments);
    }),
    "class": "py-1 px-2 hover:bg-black hover:text-white outline-none"
  }, "Settings")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "py-1 px-2 hover:bg-black hover:text-white",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.time)
  }, null, 8
  /* PROPS */
  , ["textContent"])]);
}

/***/ }),

/***/ "./resources/js/site.js":
/*!******************************!*
  !*** ./resources/js/site.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_DesktopWindow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DesktopWindow.vue */ "./resources/js/components/DesktopWindow.vue");
/* harmony import */ var _components_MenuBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MenuBar.vue */ "./resources/js/components/MenuBar.vue");
/* harmony import */ var vue3_click_away__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue3-click-away */ "./node_modules/vue3-click-away/dist/module.js");

 // import headlessui from '@headlessui/vue'




var SortaApp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  data: function data() {
    return {
      message: 'hi',
      wallpaper: '/assets/system-wallpapers/leather-teal.png',
      showingSettings: false,
      showingSurprise: false,
      interval: null,
      time: this.getTime()
    };
  },
  beforeUnmount: function beforeUnmount() {
    clearInterval(this.interval);
  },
  created: function created() {
    var _this = this;

    this.interval = setInterval(function () {
      _this.time = _this.getTime();
    }, 1000);
  },
  methods: {
    setWallpaper: function setWallpaper(str) {
      this.wallpaper = str;
    },
    showSettings: function showSettings() {
      this.showingSettings = true;
    },
    showSurprise: function showSurprise() {
      this.showingSurprise = true;
    },
    getTime: function getTime() {
      return Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric'
      }).format();
    },
    generateSurprise: function generateSurprise() {
      var surprises = ['https://youtu.be/oHg5SJYRHA0', 'https://youtu.be/FGXDKrUoVrw', 'https://youtu.be/HcGNqrAtsgg', 'https://youtu.be/l_zsz_MlVvI', 'http://spacejam.com/'];
      window.location = surprises[Math.floor(Math.random() * surprises.length)];
    },
    goTo: function goTo(url) {
      window.location = url;
    }
  }
});
SortaApp.component('DesktopWindow', _components_DesktopWindow_vue__WEBPACK_IMPORTED_MODULE_1__.default);
SortaApp.component('MenuBar', _components_MenuBar_vue__WEBPACK_IMPORTED_MODULE_2__.default);
SortaApp.use(vue3_click_away__WEBPACK_IMPORTED_MODULE_3__.default);
SortaApp.mount('#app');
/***********************************************/

/* Draggable Interaction
************************************************/

interactjs__WEBPACK_IMPORTED_MODULE_4___default()('.window').draggable({
  allowFrom: 'header',
  listeners: {
    move: dragMoveListener
  }
});
interactjs__WEBPACK_IMPORTED_MODULE_4___default()('.shortcut').draggable({
  listeners: {
    move: dragMoveListener
  }
});

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

/***/ }),

/***/ "./node_modules/interactjs/dist/interact.min.js":
/*!******************************************************!*
  !*** ./node_modules/interactjs/dist/interact.min.js ***!
  \******************************************************/
/***/ ((module) => {

/* interact.js 1.10.1 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(t){ true?module.exports=t():0}((function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=i,e.getWindow=function(e){return(0,t.default)(e)?e:(e.ownerDocument||e).defaultView||r.window},e.window=e.realWindow=void 0;var n=void 0;e.realWindow=n;var r=void 0;function i(t){e.realWindow=n=t;var i=t.document.createTextNode("");i.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(i)===i&&(t=t.wrap(t)),e.window=r=t}e.window=r,"undefined"!=typeof window&&window&&i(window);var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=function(t){return!!t&&"object"==typeof t},s=function(t){return"function"==typeof t},l={window:function(n){return n===e.window||(0,t.default)(n)},docFrag:function(t){return a(t)&&11===t.nodeType},object:a,func:s,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!=typeof t)return!1;var n=e.getWindow(t)||e.window;return/object|function/.test(typeof n.Element)?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return a(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return a(t)&&void 0!==t.length&&s(t.splice)}};o.default=l;var c={};function u(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function d(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var i="x"===r?"y":"x";e.page[i]=n.coords.start.page[i],e.client[i]=n.coords.start.client[i],e.delta[i]=0}}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var f={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=f.draggable,e.map.drag=f,e.methodDict.drag="draggable",r.actions.drag=f.defaults},listeners:{"interactions:before-action-move":u,"interactions:action-resume":u,"interactions:action-move":d,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,i=n.options.drag;if(i&&i.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===i.lockAxis?i.startAxis:i.lockAxis},!1}},draggable:function(t){return o.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):o.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:u,move:d,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},p=f;c.default=p;var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var h={init:function(t){var e=t;h.document=e.document,h.DocumentFragment=e.DocumentFragment||g,h.SVGElement=e.SVGElement||g,h.SVGSVGElement=e.SVGSVGElement||g,h.SVGElementInstance=e.SVGElementInstance||g,h.Element=e.Element||g,h.HTMLElement=e.HTMLElement||h.Element,h.Event=e.Event,h.Touch=e.Touch||g,h.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function g(){}var m=h;v.default=m;var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var b={init:function(t){var n=v.default.Element,r=e.window.navigator;b.supportsTouch="ontouchstart"in t||o.default.func(t.DocumentTouch)&&v.default.document instanceof t.DocumentTouch,b.supportsPointerEvent=!1!==r.pointerEnabled&&!!v.default.PointerEvent,b.isIOS=/iP(hone|od|ad)/.test(r.platform),b.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),b.isIe9=/MSIE 9/.test(r.userAgent),b.isOperaMobile="Opera"===r.appName&&b.supportsTouch&&/Presto/.test(r.userAgent),b.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",b.pEventTypes=b.supportsPointerEvent?v.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,b.wheelEvent="onmousewheel"in v.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},x=b;y.default=x;var _={};function w(t){var e=t.parentNode;if(o.default.docFrag(e)){for(;(e=e.host)&&o.default.docFrag(e););return e}return e}function P(t,n){return e.window!==e.realWindow&&(n=n.replace(/\/deep\//g," ")),t[y.default.prefixedMatchesSelector](n)}Object.defineProperty(_,"__esModule",{value:!0}),_.nodeContains=function(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1},_.closest=function(t,e){for(;o.default.element(t);){if(P(t,e))return t;t=w(t)}return null},_.parentNode=w,_.matchesSelector=P,_.indexOfDeepestElement=function(t){for(var n,r=[],i=0;i<t.length;i++){var o=t[i],a=t[n];if(o&&i!==n)if(a){var s=E(o),l=E(a);if(s!==o.ownerDocument)if(l!==o.ownerDocument)if(s!==l){r=r.length?r:S(a);var c=void 0;if(a instanceof v.default.HTMLElement&&o instanceof v.default.SVGElement&&!(o instanceof v.default.SVGSVGElement)){if(o===l)continue;c=o.ownerSVGElement}else c=o;for(var u=S(c,a.ownerDocument),d=0;u[d]&&u[d]===r[d];)d++;for(var f=[u[d-1],u[d],r[d]],p=f[0].lastChild;p;){if(p===f[1]){n=i,r=u;break}if(p===f[2])break;p=p.previousSibling}}else h=o,g=a,void 0,void 0,(parseInt(e.getWindow(h).getComputedStyle(h).zIndex,10)||0)>=(parseInt(e.getWindow(g).getComputedStyle(g).zIndex,10)||0)&&(n=i);else n=i}else n=i}var h,g;return n},_.matchesUpTo=function(t,e,n){for(;o.default.element(t);){if(P(t,e))return!0;if((t=w(t))===n)return P(t,e)}return!1},_.getActualElement=function(t){return t.correspondingUseElement||t},_.getScrollXY=M,_.getElementClientRect=O,_.getElementRect=function(t){var n=O(t);if(!y.default.isIOS7&&n){var r=M(e.getWindow(t));n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n},_.getPath=function(t){for(var e=[];t;)e.push(t),t=w(t);return e},_.trySelector=function(t){return!!o.default.string(t)&&(v.default.document.querySelector(t),!0)};var E=function(t){return t.parentNode||t.host};function S(t,e){for(var n,r=[],i=t;(n=E(i))&&i!==e&&n!==i.ownerDocument;)r.unshift(i),i=n;return r}function M(t){return{x:(t=t||e.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function O(t){var e=t instanceof v.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var T={};Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(t,e){for(var n in e)t[n]=e[n];return t};var I={};function D(t,e,n){return"parent"===t?(0,_.parentNode)(n):"self"===t?e.getRect(n):(0,_.closest)(n,t)}Object.defineProperty(I,"__esModule",{value:!0}),I.getStringOptionResult=D,I.resolveRectLike=function(t,e,n,r){var i=t;return o.default.string(i)?i=D(i,e,n):o.default.func(i)&&(i=i.apply(void 0,r)),o.default.element(i)&&(i=(0,_.getElementRect)(i)),i},I.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},I.xywhToTlbr=function(t){return!t||"left"in t&&"top"in t||((t=(0,T.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height),t},I.tlbrToXywh=function(t){return!t||"x"in t&&"y"in t||((t=(0,T.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y),t},I.addEdges=function(t,e,n){t.left&&(e.left+=n.x),t.right&&(e.right+=n.x),t.top&&(e.top+=n.y),t.bottom&&(e.bottom+=n.y),e.width=e.right-e.left,e.height=e.bottom-e.top};var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t,e,n){var r=t.options[n],i=r&&r.origin||t.options.origin,o=(0,I.resolveRectLike)(i,t,e,[t&&e]);return(0,I.rectToXY)(o)||{x:0,y:0}};var z={};function A(t){return t.trim().split(/ +/)}Object.defineProperty(z,"__esModule",{value:!0}),z.default=function t(e,n,r){if(r=r||{},o.default.string(e)&&-1!==e.search(" ")&&(e=A(e)),o.default.array(e))return e.reduce((function(e,i){return(0,T.default)(e,t(i,n,r))}),r);if(o.default.object(e)&&(n=e,e=""),o.default.func(n))r[e]=r[e]||[],r[e].push(n);else if(o.default.array(n))for(var i=0;i<n.length;i++){var a;a=n[i],t(e,a,r)}else if(o.default.object(n))for(var s in n){var l=A(s).map((function(t){return""+e+t}));t(l,n[s],r)}return r};var C={};Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0,C.default=function(t,e){return Math.sqrt(t*t+e*e)};var k={};function R(t,e){for(var n in e){var r=R.prefixedPropREs,i=!1;for(var o in r)if(0===n.indexOf(o)&&r[o].test(n)){i=!0;break}i||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0,R.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var F=R;k.default=F;var X={};function Y(t){return t instanceof v.default.Event||t instanceof v.default.Touch}function W(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function L(t,e){return e=e||{x:0,y:0},y.default.isOperaMobile&&Y(t)?(W("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):W("page",t,e),e}function B(t,e){return e=e||{},y.default.isOperaMobile&&Y(t)?W("screen",t,e):W("client",t,e),e}function N(t){var e=[];return o.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function V(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var i in e)e[i]+=r[i]}for(var o in e)e[o]/=t.length;return e}Object.defineProperty(X,"__esModule",{value:!0}),X.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},X.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},X.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},X.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},X.isNativePointer=Y,X.getXY=W,X.getPageXY=L,X.getClientXY=B,X.getPointerId=function(t){return o.default.number(t.pointerId)?t.pointerId:t.identifier},X.setCoords=function(t,e,n){var r=e.length>1?V(e):e[0];L(r,t.page),B(r,t.client),t.timeStamp=n},X.getTouchPair=N,X.pointerAverage=V,X.touchBBox=function(t){if(!t.length)return null;var e=N(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),i=Math.max(e[0].pageX,e[1].pageX),o=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:i,bottom:o,width:i-n,height:o-r}},X.touchDistance=function(t,e){var n=e+"X",r=e+"Y",i=N(t),o=i[0][n]-i[1][n],a=i[0][r]-i[1][r];return(0,C.default)(o,a)},X.touchAngle=function(t,e){var n=e+"X",r=e+"Y",i=N(t),o=i[1][n]-i[0][n],a=i[1][r]-i[0][r];return 180*Math.atan2(a,o)/Math.PI},X.getPointerType=function(t){return o.default.string(t.pointerType)?t.pointerType:o.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type)||t instanceof v.default.Touch?"touch":"mouse"},X.getEventTargets=function(t){var e=o.default.func(t.composedPath)?t.composedPath():t.path;return[_.getActualElement(e?e[0]:t.target),_.getActualElement(t.currentTarget)]},X.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},X.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(X,"pointerExtend",{enumerable:!0,get:function(){return k.default}});var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.BaseEvent=void 0;var U=function(){function t(t){this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=t}var e=t.prototype;return e.preventDefault=function(){},e.stopPropagation=function(){this.propagationStopped=!0},e.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},t}();q.BaseEvent=U,Object.defineProperty(U.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var G={};Object.defineProperty(G,"__esModule",{value:!0}),G.find=G.findIndex=G.from=G.merge=G.remove=G.contains=void 0,G.contains=function(t,e){return-1!==t.indexOf(e)},G.remove=function(t,e){return t.splice(t.indexOf(e),1)};var H=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t};G.merge=H,G.from=function(t){return H([],t)};var $=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};G.findIndex=$,G.find=function(t,e){return t[$(t,e)]};var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.DropEvent=void 0;var Z=function(t){var e,n;function r(e,n,r){var i;(i=t.call(this,n._interaction)||this).target=void 0,i.dropzone=void 0,i.dragEvent=void 0,i.relatedTarget=void 0,i.draggable=void 0,i.timeStamp=void 0,i.propagationStopped=!1,i.immediatePropagationStopped=!1;var o="dragleave"===r?e.prev:e.cur,a=o.element,s=o.dropzone;return i.type=r,i.target=a,i.currentTarget=a,i.dropzone=s,i.dragEvent=n,i.relatedTarget=n.target,i.draggable=n.interactable,i.timeStamp=n.timeStamp,i}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.reject=function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,i=G.findIndex(n,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(i,1);var o=new r(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new r(e,this.dragEvent,"dragleave"))},i.preventDefault=function(){},i.stopPropagation=function(){this.propagationStopped=!0},i.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},r}(q.BaseEvent);K.DropEvent=Z;var J={};function Q(t,e){for(var n=0;n<t.slice().length;n++){var r=t.slice()[n],i=r.dropzone,o=r.element;e.dropzone=i,e.target=o,i.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function tt(t,e){for(var n=function(t,e){for(var n=t.interactables,r=[],i=0;i<n.list.length;i++){var a=n.list[i];if(a.options.drop.enabled){var s=a.options.drop.accept;if(!(o.default.element(s)&&s!==e||o.default.string(s)&&!_.matchesSelector(e,s)||o.default.func(s)&&!s({dropzone:a,draggableElement:e})))for(var l=o.default.string(a.target)?a._context.querySelectorAll(a.target):o.default.array(a.target)?a.target:[a.target],c=0;c<l.length;c++){var u=l[c];u!==e&&r.push({dropzone:a,element:u})}}}return r}(t,e),r=0;r<n.length;r++){var i=n[r];i.rect=i.dropzone.getRect(i.element)}return n}function et(t,e,n){for(var r=t.dropState,i=t.interactable,o=t.element,a=[],s=0;s<r.activeDrops.length;s++){var l=r.activeDrops[s],c=l.dropzone,u=l.element,d=l.rect;a.push(c.dropCheck(e,n,i,o,u,d)?u:null)}var f=_.indexOfDeepestElement(a);return r.activeDrops[f]||null}function nt(t,e,n){var r=t.dropState,i={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(i.activate=new K.DropEvent(r,n,"dropactivate"),i.activate.target=null,i.activate.dropzone=null),"dragend"===n.type&&(i.deactivate=new K.DropEvent(r,n,"dropdeactivate"),i.deactivate.target=null,i.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(i.leave=new K.DropEvent(r,n,"dragleave"),n.dragLeave=i.leave.target=r.prev.element,n.prevDropzone=i.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(i.enter=new K.DropEvent(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(i.drop=new K.DropEvent(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(i.move=new K.DropEvent(r,n,"dropmove"),i.move.dragmove=n,n.dropzone=r.cur.dropzone)),i}function rt(t,e){var n=t.dropState,r=n.activeDrops,i=n.cur,o=n.prev;e.leave&&o.dropzone.fire(e.leave),e.enter&&i.dropzone.fire(e.enter),e.move&&i.dropzone.fire(e.move),e.drop&&i.dropzone.fire(e.drop),e.deactivate&&Q(r,e.deactivate),n.prev.dropzone=i.dropzone,n.prev.element=i.element}function it(t,e){var n=t.interaction,r=t.iEvent,i=t.event;if("dragmove"===r.type||"dragend"===r.type){var o=n.dropState;e.dynamicDrop&&(o.activeDrops=tt(e,n.element));var a=r,s=et(n,a,i);o.rejected=o.rejected&&!!s&&s.dropzone===o.cur.dropzone&&s.element===o.cur.element,o.cur.dropzone=s&&s.dropzone,o.cur.element=s&&s.element,o.events=nt(n,0,a)}}Object.defineProperty(J,"__esModule",{value:!0}),J.default=void 0;var ot={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,i=t.defaults;t.usePlugin(c.default),r.prototype.dropzone=function(t){return function(t,e){if(o.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,z.default)(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag"+e:/^(activate|deactivate|move)/.test(e)?"drop"+e:e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(r),t.options.drop.listeners=r}return o.default.func(e.ondrop)&&t.on("drop",e.ondrop),o.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),o.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),o.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),o.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),o.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:o.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}return o.default.bool(e)?(t.options.drop.enabled=e,t):t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,i,a){return function(t,e,n,r,i,a,s){var l=!1;if(!(s=s||t.getRect(a)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,l,t,a,r,i);var c=t.options.drop.overlap;if("pointer"===c){var u=(0,j.default)(r,i,"drag"),d=X.getPageXY(e);d.x+=u.x,d.y+=u.y;var f=d.x>s.left&&d.x<s.right,p=d.y>s.top&&d.y<s.bottom;l=f&&p}var v=r.getRect(i);if(v&&"center"===c){var h=v.left+v.width/2,g=v.top+v.height/2;l=h>=s.left&&h<=s.right&&g>=s.top&&g<=s.bottom}v&&o.default.number(c)&&(l=Math.max(0,Math.min(s.right,v.right)-Math.max(s.left,v.left))*Math.max(0,Math.min(s.bottom,v.bottom)-Math.max(s.top,v.top))/(v.width*v.height)>=c);return t.options.drop.checker&&(l=t.options.drop.checker(e,n,l,t,a,r,i)),l}(this,t,e,n,r,i,a)},n.dynamicDrop=function(e){return o.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,T.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,i.actions.drop=ot.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var i=n.dropState;i.activeDrops=null,i.events=null,i.activeDrops=tt(e,n.element),i.events=nt(n,0,r),i.events.activate&&(Q(i.activeDrops,i.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":it,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(rt(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:action-end":function(t,e){if("drag"===t.interaction.prepared.name){var n=t.interaction,r=t.iEvent;it(t,e),rt(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r})}},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:tt,getDrop:et,getDropEvents:nt,fireDropEvents:rt,defaults:{enabled:!1,accept:null,overlap:"pointer"}},at=ot;J.default=at;var st={};function lt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var i=e.pointers.map((function(t){return t.pointer})),a="start"===r,s="end"===r,l=e.interactable.options.deltaSource;if(n.touches=[i[0],i[1]],a)n.distance=X.touchDistance(i,l),n.box=X.touchBBox(i),n.scale=1,n.ds=0,n.angle=X.touchAngle(i,l),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var c=e.prevEvent;n.distance=c.distance,n.box=c.box,n.scale=c.scale,n.ds=0,n.angle=c.angle,n.da=0}else n.distance=X.touchDistance(i,l),n.box=X.touchBBox(i),n.scale=n.distance/e.gesture.startDistance,n.angle=X.touchAngle(i,l),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,o.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(st,"__esModule",{value:!0}),st.default=void 0;var ct={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return o.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):o.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=ct,e.methodDict.gesture="gesturable",r.actions.gesture=ct.defaults},listeners:{"interactions:action-start":lt,"interactions:action-move":lt,"interactions:action-end":lt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},ut=ct;st.default=ut;var dt={};function ft(t,e,n,r,i,a,s){if(!e)return!1;if(!0===e){var l=o.default.number(a.width)?a.width:a.right-a.left,c=o.default.number(a.height)?a.height:a.bottom-a.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?l:c)/2)),l<0&&("left"===t?t="right":"right"===t&&(t="left")),c<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(l>=0?a.left:a.right)+s;if("top"===t)return n.y<(c>=0?a.top:a.bottom)+s;if("right"===t)return n.x>(l>=0?a.right:a.left)-s;if("bottom"===t)return n.y>(c>=0?a.bottom:a.top)-s}return!!o.default.element(r)&&(o.default.element(e)?e===r:_.matchesUpTo(r,e,i))}function pt(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}Object.defineProperty(dt,"__esModule",{value:!0}),dt.default=void 0;var vt={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,i=t.defaults;vt.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),vt.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){return o.default.object(e)?(t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),o.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),o.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:o.default.bool(e.square)&&(t.options.resize.square=e.square),t):o.default.bool(e)?(t.options.resize.enabled=e,t):t.options.resize}(this,e,t)},e.map.resize=vt,e.methodDict.resize="resizable",i.actions.resize=vt.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,i=n.rect;n._rects={start:(0,T.default)({},i),corrected:(0,T.default)({},i),previous:(0,T.default)({},i),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),pt(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,i=n.interactable.options.resize.invert,o="reposition"===i||"negate"===i,a=n.rect,s=n._rects,l=s.start,c=s.corrected,u=s.delta,d=s.previous;if((0,T.default)(d,c),o){if((0,T.default)(c,a),"reposition"===i){if(c.top>c.bottom){var f=c.top;c.top=c.bottom,c.bottom=f}if(c.left>c.right){var p=c.left;c.left=c.right,c.right=p}}}else c.top=Math.min(a.top,l.bottom),c.bottom=Math.max(a.bottom,l.top),c.left=Math.min(a.left,l.right),c.right=Math.max(a.right,l.left);for(var v in c.width=c.right-c.left,c.height=c.bottom-c.top,c)u[v]=c[v]-d[v];r.edges=n.prepared.edges,r.rect=c,r.deltaRect=u}}(t),pt(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,i=t.rect,a=t.buttons;if(i){var s=(0,T.default)({},e.coords.cur.page),l=n.options.resize;if(l&&l.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(a&l.mouseButtons))){if(o.default.object(l.edges)){var c={left:!1,right:!1,top:!1,bottom:!1};for(var u in c)c[u]=ft(u,l.edges[u],s,e._latestPointer.eventTarget,r,i,l.margin||vt.defaultMargin);c.left=c.left&&!c.right,c.top=c.top&&!c.bottom,(c.left||c.right||c.top||c.bottom)&&(t.action={name:"resize",edges:c})}else{var d="y"!==l.axis&&s.x>i.right-vt.defaultMargin,f="x"!==l.axis&&s.y>i.bottom-vt.defaultMargin;(d||f)&&(t.action={name:"resize",axes:(d?"x":"")+(f?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,i=vt.cursors,o=null;if(n)o=i[r+n];else if(e){for(var a="",s=["top","bottom","left","right"],l=0;l<s.length;l++){var c=s[l];e[c]&&(a+=c)}o=i[a]}return o},defaultMargin:null},ht=vt;dt.default=ht;var gt={};Object.defineProperty(gt,"__esModule",{value:!0}),gt.default=void 0;var mt={id:"actions",install:function(t){t.usePlugin(st.default),t.usePlugin(dt.default),t.usePlugin(c.default),t.usePlugin(J.default)}};gt.default=mt;var yt={};Object.defineProperty(yt,"__esModule",{value:!0}),yt.default=void 0,yt.default={};var bt={};Object.defineProperty(bt,"__esModule",{value:!0}),bt.default=void 0;var xt,_t,wt=0,Pt={request:function(t){return xt(t)},cancel:function(t){return _t(t)},init:function(t){if(xt=t.requestAnimationFrame,_t=t.cancelAnimationFrame,!xt)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];xt=t[r+"RequestAnimationFrame"],_t=t[r+"CancelAnimationFrame"]||t[r+"CancelRequestAnimationFrame"]}xt=xt&&xt.bind(t),_t=_t&&_t.bind(t),xt||(xt=function(e){var n=Date.now(),r=Math.max(0,16-(n-wt)),i=t.setTimeout((function(){e(n+r)}),r);return wt=n+r,i},_t=function(t){return clearTimeout(t)})}};bt.default=Pt;var Et={};Object.defineProperty(Et,"__esModule",{value:!0}),Et.getContainer=Mt,Et.getScroll=Ot,Et.getScrollSize=function(t){return o.default.window(t)&&(t=window.document.body),{x:t.scrollWidth,y:t.scrollHeight}},Et.getScrollSizeDelta=function(t,e){var n=t.interaction,r=t.element,i=n&&n.interactable.options[n.prepared.name].autoScroll;if(!i||!i.enabled)return e(),{x:0,y:0};var o=Mt(i.container,n.interactable,r),a=Ot(o);e();var s=Ot(o);return{x:s.x-a.x,y:s.y-a.y}},Et.default=void 0;var St={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){St.isScrolling=!0,bt.default.cancel(St.i),t.autoScroll=St,St.interaction=t,St.prevTime=St.now(),St.i=bt.default.request(St.scroll)},stop:function(){St.isScrolling=!1,St.interaction&&(St.interaction.autoScroll=null),bt.default.cancel(St.i)},scroll:function(){var t=St.interaction,e=t.interactable,n=t.element,r=t.prepared.name,i=e.options[r].autoScroll,a=Mt(i.container,e,n),s=St.now(),l=(s-St.prevTime)/1e3,c=i.speed*l;if(c>=1){var u={x:St.x*c,y:St.y*c};if(u.x||u.y){var d=Ot(a);o.default.window(a)?a.scrollBy(u.x,u.y):a&&(a.scrollLeft+=u.x,a.scrollTop+=u.y);var f=Ot(a),p={x:f.x-d.x,y:f.y-d.y};(p.x||p.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:p,interaction:t,container:a})}St.prevTime=s}St.isScrolling&&(bt.default.cancel(St.i),St.i=bt.default.request(St.scroll))},check:function(t,e){var n;return null==(n=t.options[e].autoScroll)?void 0:n.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&St.check(e.interactable,e.prepared.name))if(e.simulation)St.x=St.y=0;else{var r,i,a,s,l=e.interactable,c=e.element,u=e.prepared.name,d=l.options[u].autoScroll,f=Mt(d.container,l,c);if(o.default.window(f))s=n.clientX<St.margin,r=n.clientY<St.margin,i=n.clientX>f.innerWidth-St.margin,a=n.clientY>f.innerHeight-St.margin;else{var p=_.getElementClientRect(f);s=n.clientX<p.left+St.margin,r=n.clientY<p.top+St.margin,i=n.clientX>p.right-St.margin,a=n.clientY>p.bottom-St.margin}St.x=i?1:s?-1:0,St.y=a?1:r?-1:0,St.isScrolling||(St.margin=d.margin,St.speed=d.speed,St.start(e))}}};function Mt(t,n,r){return(o.default.string(t)?(0,I.getStringOptionResult)(t,n,r):t)||(0,e.getWindow)(r)}function Ot(t){return o.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Tt={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=St,St.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=St.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,St.stop(),St.interaction&&(St.interaction=null)},"interactions:stop":St.stop,"interactions:action-move":function(t){return St.onInteractionMove(t)}}};Et.default=Tt;var It={};Object.defineProperty(It,"__esModule",{value:!0}),It.warnOnce=function(t,n){var r=!1;return function(){return r||(e.window.console.warn(n),r=!0),t.apply(this,arguments)}},It.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t};var Dt={};function jt(t){return o.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function zt(t){return o.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Dt,"__esModule",{value:!0}),Dt.default=void 0;var At={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,i){var o=function(t,e,n,r,i){var o=t.getRect(r),a={action:null,interactable:t,interaction:n,element:r,rect:o,buttons:e.buttons||{0:1,1:4,3:8,4:16}[e.button]};return i.fire("auto-start:check",a),a.action}(this,n,r,i,t);return this.options.actionChecker?this.options.actionChecker(e,n,o,this,i,r):o},e.prototype.ignoreFrom=(0,It.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,It.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=zt,e.prototype.styleCursor=jt}};Dt.default=At;var Ct={};function kt(t,e,n,r,i){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&Yt(e,n,t,i)?t:null}function Rt(t,e,n,r,i,o,a){for(var s=0,l=r.length;s<l;s++){var c=r[s],u=i[s],d=c.getAction(e,n,t,u);if(d){var f=kt(d,c,u,o,a);if(f)return{action:f,interactable:c,element:u}}}return{action:null,interactable:null,element:null}}function Ft(t,e,n,r,i){var a=[],s=[],l=r;function c(t){a.push(t),s.push(l)}for(;o.default.element(l);){a=[],s=[],i.interactables.forEachMatch(l,c);var u=Rt(t,e,n,a,s,r,i);if(u.action&&!u.interactable.options[u.action.name].manualStart)return u;l=_.parentNode(l)}return{action:null,interactable:null,element:null}}function Xt(t,e,n){var r=e.action,i=e.interactable,o=e.element;r=r||{name:null},t.interactable=i,t.element=o,(0,It.copyAction)(t.prepared,r),t.rect=i&&r.name?i.getRect(o):null,Bt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Yt(t,e,n,r){var i=t.options,o=i[n.name].max,a=i[n.name].maxPerElement,s=r.autoStart.maxInteractions,l=0,c=0,u=0;if(!(o&&a&&s))return!1;for(var d=0;d<r.interactions.list.length;d++){var f=r.interactions.list[d],p=f.prepared.name;if(f.interacting()){if(++l>=s)return!1;if(f.interactable===t){if((c+=p===n.name?1:0)>=o)return!1;if(f.element===e&&(u++,p===n.name&&u>=a))return!1}}}return s>0}function Wt(t,e){return o.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Lt(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Bt(t,e){var n=t.interactable,r=t.element,i=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var a="";if(i.name){var s=n.options[i.name].cursorChecker;a=o.default.func(s)?s(i,n,r,t._interacting):e.actions.map[i.name].getCursor(i)}Lt(t.element,a||"",e)}else e.autoStart.cursorElement&&Lt(e.autoStart.cursorElement,"",e)}Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.default=void 0;var Nt={id:"auto-start/base",before:["actions"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Dt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,T.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Wt(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Yt,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;n.interacting()||Xt(n,Ft(n,r,i,o,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||Xt(n,Ft(n,r,i,o,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,i=n.prepared.name;i&&r&&(r.options[i].manualStart||!Yt(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),Bt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&Lt(n.element,"",e)}},maxInteractions:Wt,withinInteractionLimit:Yt,validateAction:kt};Ct.default=Nt;var Vt={};Object.defineProperty(Vt,"__esModule",{value:!0}),Vt.default=void 0;var qt={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,i=t.dx,a=t.dy;if("drag"===n.prepared.name){var s=Math.abs(i),l=Math.abs(a),c=n.interactable.options.drag,u=c.startAxis,d=s>l?"x":s<l?"y":"xy";if(n.prepared.axis="start"===c.lockAxis?d[0]:c.lockAxis,"xy"!==d&&"xy"!==u&&u!==d){n.prepared.name=null;for(var f=r,p=function(t){if(t!==n.interactable){var i=n.interactable.options.drag;if(!i.manualStart&&t.testIgnoreAllow(i,f,r)){var o=t.getAction(n.downPointer,n.downEvent,n,f);if(o&&"drag"===o.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(d,t)&&Ct.default.validateAction(o,t,f,r,e))return t}}};o.default.element(f);){var v=e.interactables.forEachMatch(f,p);if(v){n.prepared.name="drag",n.interactable=v,n.element=f;break}f=(0,_.parentNode)(f)}}}}}};Vt.default=qt;var Ut={};function Gt(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var Ht={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(Ct.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=Gt(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.autoStartHoldTimer&&e.pointerWasMoved&&!n&&(clearTimeout(e.autoStartHoldTimer),e.autoStartHoldTimer=null)},"autoStart:before-start":function(t){var e=t.interaction;Gt(e)>0&&(e.prepared.name=null)}},getHoldDuration:Gt};Ut.default=Ht;var $t={};Object.defineProperty($t,"__esModule",{value:!0}),$t.default=void 0;var Kt={id:"auto-start",install:function(t){t.usePlugin(Ct.default),t.usePlugin(Ut.default),t.usePlugin(Vt.default)}};$t.default=Kt;var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.default=void 0,Zt.default={};var Jt={};function Qt(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):o.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function te(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function ee(t){var n=t.Interactable;n.prototype.preventDefault=Qt,n.prototype.checkAndPreventDefault=function(n){return function(t,n,r){var i=t.options.preventDefault;if("never"!==i)if("always"!==i){if(n.events.supportsPassive&&/^touch(start|move)$/.test(r.type)){var a=(0,e.getWindow)(r.target).document,s=n.getDocOptions(a);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(r.type)||o.default.element(r.target)&&(0,_.matchesSelector)(r.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||r.preventDefault()}else r.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var r=t.interactions.list[n];if(r.element&&(r.element===e.target||(0,_.nodeContains)(r.element,e.target)))return void r.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(Jt,"__esModule",{value:!0}),Jt.install=ee,Jt.default=void 0;var ne={id:"core/interactablePreventDefault",install:ee,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:"+e]=te,t}),{})};Jt.default=ne;var re,ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(re||(re={}));var oe={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"},ae=[{name:re.touchAction,perform:function(t){return!function(t,e,n){for(var r=t;o.default.element(r);){if(se(r,"touchAction",n))return!0;r=(0,_.parentNode)(r)}return!1}(t.element,0,/pan-|pinch|none/)},getInfo:function(t){return[t.element,oe.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:re.boxSizing,perform:function(t){var e=t.element;return"resize"===t.prepared.name&&e instanceof v.default.HTMLElement&&!se(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(t){return[t.element,oe.boxSizing]}},{name:re.noListeners,perform:function(t){var e=t.prepared.name;return!(t.interactable.events.types[e+"move"]||[]).length},getInfo:function(t){return[t.prepared.name,t.interactable]},text:"There are no listeners set for this action"}];function se(t,n,r){var i=t.style[n]||e.window.getComputedStyle(t)[n];return r.test((i||"").toString())}var le={id:"dev-tools",install:function(t,e){var n=(void 0===e?{}:e).logger,r=t.Interactable,i=t.defaults;t.logger=n||console,i.base.devTools={ignore:{}},r.prototype.devTools=function(t){return t?((0,T.default)(this.options.devTools,t),this):this.options.devTools}},listeners:{"interactions:action-start":function(t,e){for(var n=t.interaction,r=0;r<ae.length;r++){var i,o=ae[r],a=n.interactable&&n.interactable.options;a&&a.devTools&&a.devTools.ignore[o.name]||!o.perform(n)||(i=e.logger).warn.apply(i,["[interact.js] "+o.text].concat(o.getInfo(n)))}}},checks:ae,CheckName:re,links:oe,prefix:"[interact.js] "};ie.default=le;var ce={};Object.defineProperty(ce,"__esModule",{value:!0}),ce.default=void 0,ce.default={};var ue={};Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=function t(e){var n={};for(var r in e){var i=e[r];o.default.plainObject(i)?n[r]=t(i):o.default.array(i)?n[r]=G.from(i):n[r]=i}return n};var de={};Object.defineProperty(de,"__esModule",{value:!0}),de.getRectOffset=ve,de.default=void 0;var fe=function(){function t(t){this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=null,this.result=null,this.endResult=null,this.edges=void 0,this.interaction=void 0,this.interaction=t,this.result=pe()}var e=t.prototype;return e.start=function(t,e){var n=t.phase,r=this.interaction,i=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(r);this.prepareStates(i),this.edges=(0,T.default)({},r.edges),this.startOffset=ve(r.rect,e),this.startDelta={x:0,y:0};var o={phase:n,pageCoords:e,preEnd:!1};return this.result=pe(),this.startAll(o),this.result=this.setAll(o)},e.fillArg=function(t){var e=this.interaction;t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset},e.startAll=function(t){this.fillArg(t);for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}},e.setAll=function(t){this.fillArg(t);var e=t.phase,n=t.preEnd,r=t.skipModifiers,i=t.rect;t.coords=(0,T.default)({},t.pageCoords),t.rect=(0,T.default)({},i);for(var o=r?this.states.slice(r):this.states,a=pe(t.coords,t.rect),s=0;s<o.length;s++){var l=o[s],c=l.options,u=(0,T.default)({},t.coords),d=null;l.methods.set&&this.shouldDo(c,n,e)&&(t.state=l,d=l.methods.set(t),I.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-u.x,y:t.coords.y-u.y})),a.eventProps.push(d)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-i.left,a.rectDelta.right=t.rect.right-i.right,a.rectDelta.top=t.rect.top-i.top,a.rectDelta.bottom=t.rect.bottom-i.bottom;var f=this.result.coords,p=this.result.rect;if(f&&p){var v=a.rect.left!==p.left||a.rect.right!==p.right||a.rect.top!==p.top||a.rect.bottom!==p.bottom;a.changed=v||f.x!==a.coords.x||f.y!==a.coords.y}return a},e.applyToInteraction=function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,i=e.coords.start,o=this.result,a=this.startDelta,s=o.delta;"start"===n&&(0,T.default)(this.startDelta,o.delta);for(var l=[[i,a],[r,s]],c=0;c<l.length;c++){var u=l[c],d=u[0],f=u[1];d.page.x+=f.x,d.page.y+=f.y,d.client.x+=f.x,d.client.y+=f.y}var p=this.result.rectDelta,v=t.rect||e.rect;v.left+=p.left,v.right+=p.right,v.top+=p.top,v.bottom+=p.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top},e.setAndApply=function(t){var e=this.interaction,n=t.phase,r=t.preEnd,i=t.skipModifiers,o=this.setAll({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page});if(this.result=o,!o.changed&&(!i||i<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};o.coords.x+=s.x,o.coords.y+=s.y,o.delta.x+=s.x,o.delta.y+=s.y}this.applyToInteraction(t)},e.beforeEnd=function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var i=!1,o=0;o<r.length;o++){var a=r[o];t.state=a;var s=a.options,l=a.methods,c=l.beforeEnd&&l.beforeEnd(t);if(c)return this.endResult=c,!1;i=i||!i&&this.shouldDo(s,!0,t.phase,!0)}i&&e.move({event:n,preEnd:!0})}},e.stop=function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,T.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0;r<this.states.length;r++){var i=this.states[r];n.state=i,i.methods.stop&&i.methods.stop(n)}this.states=null,this.endResult=null}},e.prepareStates=function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,i=n.methods,o=n.name;this.states.push({options:r,methods:i,index:e,name:o})}return this.states},e.restoreInteractionCoords=function(t){var e=t.interaction,n=e.coords,r=e.rect,i=e.modification;if(i.result){for(var o=i.startDelta,a=i.result,s=a.delta,l=a.rectDelta,c=[[n.start,o],[n.cur,s]],u=0;u<c.length;u++){var d=c[u],f=d[0],p=d[1];f.page.x-=p.x,f.page.y-=p.y,f.client.x-=p.x,f.client.y-=p.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}},e.shouldDo=function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)},e.copyFrom=function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,ue.default)(t)})),this.result=pe((0,T.default)({},t.result.coords),(0,T.default)({},t.result.rect))},e.destroy=function(){for(var t in this)this[t]=null},t}();function pe(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function ve(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}de.default=fe;var he={};function ge(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(he,"__esModule",{value:!0}),he.makeModifier=function(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},i=function(t){var i=t||{};for(var o in i.enabled=!1!==i.enabled,n)o in i||(i[o]=n[o]);var a={options:i,methods:r,name:e,enable:function(){return i.enabled=!0,a},disable:function(){return i.enabled=!1,a}};return a};return e&&"string"==typeof e&&(i._defaults=n,i._methods=r),i},he.addEventModifiers=ge,he.default=void 0;var me={id:"modifiers/base",before:["actions"],install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new de.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":ge,"interactions:action-move":ge,"interactions:action-end":ge,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}}};he.default=me;var ye={};Object.defineProperty(ye,"__esModule",{value:!0}),ye.defaults=void 0,ye.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var be={};Object.defineProperty(be,"__esModule",{value:!0}),be.InteractEvent=void 0;var xe=function(t){var e,n;function r(e,n,r,i,o,a,s){var l;(l=t.call(this,e)||this).target=void 0,l.currentTarget=void 0,l.relatedTarget=null,l.screenX=void 0,l.screenY=void 0,l.button=void 0,l.buttons=void 0,l.ctrlKey=void 0,l.shiftKey=void 0,l.altKey=void 0,l.metaKey=void 0,l.page=void 0,l.client=void 0,l.delta=void 0,l.rect=void 0,l.x0=void 0,l.y0=void 0,l.t0=void 0,l.dt=void 0,l.duration=void 0,l.clientX0=void 0,l.clientY0=void 0,l.velocity=void 0,l.speed=void 0,l.swipe=void 0,l.timeStamp=void 0,l.dragEnter=void 0,l.dragLeave=void 0,l.axes=void 0,l.preEnd=void 0,o=o||e.element;var c=e.interactable,u=(c&&c.options||ye.defaults).deltaSource,d=(0,j.default)(c,o,r),f="start"===i,p="end"===i,v=f?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(l):e.prevEvent,h=f?e.coords.start:p?{page:v.page,client:v.client,timeStamp:e.coords.cur.timeStamp}:e.coords.cur;return l.page=(0,T.default)({},h.page),l.client=(0,T.default)({},h.client),l.rect=(0,T.default)({},e.rect),l.timeStamp=h.timeStamp,p||(l.page.x-=d.x,l.page.y-=d.y,l.client.x-=d.x,l.client.y-=d.y),l.ctrlKey=n.ctrlKey,l.altKey=n.altKey,l.shiftKey=n.shiftKey,l.metaKey=n.metaKey,l.button=n.button,l.buttons=n.buttons,l.target=o,l.currentTarget=o,l.preEnd=a,l.type=s||r+(i||""),l.interactable=c,l.t0=f?e.pointers[e.pointers.length-1].downTime:v.t0,l.x0=e.coords.start.page.x-d.x,l.y0=e.coords.start.page.y-d.y,l.clientX0=e.coords.start.client.x-d.x,l.clientY0=e.coords.start.client.y-d.y,l.delta=f||p?{x:0,y:0}:{x:l[u].x-v[u].x,y:l[u].y-v[u].y},l.dt=e.coords.delta.timeStamp,l.duration=l.timeStamp-l.t0,l.velocity=(0,T.default)({},e.coords.velocity[u]),l.speed=(0,C.default)(l.velocity.x,l.velocity.y),l.swipe=p||"inertiastart"===i?l.getSwipe():null,l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.getSwipe=function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}},i.preventDefault=function(){},i.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},i.stopPropagation=function(){this.propagationStopped=!0},r}(q.BaseEvent);be.InteractEvent=xe,Object.defineProperties(xe.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var _e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.PointerInfo=void 0,_e.PointerInfo=function(t,e,n,r,i){this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=t,this.pointer=e,this.event=n,this.downTime=r,this.downTarget=i};var we,Pe,Ee={};function Se(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Ee,"__esModule",{value:!0}),Object.defineProperty(Ee,"PointerInfo",{enumerable:!0,get:function(){return _e.PointerInfo}}),Ee.default=Ee.Interaction=Ee._ProxyMethods=Ee._ProxyValues=void 0,Ee._ProxyValues=we,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(we||(Ee._ProxyValues=we={})),Ee._ProxyMethods=Pe,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(Pe||(Ee._ProxyMethods=Pe={}));var Me=0,Oe=function(){var t,e;function n(t){var e=this,n=t.pointerType,r=t.scopeFire;this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=(0,It.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:X.newCoords(),prev:X.newCoords(),cur:X.newCoords(),delta:X.newCoords(),velocity:X.newCoords()},this._id=Me++,this._scopeFire=r,this.pointerType=n;var i=this;this._proxy={};var o=function(t){Object.defineProperty(e._proxy,t,{get:function(){return i[t]}})};for(var a in we)o(a);var s=function(t){Object.defineProperty(e._proxy,t,{value:function(){return i[t].apply(i,arguments)}})};for(var l in Pe)s(l);this._scopeFire("interactions:new",{interaction:this})}t=n,(e=[{key:"pointerMoveTolerance",get:function(){return 1}}])&&Se(t.prototype,e);var r=n.prototype;return r.pointerDown=function(t,e,n){var r=this.updatePointer(t,e,n,!0),i=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:i,type:"down",interaction:this})},r.start=function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,It.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,T.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)},r.pointerMove=function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,i,o=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,i=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,C.default)(r,i)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:r,dy:i,duplicate:o,interaction:this};o||X.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),o||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&X.copyCoords(this.coords.prev,this.coords.cur))},r.move=function(t){t&&t.event||X.setZeroCoords(this.coords.delta),(t=(0,T.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)},r.pointerUp=function(t,e,n,r){var i=this.getPointerIndex(t);-1===i&&(i=this.updatePointer(t,e,n,!1));var o=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:"+o,{pointer:t,pointerIndex:i,pointerInfo:this.pointers[i],event:e,eventTarget:n,type:o,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)},r.documentBlur=function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})},r.end=function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()},r.currentAction=function(){return this._interacting?this.prepared.name:null},r.interacting=function(){return this._interacting},r.stop=function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null},r.getPointerIndex=function(t){var e=X.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:G.findIndex(this.pointers,(function(t){return t.id===e}))},r.getPointerInfo=function(t){return this.pointers[this.getPointerIndex(t)]},r.updatePointer=function(t,e,n,r){var i=X.getPointerId(t),o=this.getPointerIndex(t),a=this.pointers[o];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new _e.PointerInfo(i,t,e,null,null),o=this.pointers.length,this.pointers.push(a)),X.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),X.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),r&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,X.pointerExtend(this.downPointer,t),this.interacting()||(X.copyCoords(this.coords.start,this.coords.cur),X.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:a,pointerIndex:o,interaction:this}),o},r.removePointer=function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1),this.pointerIsDown=!1}},r._updateLatestPointer=function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n},r.destroy=function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null},r._createPreparedEvent=function(t,e,n,r){return new be.InteractEvent(this,t,this.prepared.name,e,this.element,n,r)},r._fireEvent=function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)},r._doPhase=function(t){var e=t.event,n=t.phase,r=t.preEnd,i=t.type,o=this.rect;if(o&&"move"===n&&(I.addEdges(this.edges,o,this.coords.delta[this.interactable.options.deltaSource]),o.width=o.right-o.left,o.height=o.bottom-o.top),!1===this._scopeFire("interactions:before-action-"+n,t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,i);return this._scopeFire("interactions:action-"+n,t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-"+n,t),!0},r._now=function(){return Date.now()},n}();Ee.Interaction=Oe;var Te=Oe;Ee.default=Te;var Ie={};function De(t){t.pointerIsDown&&(Ce(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function je(t){ze(t.interaction)}function ze(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return Ce(t.coords.cur,e),Ce(t.coords.delta,e),I.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function Ae(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function Ce(t,e){var n=t.page,r=t.client,i=e.x,o=e.y;n.x+=i,n.y+=o,r.x+=i,r.y+=o}Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.addTotal=De,Ie.applyPending=ze,Ie.default=void 0,Ee._ProxyMethods.offsetBy="";var ke={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(t){t.Interaction.prototype.offsetBy=Ae},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return De(t.interaction)},"interactions:before-action-start":je,"interactions:before-action-move":je,"interactions:before-action-end":function(t){var e=t.interaction;if(ze(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};Ie.default=ke;var Re={};Object.defineProperty(Re,"__esModule",{value:!0}),Re.default=Re.InertiaState=void 0;var Fe=function(){function t(t){this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=null,this.modifierCount=0,this.modifierArg=null,this.startCoords=null,this.t0=0,this.v0=0,this.te=0,this.targetOffset=null,this.modifiedOffset=null,this.currentOffset=null,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=null,this.interaction=void 0,this.interaction=t}var e=t.prototype;return e.start=function(t){var e=this.interaction,n=Xe(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,i=(0,C.default)(r.x,r.y),o=this.modification||(this.modification=new de.default(e));if(o.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=i,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg={interaction:e,interactable:e.interactable,element:e.element,rect:e.rect,edges:e.edges,pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"},this.t0-e.coords.cur.timeStamp<50&&i>n.minSpeed&&i>n.endSpeed)this.startInertia();else{if(o.result=o.setAll(this.modifierArg),!o.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0},e.startInertia=function(){var t=this,e=this.interaction.coords.velocity.client,n=Xe(this.interaction),r=n.resistance,i=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-i)/r,y:(e.y-i)/r},this.te=i,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var o=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},o.result=o.setAll(a),o.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+o.result.delta.x,y:this.targetOffset.y+o.result.delta.y}),this.onNextFrame((function(){return t.inertiaTick()}))},e.startSmoothEnd=function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return t.smoothEndTick()}))},e.onNextFrame=function(t){var e=this;this.timeout=bt.default.request((function(){e.active&&t()}))},e.inertiaTick=function(){var t,e,n,r,i,o=this,a=this.interaction,s=Xe(a).resistance,l=(a._now()-this.t0)/1e3;if(l<this.te){var c,u=1-(Math.exp(-s*l)-this.lambda_v0)/this.one_ve_v0;this.isModified?(0,0,t=this.targetOffset.x,e=this.targetOffset.y,n=this.modifiedOffset.x,r=this.modifiedOffset.y,c={x:Ye(i=u,0,t,n),y:Ye(i,0,e,r)}):c={x:this.targetOffset.x*u,y:this.targetOffset.y*u};var d={x:c.x-this.currentOffset.x,y:c.y-this.currentOffset.y};this.currentOffset.x+=d.x,this.currentOffset.y+=d.y,a.offsetBy(d),a.move(),this.onNextFrame((function(){return o.inertiaTick()}))}else a.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()},e.smoothEndTick=function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=Xe(e).smoothEndDuration;if(n<r){var i={x:We(n,0,this.targetOffset.x,r),y:We(n,0,this.targetOffset.y,r)},o={x:i.x-this.currentOffset.x,y:i.y-this.currentOffset.y};this.currentOffset.x+=o.x,this.currentOffset.y+=o.y,e.offsetBy(o),e.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()},e.resume=function(t){var e=t.pointer,n=t.event,r=t.eventTarget,i=this.interaction;i.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),i.updatePointer(e,n,r,!0),i._doPhase({interaction:i,event:n,phase:"resume"}),(0,X.copyCoords)(i.coords.prev,i.coords.cur),this.stop()},e.end=function(){this.interaction.move(),this.interaction.end(),this.stop()},e.stop=function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,bt.default.cancel(this.timeout)},t}();function Xe(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function Ye(t,e,n,r){var i=1-t;return i*i*e+2*i*t*n+t*t*r}function We(t,e,n,r){return-n*(t/=r)*(t-2)+e}Re.InertiaState=Fe;var Le={id:"inertia",before:["modifiers","actions"],install:function(t){var e=t.defaults;t.usePlugin(Ie.default),t.usePlugin(he.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new Fe(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var i=n;o.default.element(i);){if(i===e.element){r.resume(t);break}i=_.parentNode(i)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":he.addEventModifiers,"interactions:action-inertiastart":he.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};Re.default=Le;var Be={};function Ne(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}Object.defineProperty(Be,"__esModule",{value:!0}),Be.Eventable=void 0;var Ve=function(){function t(t){this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=(0,T.default)({},t||{})}var e=t.prototype;return e.fire=function(t){var e,n=this.global;(e=this.types[t.type])&&Ne(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&Ne(t,e)},e.on=function(t,e){var n=(0,z.default)(t,e);for(t in n)this.types[t]=G.merge(this.types[t]||[],n[t])},e.off=function(t,e){var n=(0,z.default)(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var i=0;i<n[t].length;i++){var o=n[t][i],a=r.indexOf(o);-1!==a&&r.splice(a,1)}}},e.getRect=function(t){return null},t}();Be.Eventable=Ve;var qe={};Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var Ue={};function Ge(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.Interactable=void 0;var He=function(){var t,n;function r(t,n,r,i){this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new Be.Eventable,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=n.actions,this.target=t,this._context=n.context||r,this._win=(0,e.getWindow)((0,_.trySelector)(t)?this._context:t),this._doc=this._win.document,this._scopeEvents=i,this.set(n)}t=r,(n=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}])&&Ge(t.prototype,n);var i=r.prototype;return i.setOnEvents=function(t,e){return o.default.func(e.onstart)&&this.on(t+"start",e.onstart),o.default.func(e.onmove)&&this.on(t+"move",e.onmove),o.default.func(e.onend)&&this.on(t+"end",e.onend),o.default.func(e.oninertiastart)&&this.on(t+"inertiastart",e.oninertiastart),this},i.updatePerActionListeners=function(t,e,n){(o.default.array(e)||o.default.object(e))&&this.off(t,e),(o.default.array(n)||o.default.object(n))&&this.on(t,n)},i.setPerAction=function(t,e){var n=this._defaults;for(var r in e){var i=r,a=this.options[t],s=e[i];"listeners"===i&&this.updatePerActionListeners(t,a.listeners,s),o.default.array(s)?a[i]=G.from(s):o.default.plainObject(s)?(a[i]=(0,T.default)(a[i]||{},(0,ue.default)(s)),o.default.object(n.perAction[i])&&"enabled"in n.perAction[i]&&(a[i].enabled=!1!==s.enabled)):o.default.bool(s)&&o.default.object(n.perAction[i])?a[i].enabled=s:a[i]=s}},i.getRect=function(t){return t=t||(o.default.element(this.target)?this.target:null),o.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,_.getElementRect)(t)},i.rectChecker=function(t){var e=this;return o.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,T.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect},i._backCompatOption=function(t,e){if((0,_.trySelector)(e)||o.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]},i.origin=function(t){return this._backCompatOption("origin",t)},i.deltaSource=function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource},i.context=function(){return this._context},i.inContext=function(t){return this._context===t.ownerDocument||(0,_.nodeContains)(this._context,t)},i.testIgnoreAllow=function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)},i.testAllow=function(t,e,n){return!t||!!o.default.element(n)&&(o.default.string(t)?(0,_.matchesUpTo)(n,t,e):!!o.default.element(t)&&(0,_.nodeContains)(t,n))},i.testIgnore=function(t,e,n){return!(!t||!o.default.element(n))&&(o.default.string(t)?(0,_.matchesUpTo)(n,t,e):!!o.default.element(t)&&(0,_.nodeContains)(t,n))},i.fire=function(t){return this.events.fire(t),this},i._onOff=function(t,e,n,r){o.default.object(e)&&!o.default.array(e)&&(r=n,n=null);var i="on"===t?"add":"remove",a=(0,z.default)(e,n);for(var s in a){"wheel"===s&&(s=y.default.wheelEvent);for(var l=0;l<a[s].length;l++){var c=a[s][l];(0,qe.default)(s,this._actions)?this.events[t](s,c):o.default.string(this.target)?this._scopeEvents[i+"Delegate"](this.target,this._context,s,c,r):this._scopeEvents[i](this.target,s,c,r)}}return this},i.on=function(t,e,n){return this._onOff("on",t,e,n)},i.off=function(t,e,n){return this._onOff("off",t,e,n)},i.set=function(t){var e=this._defaults;for(var n in o.default.object(t)||(t={}),this.options=(0,ue.default)(e.base),this._actions.methodDict){var r=n,i=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,T.default)((0,T.default)({},e.perAction),e.actions[r])),this[i](t[r])}for(var a in t)o.default.func(this[a])&&this[a](t[a]);return this},i.unset=function(){if(o.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],i=r.selector,a=r.context,s=r.listeners;i===this.target&&a===this._context&&e.splice(n,1);for(var l=s.length-1;l>=0;l--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[l][0],s[l][1])}else this._scopeEvents.remove(this.target,"all")},r}();Ue.Interactable=He;var $e={};Object.defineProperty($e,"__esModule",{value:!0}),$e.InteractableSet=void 0;var Ke=function(){function t(t){var e=this;this.list=[],this.selectorMap={},this.scope=void 0,this.scope=t,t.addListeners({"interactable:unset":function(t){var n=t.interactable,r=n.target,i=n._context,a=o.default.string(r)?e.selectorMap[r]:r[e.scope.id],s=G.findIndex(a,(function(t){return t.context===i}));a[s]&&(a[s].context=null,a[s].interactable=null),a.splice(s,1)}})}var e=t.prototype;return e.new=function(t,e){e=(0,T.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),o.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(r)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n},e.get=function(t,e){var n=e&&e.context||this.scope.document,r=o.default.string(t),i=r?this.selectorMap[t]:t[this.scope.id];if(!i)return null;var a=G.find(i,(function(e){return e.context===n&&(r||e.interactable.inContext(t))}));return a&&a.interactable},e.forEachMatch=function(t,e){for(var n=0;n<this.list.length;n++){var r=this.list[n],i=void 0;if((o.default.string(r.target)?o.default.element(t)&&_.matchesSelector(t,r.target):t===r.target)&&r.inContext(t)&&(i=e(r)),void 0!==i)return i}},t}();$e.InteractableSet=Ke;var Ze={};Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.default=void 0;var Je=function(){function t(t){this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=t,(0,k.default)(this,t)}var e=t.prototype;return e.preventOriginalDefault=function(){this.originalEvent.preventDefault()},e.stopPropagation=function(){this.originalEvent.stopPropagation()},e.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation()},t}();function Qe(t){if(!o.default.object(t))return{capture:!!t,passive:!1};var e=(0,T.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var tn={id:"events",install:function(t){var e=[],n={},r=[],i={add:a,remove:s,addDelegate:function(t,e,i,o,s){var u=Qe(s);if(!n[i]){n[i]=[];for(var d=0;d<r.length;d++){var f=r[d];a(f,i,l),a(f,i,c,!0)}}var p=n[i],v=G.find(p,(function(n){return n.selector===t&&n.context===e}));v||(v={selector:t,context:e,listeners:[]},p.push(v)),v.listeners.push([o,u])},removeDelegate:function(t,e,r,i,o){var a,u=Qe(o),d=n[r],f=!1;if(d)for(a=d.length-1;a>=0;a--){var p=d[a];if(p.selector===t&&p.context===e){for(var v=p.listeners,h=v.length-1;h>=0;h--){var g=v[h],m=g[0],y=g[1],b=y.capture,x=y.passive;if(m===i&&b===u.capture&&x===u.passive){v.splice(h,1),v.length||(d.splice(a,1),s(e,r,l),s(e,r,c,!0)),f=!0;break}}if(f)break}}},delegateListener:l,delegateUseCapture:c,delegatedEvents:n,documents:r,targets:e,supportsOptions:!1,supportsPassive:!1};function a(t,n,r,o){var a=Qe(o),s=G.find(e,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},e.push(s)),s.events[n]||(s.events[n]=[]),t.addEventListener&&!G.contains(s.events[n],r)&&(t.addEventListener(n,r,i.supportsOptions?a:a.capture),s.events[n].push(r))}function s(t,n,r,o){var a=Qe(o),l=G.findIndex(e,(function(e){return e.eventTarget===t})),c=e[l];if(c&&c.events)if("all"!==n){var u=!1,d=c.events[n];if(d){if("all"===r){for(var f=d.length-1;f>=0;f--)s(t,n,d[f],a);return}for(var p=0;p<d.length;p++)if(d[p]===r){t.removeEventListener(n,r,i.supportsOptions?a:a.capture),d.splice(p,1),0===d.length&&(delete c.events[n],u=!0);break}}u&&!Object.keys(c.events).length&&e.splice(l,1)}else for(n in c.events)c.events.hasOwnProperty(n)&&s(t,n,"all")}function l(t,e){for(var r=Qe(e),i=new Je(t),a=n[t.type],s=X.getEventTargets(t)[0],l=s;o.default.element(l);){for(var c=0;c<a.length;c++){var u=a[c],d=u.selector,f=u.context;if(_.matchesSelector(l,d)&&_.nodeContains(f,s)&&_.nodeContains(f,l)){var p=u.listeners;i.currentTarget=l;for(var v=0;v<p.length;v++){var h=p[v],g=h[0],m=h[1],y=m.capture,b=m.passive;y===r.capture&&b===r.passive&&g(i)}}}l=_.parentNode(l)}}function c(t){return l(t,!0)}return t.document.createElement("div").addEventListener("test",null,{get capture(){return i.supportsOptions=!0},get passive(){return i.supportsPassive=!0}}),t.events=i,i}};Ze.default=tn;var en={};Object.defineProperty(en,"__esModule",{value:!0}),en.createInteractStatic=function(t){var e=function e(n,r){var i=t.interactables.get(n,r);return i||((i=t.interactables.new(n,r)).events.global=e.globalEvents),i};return e.getPointerAverage=X.pointerAverage,e.getTouchBBox=X.touchBBox,e.getTouchDistance=X.touchDistance,e.getTouchAngle=X.touchAngle,e.getElementRect=_.getElementRect,e.getElementClientRect=_.getElementClientRect,e.matchesSelector=_.matchesSelector,e.closest=_.closest,e.globalEvents={},e.version="1.10.1",e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=function(t,e,n){if(o.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),o.default.array(t)){for(var r=0;r<t.length;r++){var i=t[r];this.on(i,e,n)}return this}if(o.default.object(t)){for(var a in t)this.on(a,t[a],e);return this}return(0,qe.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this},e.off=function(t,e,n){if(o.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),o.default.array(t)){for(var r=0;r<t.length;r++){var i=t[r];this.off(i,e,n)}return this}if(o.default.object(t)){for(var a in t)this.off(a,t[a],e);return this}var s;return(0,qe.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n),this},e.debug=function(){return this.scope},e.supportsTouch=function(){return y.default.supportsTouch},e.supportsPointerEvent=function(){return y.default.supportsPointerEvent},e.stop=function(){for(var t=0;t<this.scope.interactions.list.length;t++)this.scope.interactions.list[t].stop();return this},e.pointerMoveTolerance=function(t){return o.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e};var nn={};Object.defineProperty(nn,"__esModule",{value:!0}),nn.default=void 0;var rn={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<rn.methodOrder.length;e++){var n;n=rn.methodOrder[e];var r=rn[n](t);if(r)return r}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,i=t.scope;if(!/down|start/i.test(n))return null;for(var o=0;o<i.interactions.list.length;o++){var a=i.interactions.list[o],s=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=_.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,i=t.eventType,o=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<o.interactions.list.length;a++){var s=o.interactions.list[a];if(s.pointerType===r){if(s.simulation&&!on(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var l=0;l<o.interactions.list.length;l++){var c=o.interactions.list[l];if(!(c.pointerType!==r||/down/i.test(i)&&c.simulation))return c}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,r=0;r<n.interactions.list.length;r++){var i=n.interactions.list[r];if(on(i,e))return i}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,r=0;r<n.interactions.list.length;r++){var i=n.interactions.list[r];if(1===i.pointers.length){var o=i.interactable;if(o&&(!o.options.gesture||!o.options.gesture.enabled))continue}else if(i.pointers.length>=2)continue;if(!i.interacting()&&e===i.pointerType)return i}return null}};function on(t,e){return t.pointers.some((function(t){return t.id===e}))}var an=rn;nn.default=an;var sn={};function ln(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(sn,"__esModule",{value:!0}),sn.default=void 0;var cn=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function un(t,e){return function(n){var r=e.interactions.list,i=X.getPointerType(n),o=X.getEventTargets(n),a=o[0],s=o[1],l=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var c=0;c<n.changedTouches.length;c++){var u=n.changedTouches[c],d={pointer:u,pointerId:X.getPointerId(u),pointerType:i,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},f=dn(d);l.push([d.pointer,d.eventTarget,d.curEventTarget,f])}}else{var p=!1;if(!y.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!p;v++)p="mouse"!==r[v].pointerType&&r[v].pointerIsDown;p=p||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!p){var h={pointer:n,pointerId:X.getPointerId(n),pointerType:i,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},g=dn(h);l.push([h.pointer,h.eventTarget,h.curEventTarget,g])}}for(var m=0;m<l.length;m++){var b=l[m],x=b[0],_=b[1],w=b[2];b[3][t](x,n,_,w)}}}function dn(t){var e=t.pointerType,n=t.scope,r={interaction:nn.default.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function fn(t,e){var n=t.doc,r=t.scope,i=t.options,o=r.interactions.docEvents,a=r.events,s=a[e];for(var l in r.browser.isIOS&&!i.events&&(i.events={passive:!1}),a.delegatedEvents)s(n,l,a.delegateListener),s(n,l,a.delegateUseCapture,!0);for(var c=i&&i.events,u=0;u<o.length;u++){var d=o[u];s(n,d.type,d.listener,c)}}var pn={id:"core/interactions",install:function(t){for(var e={},n=0;n<cn.length;n++){var r=cn[n];e[r]=un(r,t)}var i,o=y.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var r=function(){var e=n.pointers[i];t.documents.some((function(t){var n=t.doc;return(0,_.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},i=0;i<n.pointers.length;i++)r()}}(i=v.default.PointerEvent?[{type:o.down,listener:a},{type:o.down,listener:e.pointerDown},{type:o.move,listener:e.pointerMove},{type:o.up,listener:e.pointerUp},{type:o.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++)t.interactions.list[n].documentBlur(e)}}),t.prevTouchTime=0,t.Interaction=function(e){var n,r,i,o;function a(){return e.apply(this,arguments)||this}return r=e,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,a.prototype._now=function(){return t.now()},i=a,(o=[{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}}])&&ln(i.prototype,o),a}(Ee.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:i,pointerMoveTolerance:1},t.usePlugin(Jt.default)},listeners:{"scope:add-document":function(t){return fn(t,"add")},"scope:remove-document":function(t){return fn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var i=e.interactions.list[r];i.interactable===n&&(i.stop(),e.fire("interactions:destroy",{interaction:i}),i.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:fn,doOnInteractions:un,methodNames:cn};sn.default=pn;var vn={};function hn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(vn,"__esModule",{value:!0}),vn.initScope=mn,vn.Scope=void 0;var gn=function(){function t(){var t=this;this.id="__interact_scope_"+Math.floor(100*Math.random()),this.isInitialized=!1,this.listenerMaps=[],this.browser=y.default,this.defaults=(0,ue.default)(ye.defaults),this.Eventable=Be.Eventable,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(0,en.createInteractStatic)(this),this.InteractEvent=be.InteractEvent,this.Interactable=void 0,this.interactables=new $e.InteractableSet(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(e){return t.removeDocument(e.target)};var e=this;this.Interactable=function(t){var n,r;function i(){return t.apply(this,arguments)||this}r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o,a,s=i.prototype;return s.set=function(n){return t.prototype.set.call(this,n),e.fire("interactable:set",{options:n,interactable:this}),this},s.unset=function(){t.prototype.unset.call(this),e.interactables.list.splice(e.interactables.list.indexOf(this),1),e.fire("interactable:unset",{interactable:this})},o=i,(a=[{key:"_defaults",get:function(){return e.defaults}}])&&hn(o.prototype,a),i}(Ue.Interactable)}var n=t.prototype;return n.addListeners=function(t,e){this.listenerMaps.push({id:e,map:t})},n.fire=function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[t];if(r&&!1===r(e,this,t))return!1}},n.init=function(t){return this.isInitialized?this:mn(this,t)},n.pluginIsInstalled=function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)},n.usePlugin=function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,i=t.before.reduce((function(t,e){return t[e]=!0,t[yn(e)]=!0,t}),{});n<r;n++){var o=this.listenerMaps[n].id;if(i[o]||i[yn(o)])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this},n.addDocument=function(t,n){if(-1!==this.getDocIndex(t))return!1;var r=e.getWindow(t);n=n?(0,T.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(r,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:r,scope:this,options:n})},n.removeDocument=function(t){var n=this.getDocIndex(t),r=e.getWindow(t),i=this.documents[n].options;this.events.remove(r,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:r,scope:this,options:i})},n.getDocIndex=function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1},n.getDocOptions=function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options},n.now=function(){return(this.window.Date||Date).now()},t}();function mn(t,n){return t.isInitialized=!0,e.init(n),v.default.init(n),y.default.init(n),bt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(sn.default),t.usePlugin(Ze.default),t}function yn(t){return t&&t.replace(/\/.*$/,"")}vn.Scope=gn;var bn={};Object.defineProperty(bn,"__esModule",{value:!0}),bn.init=bn.default=void 0;var xn=new vn.Scope,_n=xn.interactStatic;bn.default=_n;var wn=function(t){return xn.init(t)};bn.init=wn,"object"==typeof window&&window&&wn(window);var Pn={};Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.default=void 0,Pn.default=function(){};var En={};Object.defineProperty(En,"__esModule",{value:!0}),En.default=void 0,En.default=function(){};var Sn={};Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=void 0,Sn.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=e[0],r=e[1];return n in t||r in t})),n=function(n,r){for(var i=t.range,o=t.limits,a=void 0===o?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:o,s=t.offset,l=void 0===s?{x:0,y:0}:s,c={range:i,grid:t,x:null,y:null},u=0;u<e.length;u++){var d=e[u],f=d[0],p=d[1],v=Math.round((n-l.x)/t[f]),h=Math.round((r-l.y)/t[p]);c[f]=Math.max(a.left,Math.min(a.right,v*t[f]+l.x)),c[p]=Math.max(a.top,Math.min(a.bottom,h*t[p]+l.y))}return c};return n.grid=t,n.coordFields=e,n};var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0}),Object.defineProperty(Mn,"edgeTarget",{enumerable:!0,get:function(){return Pn.default}}),Object.defineProperty(Mn,"elements",{enumerable:!0,get:function(){return En.default}}),Object.defineProperty(Mn,"grid",{enumerable:!0,get:function(){return Sn.default}});var On={};Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0;var Tn={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,T.default)(e.snappers||{},Mn),e.createSnapGrid=e.snappers.grid}};On.default=Tn;var In={};function Dn(){return(Dn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(In,"__esModule",{value:!0}),In.aspectRatio=In.default=void 0;var jn={start:function(t){var e=t.state,n=t.rect,r=t.edges,i=t.pageCoords,o=e.options.ratio,a=e.options,s=a.equalDelta,l=a.modifiers;"preserve"===o&&(o=n.width/n.height),e.startCoords=(0,T.default)({},i),e.startRect=(0,T.default)({},n),e.ratio=o,e.equalDelta=s;var c=e.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(e.xIsPrimaryAxis=!(!r.left&&!r.right),e.equalDelta)e.edgeSign=(c.left?1:-1)*(c.top?1:-1);else{var u=e.xIsPrimaryAxis?c.top:c.left;e.edgeSign=u?-1:1}if((0,T.default)(t.edges,c),l&&l.length){var d=new de.default(t.interaction);d.copyFrom(t.interaction.modification),d.prepareStates(l),e.subModification=d,d.startAll(Dn({},t))}},set:function(t){var e=t.state,n=t.rect,r=t.coords,i=(0,T.default)({},r),o=e.equalDelta?zn:An;if(o(e,e.xIsPrimaryAxis,r,n),!e.subModification)return null;var a=(0,T.default)({},n);(0,I.addEdges)(e.linkedEdges,a,{x:r.x-i.x,y:r.y-i.y});var s=e.subModification.setAll(Dn(Dn({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:r,prevCoords:r,prevRect:a})),l=s.delta;return s.changed&&(o(e,Math.abs(l.x)>Math.abs(l.y),s.coords,s.rect),(0,T.default)(r,s.coords)),s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function zn(t,e,n){var r=t.startCoords,i=t.edgeSign;e?n.y=r.y+(n.x-r.x)*i:n.x=r.x+(n.y-r.y)*i}function An(t,e,n,r){var i=t.startRect,o=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var l=r.width/a;n.y=o.y+(l-i.height)*s}else{var c=r.height*a;n.x=o.x+(c-i.width)*s}}In.aspectRatio=jn;var Cn=(0,he.makeModifier)(jn,"aspectRatio");In.default=Cn;var kn={};Object.defineProperty(kn,"__esModule",{value:!0}),kn.default=void 0;var Rn=function(){};Rn._defaults={};var Fn=Rn;kn.default=Fn;var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0}),Object.defineProperty(Xn,"default",{enumerable:!0,get:function(){return kn.default}});var Yn={};function Wn(t,e,n){return o.default.func(t)?I.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):I.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(Yn,"__esModule",{value:!0}),Yn.getRestrictionRect=Wn,Yn.restrict=Yn.default=void 0;var Ln={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,i=t.interaction,o=t.pageCoords,a=r.options,s=a.elementRect,l=(0,T.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var c=Wn(a.restriction,i,o);if(c){var u=c.right-c.left-e.width,d=c.bottom-c.top-e.height;u<0&&(l.left+=u,l.right+=u),d<0&&(l.top+=d,l.bottom+=d)}l.left+=n.left-e.width*s.left,l.top+=n.top-e.height*s.top,l.right+=n.right-e.width*(1-s.right),l.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=l},set:function(t){var e=t.coords,n=t.interaction,r=t.state,i=r.options,o=r.offset,a=Wn(i.restriction,n,e);if(a){var s=I.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-o.right,e.x),s.left+o.left),e.y=Math.max(Math.min(s.bottom-o.bottom,e.y),s.top+o.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Yn.restrict=Ln;var Bn=(0,he.makeModifier)(Ln,"restrict");Yn.default=Bn;var Nn={};Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.restrictEdges=Nn.default=void 0;var Vn={top:1/0,left:1/0,bottom:-1/0,right:-1/0},qn={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Un(t,e){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var i=n[r];i in t||(t[i]=e[i])}return t}var Gn={noInner:Vn,noOuter:qn,start:function(t){var e,n=t.interaction,r=t.startOffset,i=t.state,o=i.options;if(o){var a=(0,Yn.getRestrictionRect)(o.offset,n,n.coords.start.page);e=I.rectToXY(a)}e=e||{x:0,y:0},i.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,i=t.state,o=i.offset,a=i.options;if(n){var s=(0,T.default)({},e),l=(0,Yn.getRestrictionRect)(a.inner,r,s)||{},c=(0,Yn.getRestrictionRect)(a.outer,r,s)||{};Un(l,Vn),Un(c,qn),n.top?e.y=Math.min(Math.max(c.top+o.top,s.y),l.top+o.top):n.bottom&&(e.y=Math.max(Math.min(c.bottom+o.bottom,s.y),l.bottom+o.bottom)),n.left?e.x=Math.min(Math.max(c.left+o.left,s.x),l.left+o.left):n.right&&(e.x=Math.max(Math.min(c.right+o.right,s.x),l.right+o.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Nn.restrictEdges=Gn;var Hn=(0,he.makeModifier)(Gn,"restrictEdges");Nn.default=Hn;var $n={};Object.defineProperty($n,"__esModule",{value:!0}),$n.restrictRect=$n.default=void 0;var Kn=(0,T.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Yn.restrict.defaults),Zn={start:Yn.restrict.start,set:Yn.restrict.set,defaults:Kn};$n.restrictRect=Zn;var Jn=(0,he.makeModifier)(Zn,"restrictRect");$n.default=Jn;var Qn={};Object.defineProperty(Qn,"__esModule",{value:!0}),Qn.restrictSize=Qn.default=void 0;var tr={width:-1/0,height:-1/0},er={width:1/0,height:1/0},nr={start:function(t){return Nn.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,i=t.edges,o=n.options;if(i){var a=I.tlbrToXywh((0,Yn.getRestrictionRect)(o.min,e,t.coords))||tr,s=I.tlbrToXywh((0,Yn.getRestrictionRect)(o.max,e,t.coords))||er;n.options={endOnly:o.endOnly,inner:(0,T.default)({},Nn.restrictEdges.noInner),outer:(0,T.default)({},Nn.restrictEdges.noOuter)},i.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):i.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),i.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):i.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),Nn.restrictEdges.set(t),n.options=o}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Qn.restrictSize=nr;var rr=(0,he.makeModifier)(nr,"restrictSize");Qn.default=rr;var ir={};Object.defineProperty(ir,"__esModule",{value:!0}),Object.defineProperty(ir,"default",{enumerable:!0,get:function(){return kn.default}});var or={};Object.defineProperty(or,"__esModule",{value:!0}),or.snap=or.default=void 0;var ar={start:function(t){var e,n=t.interaction,r=t.interactable,i=t.element,o=t.rect,a=t.state,s=t.startOffset,l=a.options,c=l.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,I.rectToXY)((0,I.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,j.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===l.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var u=(0,I.resolveRectLike)(l.offset,r,i,[n]);(e=(0,I.rectToXY)(u)||{x:0,y:0}).x+=c.x,e.y+=c.y}var d=l.relativePoints;a.offsets=o&&d&&d.length?d.map((function(t,n){return{index:n,relativePoint:t,x:s.left-o.width*t.x+e.x,y:s.top-o.height*t.y+e.y}})):[(0,T.default)({index:0,relativePoint:null},e)]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,i=r.options,a=r.offsets,s=(0,j.default)(e.interactable,e.element,e.prepared.name),l=(0,T.default)({},n),c=[];i.offsetWithOrigin||(l.x-=s.x,l.y-=s.y);for(var u=0;u<a.length;u++)for(var d=a[u],f=l.x-d.x,p=l.y-d.y,v=0,h=i.targets.length;v<h;v++){var g,m=i.targets[v];(g=o.default.func(m)?m(f,p,e._proxy,d,v):m)&&c.push({x:(o.default.number(g.x)?g.x:f)+d.x,y:(o.default.number(g.y)?g.y:p)+d.y,range:o.default.number(g.range)?g.range:i.range,source:m,index:v,offset:d})}for(var y={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<c.length;b++){var x=c[b],_=x.range,w=x.x-l.x,P=x.y-l.y,E=(0,C.default)(w,P),S=E<=_;_===1/0&&y.inRange&&y.range!==1/0&&(S=!1),y.target&&!(S?y.inRange&&_!==1/0?E/_<y.distance/y.range:_===1/0&&y.range!==1/0||E<y.distance:!y.inRange&&E<y.distance)||(y.target=x,y.distance=E,y.range=_,y.inRange=S,y.delta.x=w,y.delta.y=P)}return y.inRange&&(n.x=y.target.x,n.y=y.target.y),r.closest=y,y},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};or.snap=ar;var sr=(0,he.makeModifier)(ar,"snap");or.default=sr;var lr={};Object.defineProperty(lr,"__esModule",{value:!0}),lr.snapSize=lr.default=void 0;var cr={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],or.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,i=n.options,a=n.offsets,s={x:r.x-a[0].x,y:r.y-a[0].y};n.options=(0,T.default)({},i),n.options.targets=[];for(var l=0;l<(i.targets||[]).length;l++){var c=(i.targets||[])[l],u=void 0;if(u=o.default.func(c)?c(s.x,s.y,e):c){for(var d=0;d<n.targetFields.length;d++){var f=n.targetFields[d],p=f[0],v=f[1];if(p in u||v in u){u.x=u[p],u.y=u[v];break}}n.options.targets.push(u)}}var h=or.snap.set(t);return n.options=i,h},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};lr.snapSize=cr;var ur=(0,he.makeModifier)(cr,"snapSize");lr.default=ur;var dr={};Object.defineProperty(dr,"__esModule",{value:!0}),dr.snapEdges=dr.default=void 0;var fr={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],lr.snapSize.start(t)):null},set:lr.snapSize.set,defaults:(0,T.default)((0,ue.default)(lr.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};dr.snapEdges=fr;var pr=(0,he.makeModifier)(fr,"snapEdges");dr.default=pr;var vr={};Object.defineProperty(vr,"__esModule",{value:!0}),Object.defineProperty(vr,"default",{enumerable:!0,get:function(){return kn.default}});var hr={};Object.defineProperty(hr,"__esModule",{value:!0}),Object.defineProperty(hr,"default",{enumerable:!0,get:function(){return kn.default}});var gr={};Object.defineProperty(gr,"__esModule",{value:!0}),gr.default=void 0;var mr={aspectRatio:In.default,restrictEdges:Nn.default,restrict:Yn.default,restrictRect:$n.default,restrictSize:Qn.default,snapEdges:dr.default,snap:or.default,snapSize:lr.default,spring:vr.default,avoid:Xn.default,transform:hr.default,rubberband:ir.default};gr.default=mr;var yr={};Object.defineProperty(yr,"__esModule",{value:!0}),yr.default=void 0;var br={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(he.default),t.usePlugin(On.default),e.modifiers=gr.default,gr.default){var r=gr.default[n],i=r._defaults,o=r._methods;i._methods=o,t.defaults.perAction[n]=i}}};yr.default=br;var xr={};Object.defineProperty(xr,"__esModule",{value:!0}),xr.default=void 0,xr.default={};var _r={};function wr(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Object.defineProperty(_r,"__esModule",{value:!0}),_r.PointerEvent=_r.default=void 0;var Pr=function(t){var e,n;function r(e,n,r,i,o,a){var s;if((s=t.call(this,o)||this).type=void 0,s.originalEvent=void 0,s.pointerId=void 0,s.pointerType=void 0,s.double=void 0,s.pageX=void 0,s.pageY=void 0,s.clientX=void 0,s.clientY=void 0,s.dt=void 0,s.eventable=void 0,X.pointerExtend(wr(s),r),r!==n&&X.pointerExtend(wr(s),n),s.timeStamp=a,s.originalEvent=r,s.type=e,s.pointerId=X.getPointerId(n),s.pointerType=X.getPointerType(n),s.target=i,s.currentTarget=null,"tap"===e){var l=o.getPointerIndex(n);s.dt=s.timeStamp-o.pointers[l].downTime;var c=s.timeStamp-o.tapTime;s.double=!!(o.prevTap&&"doubletap"!==o.prevTap.type&&o.prevTap.target===s.target&&c<500)}else"doubletap"===e&&(s.dt=n.timeStamp-o.tapTime);return s}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i._subtractOrigin=function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this},i._addOrigin=function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this},i.preventDefault=function(){this.originalEvent.preventDefault()},r}(q.BaseEvent);_r.PointerEvent=_r.default=Pr;var Er={};Object.defineProperty(Er,"__esModule",{value:!0}),Er.default=void 0;var Sr={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(t){t.pointerEvents=Sr,t.defaults.actions.pointerEvents=Sr.defaults,(0,T.default)(t.actions.phaselessTypes,Sr.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;!e&&n.hold||(n.hold={duration:1/0,timeout:null})},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;t.duplicate||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&Tr(t),Mr({interaction:n,pointer:r,event:i,eventTarget:o,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,l=_.getPath(o),c={interaction:n,pointer:r,event:i,eventTarget:o,type:"hold",targets:[],path:l,node:null},u=0;u<l.length;u++){var d=l[u];c.node=d,e.fire("pointerEvents:collect-targets",c)}if(c.targets.length){for(var f=1/0,p=0;p<c.targets.length;p++){var v=c.targets[p].eventable.options.holdDuration;v<f&&(f=v)}s.duration=f,s.timeout=setTimeout((function(){Mr({interaction:n,eventTarget:o,pointer:r,event:i,type:"hold"},e)}),f)}}(t,e),Mr(t,e)},"interactions:up":function(t,e){Tr(t),Mr(t,e),function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;n.pointerWasMoved||Mr({interaction:n,eventTarget:o,pointer:r,event:i,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){Tr(t),Mr(t,e)}},PointerEvent:_r.PointerEvent,fire:Mr,collectEventTargets:Or,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Mr(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget,a=t.type,s=t.targets,l=void 0===s?Or(t,e):s,c=new _r.PointerEvent(a,r,i,o,n,e.now());e.fire("pointerEvents:new",{pointerEvent:c});for(var u={interaction:n,pointer:r,event:i,eventTarget:o,targets:l,type:a,pointerEvent:c},d=0;d<l.length;d++){var f=l[d];for(var p in f.props||{})c[p]=f.props[p];var v=(0,j.default)(f.eventable,f.node);if(c._subtractOrigin(v),c.eventable=f.eventable,c.currentTarget=f.node,f.eventable.fire(c),c._addOrigin(v),c.immediatePropagationStopped||c.propagationStopped&&d+1<l.length&&l[d+1].node!==c.currentTarget)break}if(e.fire("pointerEvents:fired",u),"tap"===a){var h=c.double?Mr({interaction:n,pointer:r,event:i,eventTarget:o,type:"doubletap"},e):c;n.prevTap=h,n.tapTime=h.timeStamp}return c}function Or(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget,a=t.type,s=n.getPointerIndex(r),l=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==o))return[];for(var c=_.getPath(o),u={interaction:n,pointer:r,event:i,eventTarget:o,type:a,path:c,targets:[],node:null},d=0;d<c.length;d++){var f=c[d];u.node=f,e.fire("pointerEvents:collect-targets",u)}return"hold"===a&&(u.targets=u.targets.filter((function(t){return t.eventable.options.holdDuration===n.pointers[s].hold.duration}))),u.targets}function Tr(t){var e=t.interaction,n=t.pointerIndex,r=e.pointers[n].hold;r&&r.timeout&&(clearTimeout(r.timeout),r.timeout=null)}var Ir=Sr;Er.default=Ir;var Dr={};function jr(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default=void 0;var zr={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(Er.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:"+e]=jr,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,i=t.eventTarget,o=t.targets;if("hold"===r.type&&o.length){var a=o[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:i,type:"hold",pointer:r,event:r},e)}),a))}}})};Dr.default=zr;var Ar={};function Cr(t){return(0,T.default)(this.events.options,t),this}Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.default=void 0;var kr={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Cr;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,i=t.type,o=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[i]&&e.types[i].length&&t.testIgnoreAllow(a,r,o)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;(0,T.default)(n.events.options,e.pointerEvents.defaults),(0,T.default)(n.events.options,r.pointerEvents||{})}}};Ar.default=kr;var Rr={};Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.default=void 0;var Fr={id:"pointer-events",install:function(t){t.usePlugin(Er),t.usePlugin(Dr.default),t.usePlugin(Ar.default)}};Rr.default=Fr;var Xr={};Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.default=void 0,Xr.default={};var Yr={};function Wr(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=o.default.string(t.target)?G.from(t._context.querySelectorAll(t.target)):[t.target],i=n.window.Promise,a=i?[]:null,s=function(){var o=r[l],s=t.getRect(o);if(!s)return"break";var c=G.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===o&&n.prepared.name===e.name})),u=void 0;if(c)c.move(),a&&(u=c._reflowPromise||new i((function(t){c._reflowResolve=t})));else{var d=(0,I.tlbrToXywh)(s),f={page:{x:d.x,y:d.y},client:{x:d.x,y:d.y},timeStamp:n.now()},p=X.coordsToEvent(f);u=function(t,e,n,r,i){var o=t.interactions.new({pointerType:"reflow"}),a={interaction:o,event:i,pointer:i,eventTarget:n,phase:"reflow"};o.interactable=e,o.element=n,o.prevEvent=i,o.updatePointer(i,i,n,!0),X.setZeroCoords(o.coords.delta),(0,It.copyAction)(o.prepared,r),o._doPhase(a);var s=t.window.Promise,l=s?new s((function(t){o._reflowResolve=t})):void 0;return o._reflowPromise=l,o.start(r,e,n),o._interacting?(o.move(a),o.end(i)):(o.stop(),o._reflowResolve()),o.removePointer(i,i),l}(n,t,o,e,p)}a&&a.push(u)},l=0;l<r.length&&"break"!==s();l++);return a&&i.all(a).then((function(){return t}))}(this,e,t)}}Object.defineProperty(Yr,"__esModule",{value:!0}),Yr.install=Wr,Yr.default=void 0;var Lr={id:"reflow",install:Wr,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),G.remove(e.interactions.list,n))}}};Yr.default=Lr;var Br={};Object.defineProperty(Br,"__esModule",{value:!0}),Br.default=void 0,Br.default={};var Nr={};Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.exchange=void 0,Nr.exchange={};var Vr={};Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.default=void 0,Vr.default={};var qr={exports:{}};Object.defineProperty(qr.exports,"__esModule",{value:!0}),qr.exports.default=void 0,bn.default.use(xr.default),bn.default.use(Jt.default),bn.default.use(Ie.default),bn.default.use(Zt.default),bn.default.use(yt.default),bn.default.use(Rr.default),bn.default.use(Re.default),bn.default.use(yr.default),bn.default.use($t.default),bn.default.use(gt.default),bn.default.use(Et.default),bn.default.use(Yr.default),bn.default.use(ce.default),bn.default.use(Vr.default),bn.default.use(Xr.default),bn.default.__utils={exchange:Nr.exchange,displace:Br,pointer:X},bn.default.use(ie.default);var Ur=bn.default;if(qr.exports.default=Ur,qr)try{qr.exports=bn.default}catch(t){}bn.default.default=bn.default,qr=qr.exports;var Gr={exports:{}};Object.defineProperty(Gr.exports,"__esModule",{value:!0}),Gr.exports.default=void 0;var Hr=qr.default;if(Gr.exports.default=Hr,Gr)try{Gr.exports=qr.default}catch(t){}return qr.default.default=qr.default,Gr.exports}));
//# sourceMappingURL=interact.min.js.map


/***/ }),

/***/ "./resources/css/tailwind.css":
/*!************************************!*
  !*** ./resources/css/tailwind.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/DesktopWindow.vue":
/*!***************************************************!*
  !*** ./resources/js/components/DesktopWindow.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _DesktopWindow_vue_vue_type_template_id_abc10e5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopWindow.vue?vue&type=template&id=abc10e5e */ "./resources/js/components/DesktopWindow.vue?vue&type=template&id=abc10e5e");
/* harmony import */ var _DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopWindow.vue?vue&type=script&lang=js */ "./resources/js/components/DesktopWindow.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _DesktopWindow_vue_vue_type_template_id_abc10e5e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/DesktopWindow.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/MenuBar.vue":
/*!*********************************************!*
  !*** ./resources/js/components/MenuBar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _MenuBar_vue_vue_type_template_id_1c77ed99__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=template&id=1c77ed99 */ "./resources/js/components/MenuBar.vue?vue&type=template&id=1c77ed99");
/* harmony import */ var _MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=script&lang=js */ "./resources/js/components/MenuBar.vue?vue&type=script&lang=js");



_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MenuBar_vue_vue_type_template_id_1c77ed99__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/MenuBar.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/DesktopWindow.vue?vue&type=script&lang=js":
/*!***************************************************************************!*
  !*** ./resources/js/components/DesktopWindow.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport default from dynamic */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DesktopWindow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DesktopWindow.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ }),

/***/ "./resources/js/components/MenuBar.vue?vue&type=script&lang=js":
/*!*********************************************************************!*
  !*** ./resources/js/components/MenuBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DesktopWindow.vue?vue&type=template&id=abc10e5e":
/*!*********************************************************************************!*
  !*** ./resources/js/components/DesktopWindow.vue?vue&type=template&id=abc10e5e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_template_id_abc10e5e__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopWindow_vue_vue_type_template_id_abc10e5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DesktopWindow.vue?vue&type=template&id=abc10e5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DesktopWindow.vue?vue&type=template&id=abc10e5e");


/***/ }),

/***/ "./resources/js/components/MenuBar.vue?vue&type=template&id=1c77ed99":
/*!***************************************************************************!*
  !*** ./resources/js/components/MenuBar.vue?vue&type=template&id=1c77ed99 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBar_vue_vue_type_template_id_1c77ed99__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBar_vue_vue_type_template_id_1c77ed99__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBar.vue?vue&type=template&id=1c77ed99 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBar.vue?vue&type=template&id=1c77ed99");


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition,
/* harmony export */   "Comment": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment,
/* harmony export */   "Fragment": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment,
/* harmony export */   "KeepAlive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive,
/* harmony export */   "Static": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static,
/* harmony export */   "Suspense": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense,
/* harmony export */   "Teleport": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport,
/* harmony export */   "Text": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text,
/* harmony export */   "Transition": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition,
/* harmony export */   "TransitionGroup": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup,
/* harmony export */   "callWithAsyncErrorHandling": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling,
/* harmony export */   "callWithErrorHandling": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling,
/* harmony export */   "camelize": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize,
/* harmony export */   "capitalize": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize,
/* harmony export */   "cloneVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode,
/* harmony export */   "computed": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed,
/* harmony export */   "createApp": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp,
/* harmony export */   "createBlock": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock,
/* harmony export */   "createCommentVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode,
/* harmony export */   "createHydrationRenderer": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer,
/* harmony export */   "createRenderer": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer,
/* harmony export */   "createSSRApp": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp,
/* harmony export */   "createSlots": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots,
/* harmony export */   "createStaticVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode,
/* harmony export */   "createTextVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode,
/* harmony export */   "createVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode,
/* harmony export */   "customRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef,
/* harmony export */   "defineAsyncComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent,
/* harmony export */   "defineComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent,
/* harmony export */   "defineEmit": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit,
/* harmony export */   "defineProps": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps,
/* harmony export */   "devtools": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools,
/* harmony export */   "getCurrentInstance": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
/* harmony export */   "getTransitionRawChildren": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren,
/* harmony export */   "h": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h,
/* harmony export */   "handleError": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError,
/* harmony export */   "hydrate": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate,
/* harmony export */   "initCustomFormatter": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter,
/* harmony export */   "inject": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject,
/* harmony export */   "isProxy": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy,
/* harmony export */   "isReactive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive,
/* harmony export */   "isReadonly": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly,
/* harmony export */   "isRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef,
/* harmony export */   "isVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode,
/* harmony export */   "markRaw": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw,
/* harmony export */   "mergeProps": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps,
/* harmony export */   "nextTick": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick,
/* harmony export */   "onActivated": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated,
/* harmony export */   "onBeforeMount": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
/* harmony export */   "onBeforeUnmount": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount,
/* harmony export */   "onBeforeUpdate": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate,
/* harmony export */   "onDeactivated": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated,
/* harmony export */   "onErrorCaptured": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured,
/* harmony export */   "onMounted": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted,
/* harmony export */   "onRenderTracked": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked,
/* harmony export */   "onRenderTriggered": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered,
/* harmony export */   "onUnmounted": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted,
/* harmony export */   "onUpdated": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated,
/* harmony export */   "openBlock": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock,
/* harmony export */   "popScopeId": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId,
/* harmony export */   "provide": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide,
/* harmony export */   "proxyRefs": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs,
/* harmony export */   "pushScopeId": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId,
/* harmony export */   "queuePostFlushCb": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb,
/* harmony export */   "reactive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive,
/* harmony export */   "readonly": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly,
/* harmony export */   "ref": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref,
/* harmony export */   "registerRuntimeCompiler": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler,
/* harmony export */   "render": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "renderList": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList,
/* harmony export */   "renderSlot": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot,
/* harmony export */   "resolveComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent,
/* harmony export */   "resolveDirective": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective,
/* harmony export */   "resolveDynamicComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent,
/* harmony export */   "resolveTransitionHooks": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks,
/* harmony export */   "setBlockTracking": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking,
/* harmony export */   "setDevtoolsHook": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook,
/* harmony export */   "setTransitionHooks": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks,
/* harmony export */   "shallowReactive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive,
/* harmony export */   "shallowReadonly": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly,
/* harmony export */   "shallowRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
/* harmony export */   "ssrContextKey": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey,
/* harmony export */   "ssrUtils": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils,
/* harmony export */   "toDisplayString": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString,
/* harmony export */   "toHandlerKey": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey,
/* harmony export */   "toHandlers": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers,
/* harmony export */   "toRaw": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw,
/* harmony export */   "toRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef,
/* harmony export */   "toRefs": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs,
/* harmony export */   "transformVNodeArgs": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs,
/* harmony export */   "triggerRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef,
/* harmony export */   "unref": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref,
/* harmony export */   "useContext": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext,
/* harmony export */   "useCssModule": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule,
/* harmony export */   "useCssVars": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars,
/* harmony export */   "useSSRContext": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext,
/* harmony export */   "useTransitionState": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState,
/* harmony export */   "vModelCheckbox": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox,
/* harmony export */   "vModelDynamic": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic,
/* harmony export */   "vModelRadio": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio,
/* harmony export */   "vModelSelect": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect,
/* harmony export */   "vModelText": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText,
/* harmony export */   "vShow": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow,
/* harmony export */   "version": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version,
/* harmony export */   "warn": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn,
/* harmony export */   "watch": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch,
/* harmony export */   "watchEffect": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect,
/* harmony export */   "withCtx": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx,
/* harmony export */   "withDirectives": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives,
/* harmony export */   "withKeys": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys,
/* harmony export */   "withModifiers": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers,
/* harmony export */   "withScopeId": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId,
/* harmony export */   "compile": () => /* binding */ compileToFunction
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");






function initDev() {
    const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
    target.__VUE__ = true;
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.setDevtoolsHook)(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
    {
        (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.initCustomFormatter)();
    }
}

// This entry is the "full-build" that includes both the runtime
( true) && initDev();
const compileCache = Object.create(null);
function compileToFunction(template, options) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(template)) {
        if (template.nodeType) {
            template = template.innerHTML;
        }
        else {
            ( true) && (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(`invalid template option: `, template);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
        }
    }
    const key = template;
    const cached = compileCache[key];
    if (cached) {
        return cached;
    }
    if (template[0] === '#') {
        const el = document.querySelector(template);
        if (( true) && !el) {
            (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(`Template element not found or is empty: ${template}`);
        }
        // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's rendered
        // by the server, the template should not contain any user data.
        template = el ? el.innerHTML : ``;
    }
    const { code } = (0,_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__.compile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
        hoistStatic: true,
        onError(err) {
            if ((true)) {
                const message = `Template compilation error: ${err.message}`;
                const codeFrame = err.loc &&
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.generateCodeFrame)(template, err.loc.start.offset, err.loc.end.offset);
                (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(codeFrame ? `${message}\n${codeFrame}` : message);
            }
            else {}
        }
    }, options));
    // The wildcard import results in a huge object with every export
    // with keys that cannot be mangled, and can be quite heavy size-wise.
    // In the global build we know `Vue` is available globally so we can avoid
    // the wildcard object.
    const render = ( new Function('Vue', code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__));
    render._rc = true;
    return (compileCache[key] = render);
}
(0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.registerRuntimeCompiler)(compileToFunction);




/***/ }),

/***/ "./node_modules/vue3-click-away/dist/module.js":
/*!*****************************************************!*
  !*** ./node_modules/vue3-click-away/dist/module.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "directive": () => /* binding */ directive,
/* harmony export */   "mixin": () => /* binding */ mixin
/* harmony export */ });
const clickEventType = document.ontouchstart !== null ? "click" : "touchstart";
const UNIQUE_ID = "__vue_click_away__";

const onMounted = function (el, binding, vnode) {
  onUnmounted(el);
  let vm = vnode.context;
  let callback = binding.value;
  let nextTick = false;
  setTimeout(function () {
    nextTick = true;
  }, 0);

  el[UNIQUE_ID] = function (event) {
    if ((!el || !el.contains(event.target)) && callback && nextTick && typeof callback === "function") {
      return callback.call(vm, event);
    }
  };

  document.addEventListener(clickEventType, el[UNIQUE_ID], false);
};

const onUnmounted = function (el) {
  document.removeEventListener(clickEventType, el[UNIQUE_ID], false);
  delete el[UNIQUE_ID];
};

const onUpdated = function (el, binding, vnode) {
  if (binding.value === binding.oldValue) {
    return;
  }

  onMounted(el, binding, vnode);
};

const plugin = {
  install: function (app) {
    app.directive('click-away', directive);
  }
};
const directive = {
  mounted: onMounted,
  updated: onUpdated,
  unmounted: onUnmounted
};
const mixin = {
  directives: {
    ClickAway: directive
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);

//# sourceMappingURL=module.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/site": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/site.js"],
/******/ 			["./resources/css/tailwind.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;