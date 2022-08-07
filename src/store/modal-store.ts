import {action, makeObservable, observable} from "mobx";

type OrNull<T> = null | T
type ModalType = OrNull<'add-text' | 'add-img' | 'add-bg' | 'send-postcard' | 'send-postcard-success'>
const modalsSet = new Set<ModalType>(['add-text' , 'add-img' , 'add-bg' , 'send-postcard' , 'send-postcard-success', null])
class ModalStore {
    activeModal: ModalType = null
    setModal(modal: ModalType) {
        if (modalsSet.has(modal)) {
            this.activeModal = modal
        }
    }
    constructor() {
        this.setModal = this.setModal.bind(this)
        makeObservable(this, {
            activeModal: observable,
            setModal: action
        })
    }
}
export const modalStore = new ModalStore()
