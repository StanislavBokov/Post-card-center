import React from 'react';
import { render, screen } from '@testing-library/react';
import { ModalText } from './ModalText';
import userEvent from "@testing-library/user-event";
import { useModalTextOptions } from './useModalTextOptions';

jest.mock('./useModalTextOptions', () => ({
  useModalTextOptions: jest.fn(() => ({
    setTextField: jest.fn(),
  }))
}))

describe('App container', () => {
  it('should render input', () => {
    render(<ModalText />);
    const component = screen.getByTestId('input');
    expect(component).toBeInTheDocument()
  })
  it('should render button-submit', () => {
    render(<ModalText />);
    const component = screen.getByTestId('button-submit');
    expect(component).toBeInTheDocument()
  });

  describe('click', () => {
    it('should call openTextModal', () => {
      const setTextField = jest.fn();
      (useModalTextOptions as jest.Mock).mockImplementationOnce(() => ({
        setTextField,
      }))
      userEvent.click(screen.getByTestId('button-submit'))
      expect(setTextField).toBeCalled()
    })
  })
});

