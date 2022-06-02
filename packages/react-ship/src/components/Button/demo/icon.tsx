import React from 'react';
import { Button } from 'react-ship';
import { Bell, Bookmark } from 'react-feather';


import './type.less';

export default () => (
  <div className='btn-box'>
    <p>图标按钮</p>
    <div className='type-box'>
      <Button icon={<Bell/>} type='primary'>按铃</Button>
      <Button icon={<Bookmark/>} type='info'>书签</Button>
    </div>
  </div>
);