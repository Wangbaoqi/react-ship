import React from 'react';
import { Button } from 'react-mobile-ship';
import { Bell, Bookmark, AlertCircle } from 'react-feather';

import './type.less';

export default () => (
  <div className="btn-box">
    <p>形状按钮</p>
    <div className="type-box">
      <Button icon={<Bell />} type="primary" shape>
        按铃
      </Button>
      <Button icon={<Bookmark />} type="info">
        书签
      </Button>
      <Button icon={<AlertCircle />} type="warning" outline shape>
        警告图标
      </Button>
    </div>
  </div>
);
