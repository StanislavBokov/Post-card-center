import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useStoreContext} from "../../store-provider/StoreContext";
import {modalStore} from "../../store/modal-store";
const modalsRecord: Record<Exclude<(typeof modalStore)['activeModal'], null>, FC> = {
    "add-text": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup text</div>),
    "add-img": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup img</div>),
    "add-bg": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup bg</div>),
    "send-postcard": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup</div>),
    "send-postcard-success": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup</div>),
}
export const ModalContainer: FC = observer(() => {
    const {modal: {activeModal}} = useStoreContext()
    const Component = modalsRecord[activeModal!]
    return Component && <div data-testid={activeModal}><Component /></div>
})
