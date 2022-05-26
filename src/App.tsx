import React from 'react';

import { Button } from './components';

import './styles/index.scss';

import './index.scss'

function App() {
  return (
    <div className="App">
      <section className='btn-box'>
        <Button>button default</Button>
        <Button type='primary'>button primary</Button>
        <Button type='info' size='lg'>button info</Button>
        <Button type='danger' size='sm'>button danger</Button>
        <Button type='link' size='sm' target='_blank' href='https://wangbaoqi.tech'>button link</Button>
      </section>
      
    </div>
  );
}

export default App;
