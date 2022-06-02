import React from 'react';
import { Button } from 'react-ship';

import './type.less';

export default () => (
  <div className='btn-box'>
    <p>禁用按钮</p>
    <div className='type-box'>
      <Button disabled type='primary'>主要按钮</Button>
      <Button disabled type='info'>信息按钮</Button>
      <Button disabled type='danger'>危险按钮</Button>
      <Button disabled type='warning'>警告按钮</Button>
      <Button disabled type='text'>text 按钮</Button>
      <Button disabled type='link' href='https://wangbaoqi.tech'>link 按钮</Button>
      <Button disabled>禁用按钮</Button>
    </div>
  </div>
);