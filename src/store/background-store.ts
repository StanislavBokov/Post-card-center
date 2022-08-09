import {action, makeObservable, observable} from "mobx";

class BackgroundStore {
    colorState: any  = {
        hex: '#121212', 
        rgb: { r: 18, g: 18, b: 18, a: undefined }, 
        hsv: { h: 0, s: 0, v: 7.0588235294117645, a: undefined }
    }
   
    setBackground(colorState: any) {
        this.colorState = colorState
    }

    constructor() {
        this.setBackground = this.setBackground.bind(this)
        makeObservable(this, {
            colorState: observable,
            setBackground: action
        })
    }
}
export const backgroundStore = new BackgroundStore()
