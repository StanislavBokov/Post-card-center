import {modalStore} from "./modal-store";
import {textStore} from "./test-store";
import { backgroundStore } from "./background-store";
import {makeObservable, observable} from "mobx";

class MainStore {
    modal = modalStore
    text = textStore
    background = backgroundStore
    constructor() {
        makeObservable(this, {
            modal: observable.ref,
            text: observable.ref,
            background: observable.ref
        })
    }
}

export const mainStore: MainStore = new MainStore()
