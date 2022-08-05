import {modalStore} from "./modal-store";

class MainStore {
    modal = modalStore
}

export const mainStore = new MainStore()
