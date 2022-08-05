import { render, screen } from '@testing-library/react';
import { Toolbar } from './Toolbar';

describe('Toolbar container', () => {
  it('should render toolbar', () => {
    render(<Toolbar />);
    const component = screen.getByTestId('toolbar');
    expect(component).toBeInTheDocument()
  })
  it('should render background', () => {
    render(<Toolbar />);
    const component = screen.getByTestId('btn-background');
    expect(component).toBeInTheDocument()
  })
  it('should render text', () => {
    render(<Toolbar />);
    const component = screen.getByTestId('btn-text');
    expect(component).toBeInTheDocument()
  })
  it('should render picture', () => {
    render(<Toolbar />);
    const component = screen.getByTestId('btn-picture');
    expect(component).toBeInTheDocument()
  })
});
