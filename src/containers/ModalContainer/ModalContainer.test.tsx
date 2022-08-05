import {modalStore} from "../../store/modal-store";
import {render, screen, waitFor} from "@testing-library/react";
import {ModalContainer} from "./ModalContainer";
import {StoreProvider} from "../../store-provider/StoreProvider";

describe('ModalContainer', () => {
    afterEach(() => {
        modalStore.setModal(null)
    })
    it.each(['add-text' , 'add-img' , 'add-bg' , 'send-postcard' , 'send-postcard-success'] as const)('should react to modal change to %s action', async (modalType) => {
        render(<StoreProvider><ModalContainer /></StoreProvider>)
        modalStore.setModal(modalType)
        await screen.findByTestId(modalType)
    })
    it('should react to modal clear', async () => {
        modalStore.setModal('add-img')
        const {container, rerender} = render(<StoreProvider><ModalContainer /></StoreProvider>)
        modalStore.setModal(null)
        // @ts-ignore
        rerender()
        // eslint-disable-next-line testing-library/no-node-access
        await waitFor(() => expect(container.firstChild).toBeNull(), )
    })

})
