import React from 'react';
import { Button } from 'react-mobile-ship';
import './type.css';
export default (function () {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'btn-box',
    },
    /*#__PURE__*/ React.createElement('p', null, '\u6309\u94AE\u5C3A\u5BF8'),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'type-box',
      },
      /*#__PURE__*/ React.createElement(
        Button,
        {
          size: 'lg',
        },
        '\u5927\u53F7\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          size: 'normal',
        },
        '\u666E\u901A\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          size: 'sm',
        },
        '\u5C0F\u53F7\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          size: 'normal',
          outline: true,
        },
        '\u666E\u901A\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          block: true,
          className: 'custom-size',
        },
        '\u81EA\u5B9A\u4E49\u6309\u94AE\u5C3A\u5BF8',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          block: true,
          outline: true,
          className: 'custom-size',
        },
        '\u81EA\u5B9A\u4E49\u5F31\u6309\u94AE\u5C3A\u5BF8',
      ),
    ),
  );
});
