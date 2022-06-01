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
    </div>
  </div>
);