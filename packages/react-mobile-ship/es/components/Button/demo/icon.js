import React from 'react';
import { Button } from 'react-mobile-ship';
import { Bell, Bookmark, AlertCircle } from 'react-feather';
import "./type.css";
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    className: 'btn-box'
  }, /*#__PURE__*/React.createElement("p", null, "\u56FE\u6807\u6309\u94AE"), /*#__PURE__*/React.createElement("div", {
    className: 'type-box'
  }, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Bell, null),
    type: 'primary'
  }, "\u6309\u94C3"), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Bookmark, null),
    type: 'info'
  }, "\u4E66\u7B7E"), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(AlertCircle, null),
    type: 'warning',
    outline: true
  }, "\u8B66\u544A\u56FE\u6807")));
});