import React from 'react';
import { Button } from 'react-mobile-ship';
import './type.css';
export default (function () {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'btn-box',
    },
    /*#__PURE__*/ React.createElement('p', null, '\u7981\u7528\u6309\u94AE'),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'type-box',
      },
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'primary',
        },
        '\u4E3B\u8981\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'primary',
          outline: true,
        },
        '\u4E3B\u8981\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'info',
        },
        '\u4FE1\u606F\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'info',
          outline: true,
        },
        '\u4FE1\u606F\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'danger',
        },
        '\u5371\u9669\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'danger',
          outline: true,
        },
        '\u5371\u9669\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'warning',
        },
        '\u8B66\u544A\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'text',
        },
        'text \u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
          type: 'link',
          href: 'https://wangbaoqi.tech',
        },
        'link \u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: true,
        },
        '\u7981\u7528\u6309\u94AE',
      ),
    ),
  );
});
