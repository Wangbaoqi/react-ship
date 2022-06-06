var _excluded = ["type", "className", "block", "shape", "size", "href", "loading", "outline", "icon", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo } from 'react';
import cn from 'classnames';
import './style/index.less';

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

  var is_outline = useMemo(function () {
    return outline !== null && outline !== void 0 ? outline : false;
  }, [outline]);
  var is_block = useMemo(function () {
    return block !== null && block !== void 0 ? block : false;
  }, [block]);
  var is_shape = useMemo(function () {
    return shape !== null && shape !== void 0 ? shape : false;
  }, [shape]);
  var disabled = useMemo(function () {
    var _props$disabled;

    return (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : false;
  }, [props.disabled]); // console.log(outline, 'outline');

  var cls = cn(className, 'sp-btn', (_cn = {}, _defineProperty(_cn, "sp-btn-".concat(type), type), _defineProperty(_cn, "sp-btn-".concat(size), size), _defineProperty(_cn, 'sp-btn-disabled', disabled), _defineProperty(_cn, 'sp-btn-outline', is_outline), _defineProperty(_cn, 'sp-btn-block', is_block), _defineProperty(_cn, 'sp-btn-shape', is_shape), _cn));

  var iconBox = function iconBox() {
    if (icon) {
      return /*#__PURE__*/React.cloneElement(icon, {
        className: 'sp-btn-icon',
        size: 16
      });
    }

    return null;
  };

  var textBox = function textBox() {
    return /*#__PURE__*/React.createElement("span", {
      className: ''
    }, children);
  };

  var content = function content() {
    if (type === 'link' && href) {
      return /*#__PURE__*/React.createElement("a", _objectSpread({
        href: href
      }, rest), children);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: 'sp-btn-content'
    }, iconBox(), textBox());
  };

  return /*#__PURE__*/React.createElement("button", _objectSpread({
    className: cls
  }, rest), content());
};

export default Button;