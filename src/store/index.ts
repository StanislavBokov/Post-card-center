import {modalStore} from "./modal-store";
import {textStore} from "./test-store";

import {makeObservable, observable} from "mobx";

class MainStore {
    modal = modalStore
    text = textStore
    constructor() {
        makeObservable(this, {
            modal: observable.ref,
            text: observable.ref
        })
    }
}

export const mainStore: MainStore = new MainStore()
