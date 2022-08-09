import {action, makeObservable, observable} from "mobx";


class TextStore {
    value: string  = ''
   
    setValue(value: string) {
        this.value = value
    }

    constructor() {
        this.setValue = this.setValue.bind(this)
        makeObservable(this, {
            value: observable,
            setValue: action
        })
    }
}
export const textStore = new TextStore()
