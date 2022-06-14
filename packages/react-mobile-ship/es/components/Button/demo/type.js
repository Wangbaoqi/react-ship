import React from 'react';
import { Button } from 'react-mobile-ship';
import './type.css';
export default (function () {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'btn-box',
    },
    /*#__PURE__*/ React.createElement('p', null, '\u6309\u94AE\u7C7B\u578B'),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'type-box',
      },
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'primary',
        },
        '\u4E3B\u8981\u4E3B\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'primary',
          outline: true,
        },
        '\u4E3B\u8981\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'primary',
          className: 'custom-outline',
        },
        '\u81EA\u5B9A\u4E49\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'info',
        },
        '\u4FE1\u606F\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'info',
          outline: true,
        },
        '\u4FE1\u606F\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'danger',
        },
        '\u5371\u9669\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'danger',
          outline: true,
        },
        '\u5371\u9669\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'warning',
        },
        '\u8B66\u544A\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'warning',
          outline: true,
        },
        '\u8B66\u544A\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(Button, null, '\u9ED8\u8BA4\u6309\u94AE'),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          outline: true,
        },
        '\u9ED8\u8BA4\u5F31\u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'text',
        },
        'text \u6309\u94AE',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          type: 'link',
          href: 'https://wangbaoqi.tech',
        },
        'link \u6309\u94AE',
      ),
    ),
  );
});
