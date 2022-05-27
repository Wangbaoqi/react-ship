import React from 'react';
import { Button } from 'react-ship';

import './type.less';

export default () => (
  <div className='btn-box'>
    <p>按钮类型</p>
    <div className='type-box'>
      <Button type='primary'>主要按钮</Button>
      <Button type='info'>信息按钮</Button>
      <Button type='danger'>危险按钮</Button>
      <Button type='warning'>警告按钮</Button>
    </div>
  </div>
);