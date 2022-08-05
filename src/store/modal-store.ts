type OrNull<T extends any> = null | T
type ModalType = 'add-text' | 'add-img' | 'add-bg' | 'send-postcard' | 'send-postcard-success'
const modalsSet = new Set<ModalType>(['add-text' , 'add-img' , 'add-bg' , 'send-postcard' , 'send-postcard-success'])
class ModalStore {
    activeModal: OrNull<ModalType> = null
    setModal(modal: ModalType) {
        if (modalsSet.has(modal)) {
            this.activeModal = modal
        }
    }
    constructor() {
        // makeobservable
    }
}
export const modalStore = new ModalStore()
