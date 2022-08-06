import {modalStore} from "../../store/modal-store";
import {useToolbarOptions} from "./useToolbarOptions";
import {renderHook, waitFor} from "@testing-library/react";
import {StoreProvider} from "../../store-provider/StoreProvider";
import {FC, PropsWithChildren} from "react";

describe('useToolbarOptions', () => {
    it('should set active modal to add-text', () => {
        const spy = jest.spyOn(modalStore, 'setModal')
        const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
            <StoreProvider>{children}</StoreProvider>
        )
        spy.mockImplementationOnce(() => {})
        const {
        result: {
            current: {
                    openTextModal
                }
            }
        } = renderHook(() => useToolbarOptions(), {wrapper})
        openTextModal()
        expect(spy).toBeCalledWith('add-text')
    })
    it('should set active modal to add-img', () => {
        const spy = jest.spyOn(modalStore, 'setModal')
        const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
            <StoreProvider>{children}</StoreProvider>
        )
        spy.mockImplementationOnce(() => {})
        const {
            result: {
                current: {
                    openImgModal
                }
            }
        } = renderHook(() => useToolbarOptions(), {wrapper})
        openImgModal()
        expect(spy).toBeCalledWith('add-img')
    })

    it('should set active modal to add-bg', () => {
        const spy = jest.spyOn(modalStore, 'setModal')
        const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
            <StoreProvider>{children}</StoreProvider>
        )
        spy.mockImplementationOnce(() => {})
        const {
            result: {
                current: {
                    openBgModal
                }
            }
        } = renderHook(() => useToolbarOptions(), {wrapper})
        openBgModal()
        expect(spy).toBeCalledWith('add-bg')
    })

})
