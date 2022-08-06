import {modalStore} from "../../store/modal-store";
import {useToolbarOptions} from "./useToolbarOptions";
import {act, renderHook, waitFor} from "@testing-library/react";
import {StoreProvider} from "../../store-provider/StoreProvider";
import {FC, PropsWithChildren} from "react";

describe('useToolbarOptions', () => {
    afterAll(() => {
        modalStore.setModal(null);
    })
    it('should set active modal to add-text', () => {
        const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
            <StoreProvider>{children}</StoreProvider>
        )
        const {
        result: {
            current: {
                    openTextModal
                }
            }
        } = renderHook(() => useToolbarOptions(), {wrapper})
        act(() => openTextModal())
        expect(modalStore.activeModal).toEqual('add-text')
    })
    it('should set active modal to add-img', () => {
        const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
            <StoreProvider>{children}</StoreProvider>
        )
        const {
            result: {
                current: {
                    openImgModal
                }
            }
        } = renderHook(() => useToolbarOptions(), {wrapper})
        act(() => openImgModal())
        expect(modalStore.activeModal).toEqual('add-img')
    })

    it('should set active modal to add-bg', () => {
        const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
            <StoreProvider>{children}</StoreProvider>
        )
        const {
            result: {
                current: {
                    openBgModal
                }
            }
        } = renderHook(() => useToolbarOptions(), {wrapper})
        act(() => openBgModal())
        expect(modalStore.activeModal).toEqual('add-bg')

    })

})
