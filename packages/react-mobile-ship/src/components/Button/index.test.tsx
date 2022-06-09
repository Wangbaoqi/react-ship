import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  it('render Button with default', () => {
    const msg = 'dumi';
    const { container, queryByText } = render(<Button >{msg}</Button>);
    const el = container.firstChild;

    console.log(container.firstChild?.nodeName);
    
    // 断言msg是否在document中
    expect(queryByText(msg)).toBeInTheDocument();
    expect(el?.nodeName).toEqual('BUTTON');
    expect(el).toHaveClass('sp-btn');
  });

  it('render Button with className', () => {

  });

  it('render Button with block', () => {
    
  });
  it('render Button with shape', () => {
    
  });
  it('render Button with size', () => {
    
  });
  it('render Button with text Button', () => {
    
  });
  it('render Button with type', () => {
    
  });
  it('render Button with loading', () => {
    
  });
  it('render Button with outline', () => {
    
  });
  it('render Button with icon', () => {
    
  })

});
