'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

require('./style/index.css');

var _excluded = [
  'type',
  'className',
  'block',
  'shape',
  'size',
  'href',
  'loading',
  'outline',
  'icon',
  'children',
];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
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

var Button = function Button(props) {
  var _cn;

  var _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    className = props.className,
    block = props.block,
    shape = props.shape,
    size = props.size,
    href = props.href,
    loading = props.loading,
    outline = props.outline,
    icon = props.icon,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);

  var is_outline = (0, _react.useMemo)(
    function () {
      return outline !== null && outline !== void 0 ? outline : false;
    },
    [outline],
  );
  var is_block = (0, _react.useMemo)(
    function () {
      return block !== null && block !== void 0 ? block : false;
    },
    [block],
  );
  var is_shape = (0, _react.useMemo)(
    function () {
      return shape !== null && shape !== void 0 ? shape : false;
    },
    [shape],
  );
  var disabled = (0, _react.useMemo)(
    function () {
      var _props$disabled;

      return (_props$disabled = props.disabled) !== null && _props$disabled !== void 0
        ? _props$disabled
        : false;
    },
    [props.disabled],
  ); // console.log(outline, 'outline');

  var cls = (0, _classnames.default)(
    className,
    'sp-btn',
    ((_cn = {}),
    _defineProperty(_cn, 'sp-btn-'.concat(type), type),
    _defineProperty(_cn, 'sp-btn-'.concat(size), size),
    _defineProperty(_cn, 'sp-btn-disabled', disabled),
    _defineProperty(_cn, 'sp-btn-outline', is_outline),
    _defineProperty(_cn, 'sp-btn-block', is_block),
    _defineProperty(_cn, 'sp-btn-shape', is_shape),
    _cn),
  );

  var iconBox = function iconBox() {
    if (icon) {
      return /*#__PURE__*/ _react.default.cloneElement(icon, {
        className: 'sp-btn-icon',
        size: 16,
      });
    }

    return null;
  };

  var textBox = function textBox() {
    return /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: '',
      },
      children,
    );
  };

  var content = function content() {
    if (type === 'link' && href) {
      return /*#__PURE__*/ _react.default.createElement(
        'a',
        _objectSpread(
          {
            href: href,
          },
          rest,
        ),
        children,
      );
    }

    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'sp-btn-content',
      },
      iconBox(),
      textBox(),
    );
  };

  return /*#__PURE__*/ _react.default.createElement(
    'button',
    _objectSpread(
      {
        className: cls,
      },
      rest,
    ),
    content(),
  );
};

var _default = Button;
exports.default = _default;
