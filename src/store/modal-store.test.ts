import {modalStore} from "./modal-store";
describe('modalStore', () => {
    afterAll(() => {
        modalStore.setModal(null)
    })
    it('should return object with activeModal property and setModal method', () => {
        expect(modalStore).toEqual(expect.objectContaining<Partial<typeof modalStore>>({activeModal: null}))
        expect(typeof modalStore.setModal).toEqual('function')
    })
    it.each(['add-text' , 'add-img' , 'add-bg' , 'send-postcard' , 'send-postcard-success'] as const)('should set activeModal to %s after setModal method', (modal) => {
        modalStore.setModal(modal)
        expect(modalStore.activeModal).toEqual(modal)
    })
    it('should restrict set activeModal to unknown modal type', () => {
        const wrongModalType = 'not-a-modal'
        modalStore.setModal(wrongModalType as any)
        expect(modalStore.activeModal).not.toEqual(wrongModalType)
    })
})
