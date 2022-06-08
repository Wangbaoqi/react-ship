"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactShip = require("react-ship");

require("./type.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'btn-box'
  }, /*#__PURE__*/_react.default.createElement("p", null, "\u6309\u94AE\u7C7B\u578B"), /*#__PURE__*/_react.default.createElement("div", {
    className: 'type-box'
  }, /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'primary'
  }, "\u4E3B\u8981\u4E3B\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'primary',
    outline: true
  }, "\u4E3B\u8981\u5F31\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'primary',
    className: 'custom-outline'
  }, "\u81EA\u5B9A\u4E49\u5F31\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'info'
  }, "\u4FE1\u606F\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'info',
    outline: true
  }, "\u4FE1\u606F\u5F31\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'danger'
  }, "\u5371\u9669\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'danger',
    outline: true
  }, "\u5371\u9669\u5F31\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'warning'
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'warning',
    outline: true
  }, "\u8B66\u544A\u5F31\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    outline: true
  }, "\u9ED8\u8BA4\u5F31\u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'text'
  }, "text \u6309\u94AE"), /*#__PURE__*/_react.default.createElement(_reactShip.Button, {
    type: 'link',
    href: 'https://wangbaoqi.tech'
  }, "link \u6309\u94AE")));
};

exports.default = _default;