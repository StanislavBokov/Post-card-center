import { render, screen } from '@testing-library/react';
import { Toolbar } from './Toolbar';
import userEvent from "@testing-library/user-event";
import {useToolbarOptions} from "./useToolbarOptions";
jest.mock('./useToolbarOptions', () => ({
  useToolbarOptions: jest.fn(() => ({
    openTextModal: jest.fn(),
    openImgModal: jest.fn(),
    openBgModal: jest.fn(),
  }))
}))
describe('Toolbar container', () => {
  it('should render toolbar', () => {
    (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
      openTextModal: jest.fn(),
      openImgModal: jest.fn(),
      openBgModal: jest.fn(),
    }))
    render(<Toolbar />);
    const component = screen.getByTestId('toolbar');
    expect(component).toBeInTheDocument()
  })
  it('should render background', () => {
    (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
      openTextModal: jest.fn(),
      openImgModal: jest.fn(),
      openBgModal: jest.fn(),
    }))
    render(<Toolbar />);
    const component = screen.getByTestId('btn-background');
    expect(component).toBeInTheDocument()
  })
  it('should render text', () => {
    (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
      openTextModal: jest.fn(),
      openImgModal: jest.fn(),
      openBgModal: jest.fn(),
    }))
    render(<Toolbar />);
    const component = screen.getByTestId('btn-text');
    expect(component).toBeInTheDocument()
  })
  it('should render picture', () => {
    (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
      openTextModal: jest.fn(),
      openImgModal: jest.fn(),
      openBgModal: jest.fn(),
    }))
    render(<Toolbar />);
    const component = screen.getByTestId('btn-picture');
    expect(component).toBeInTheDocument()
  })
  describe('click', () => {
    it('should call openTextModal', () => {
      const openTextModal = jest.fn();
      (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
        openTextModal,
        openImgModal: jest.fn(),
        openBgModal: jest.fn(),
      }))
      render(<Toolbar />);
      userEvent.click(screen.getByTestId('btn-text'))
      expect(openTextModal).toBeCalled()
    })
    it('should call openImgModal', () => {
      const openImgModal = jest.fn();
      (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
        openTextModal: jest.fn(),
        openImgModal,
        openBgModal: jest.fn(),
      }));
      render(<Toolbar />);
      userEvent.click(screen.getByTestId('btn-picture'))
      expect(openImgModal).toBeCalled()
    })
    it('should call openBgModal', () => {
      const openBgModal = jest.fn();
      (useToolbarOptions as jest.Mock).mockImplementationOnce(() => ({
        openTextModal: jest.fn(),
        openBgModal,
        openImgModal: jest.fn(),
      }));
      render(<Toolbar />);
      userEvent.click(screen.getByTestId('btn-background'))
      expect(openBgModal).toBeCalled()
    })
  })
});
