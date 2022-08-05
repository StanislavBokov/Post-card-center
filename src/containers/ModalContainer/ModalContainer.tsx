import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useStoreContext} from "../../store-provider/StoreContext";
import {modalStore} from "../../store/modal-store";
const modalsRecord: Record<Exclude<(typeof modalStore)['activeModal'], null>, FC> = {
    "add-text": observer(() => <div>there should be modal markup</div>),
    "add-img": observer(() => <div>there should be modal markup</div>),
    "add-bg": observer(() => <div>there should be modal markup</div>),
    "send-postcard": observer(() => <div>there should be modal markup</div>),
    "send-postcard-success": observer(() => <div>there should be modal markup</div>),
}
export const ModalContainer: FC = observer(() => {
    const {modal: {activeModal}} = useStoreContext()
    const Component = modalsRecord[activeModal!]
    return Component && <div data-testid={activeModal}><Component /></div>
})
