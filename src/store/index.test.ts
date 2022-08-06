import {mainStore} from "./index";

describe('mainStore', () => {
    it('should have modalStore', () => {
        expect(mainStore.modal).toBeDefined()
    })
})
