import React from 'react';
import { Button } from 'react-ship';
import { Bell } from 'react-feather';


import './type.less';

export default () => (
  <div className='btn-box'>
    <p>图标按钮</p>
    <div className='type-box'>
      <Button icon={<Bell/>} >按铃</Button>
    </div>
  </div>
);