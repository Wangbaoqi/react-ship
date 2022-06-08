"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMobileShip = require("react-mobile-ship");

var _reactFeather = require("react-feather");

require("./type.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'btn-box'
  }, /*#__PURE__*/_react.default.createElement("p", null, "\u5F62\u72B6\u6309\u94AE"), /*#__PURE__*/_react.default.createElement("div", {
    className: 'type-box'
  }, /*#__PURE__*/_react.default.createElement(_reactMobileShip.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFeather.Bell, null),
    type: 'primary',
    shape: true
  }, "\u6309\u94C3"), /*#__PURE__*/_react.default.createElement(_reactMobileShip.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFeather.Bookmark, null),
    type: 'info'
  }, "\u4E66\u7B7E"), /*#__PURE__*/_react.default.createElement(_reactMobileShip.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFeather.AlertCircle, null),
    type: 'warning',
    outline: true,
    shape: true
  }, "\u8B66\u544A\u56FE\u6807")));
};

exports.default = _default;