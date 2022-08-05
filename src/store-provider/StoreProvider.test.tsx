import {FC} from "react";
import {useStoreContext} from "./StoreContext";
import {mainStore} from "../store";
import {render, screen} from "@testing-library/react";
import {StoreProvider} from "./StoreProvider";
import {modalStore} from "../store/modal-store";

describe('Store provider', () => {
    afterAll(() => {
        modalStore.setModal(null)
    })
    it('should provide store to children', () => {
        const modal = 'add-text'
        mainStore.modal.activeModal = modal
        const Component: FC = () => {
            const {modal: {activeModal}} = useStoreContext()
            return <>{activeModal}</>
        }
        render(<StoreProvider><Component/></StoreProvider>)
        expect(screen.getByText(modal)).toBeInTheDocument()
    })
})
