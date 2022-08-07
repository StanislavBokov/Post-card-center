import { FC } from "react";
import {observer} from "mobx-react-lite";
import {useStoreContext} from "../../store-provider/StoreContext";
import { ModalText, ModalBackground, ModalImg } from "../../components";
import {modalStore} from "../../store/modal-store";
import { Modal } from '@consta/uikit/Modal';
import { Button } from '@consta/uikit/Button';
import styles from './styles.module.scss'

const modalsRecord: Record<Exclude<(typeof modalStore)['activeModal'], null>, FC> = {
    "add-text": observer(() => <ModalText />),
    "add-img": observer(() => <ModalImg />),
    "add-bg": observer(() => <ModalBackground />),
    "send-postcard": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup</div>),
    "send-postcard-success": observer(() => <div style={{position: 'fixed', width: 100, height: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>there should be modal markup</div>),
}
export const ModalContainer: FC = observer(() => {
    const {modal: {activeModal, setModal}} = useStoreContext()
    const Component = modalsRecord[activeModal!]

    return Component && 
    <Modal
        isOpen={true}
        hasOverlay={false}
        className={styles.modalContainer}
    >   
      <Component />  
      <Button
        size="m"
        view="secondary"
        label="Закрыть"
        width="default"
        onClick={() => setModal(null)}
        className={styles.closeBtn}
      />   
  </Modal>
})
