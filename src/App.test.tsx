import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App container', () => {
  it('should render header', () => {
    render(<App />);
    const component = screen.getByTestId('header');
    expect(component).toBeInTheDocument()
  })
  it('should render main', () => {
    render(<App />);
    const component = screen.getByTestId('main');
    expect(component).toBeInTheDocument()
  });
  it('should render footer', () => {
    render(<App />);
    const component = screen.getByTestId('footer');
    expect(component).toBeInTheDocument()
  });
});
