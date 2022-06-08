import React from 'react';
import { Button } from 'react-ship';

import './type.less';

export default () => (
  <div className='btn-box'>
    <p>按钮尺寸</p>
    <div className='type-box'>
      <Button size='lg'>大号按钮</Button>
      <Button size='normal'>普通按钮</Button>
      <Button size='sm'>小号按钮</Button>
      <Button size='normal' outline>普通按钮</Button>
      <Button block className='custom-size'>自定义按钮尺寸</Button>
      <Button block outline className='custom-size'>自定义弱按钮尺寸</Button>
    </div>
  </div>
);