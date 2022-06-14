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
    /*#__PURE__*/ _react.default.createElement('p', null, '\u7981\u7528\u6309\u94AE'),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'type-box',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'primary',
        },
        '\u4E3B\u8981\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'primary',
          outline: true,
        },
        '\u4E3B\u8981\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'info',
        },
        '\u4FE1\u606F\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'info',
          outline: true,
        },
        '\u4FE1\u606F\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'danger',
        },
        '\u5371\u9669\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'danger',
          outline: true,
        },
        '\u5371\u9669\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'warning',
        },
        '\u8B66\u544A\u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'text',
        },
        'text \u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
          type: 'link',
          href: 'https://wangbaoqi.tech',
        },
        'link \u6309\u94AE',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactMobileShip.Button,
        {
          disabled: true,
        },
        '\u7981\u7528\u6309\u94AE',
      ),
    ),
  );
};

exports.default = _default;
