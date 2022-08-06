import {modalStore} from "./modal-store";
import {makeObservable, observable} from "mobx";

class MainStore {
    modal = modalStore
    constructor() {
        makeObservable(this, {
            modal: observable.ref
        })
    }
}

export const mainStore: MainStore = new MainStore()
