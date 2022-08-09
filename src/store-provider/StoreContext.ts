import {createContext, useContext} from "react";
import {mainStore} from "../store";

export const StoreContext = createContext<typeof mainStore>({
    modal: {activeModal: null, setModal: () => {}},
    text: {value: '', setValue: () => {}}
})
export const useStoreContext = () => {
    return useContext(StoreContext)
}
