import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App container', () => {
  it.each(['header',
    // 'main',
    // 'footer'
  ])
      // @ts-ignore
      ('should render header, main and %s', (componentId: string) => {
    render(<App />);
    const component = screen.getByTestId(componentId);
    expect(component).toBeInTheDocument()
  })

});
