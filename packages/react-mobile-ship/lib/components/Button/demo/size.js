'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactMobileShip = require('react-mobile-ship');

require('./type.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = function _default() {
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'btn-box',
    },
    /*#__PURE__*/ _react.default.createElement('p', null, '\u6309\u94AE\u5C3A\u5BF8'),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'type-box',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          size: 'lg',
        },
        '\u5927\u53F7\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          size: 'normal',
        },
        '\u666E\u901A\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          size: 'sm',
        },
        '\u5C0F\u53F7\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          size: 'normal',
          outline: true,
        },
        '\u666E\u901A\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          block: true,
          className: 'custom-size',
        },
        '\u81EA\u5B9A\u4E49\u6309\u94AE\u5C3A\u5BF8',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          block: true,
          outline: true,
          className: 'custom-size',
        },
        '\u81EA\u5B9A\u4E49\u5F31\u6309\u94AE\u5C3A\u5BF8',
      ),
    ),
  );
};

exports.default = _default;
