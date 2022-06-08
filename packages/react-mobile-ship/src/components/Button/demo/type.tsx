import React from 'react';
import { Button } from 'react-mobile-ship';

import './type.less';

export default () => (
  <div className='btn-box'>
    <p>按钮类型</p>
    <div className='type-box'>
      <Button type='primary'>主要主按钮</Button>
      <Button type='primary' outline>主要弱按钮</Button>
      <Button type='primary' className='custom-outline'>自定义弱按钮</Button>
      <Button type='info'>信息按钮</Button>
      <Button type='info' outline>信息弱按钮</Button>
      <Button type='danger'>危险按钮</Button>
      <Button type='danger' outline>危险弱按钮</Button>
      <Button type='warning'>警告按钮</Button>
      <Button type='warning' outline>警告弱按钮</Button>
      <Button>默认按钮</Button>
      <Button outline>默认弱按钮</Button>
      <Button type='text'>text 按钮</Button>
      <Button type='link' href='https://wangbaoqi.tech'>link 按钮</Button>
    </div>
  </div>
);