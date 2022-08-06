import {FC, PropsWithChildren} from "react";
import {StoreContext} from "./StoreContext";
import {mainStore} from "../store";

export const StoreProvider:FC<PropsWithChildren<{}>> = ({children}) => {
    return <StoreContext.Provider value={mainStore}>{children}</StoreContext.Provider>
}
