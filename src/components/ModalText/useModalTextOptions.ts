import {useCallback, useMemo} from "react";
import {useStoreContext} from "../../store-provider/StoreContext";

export const useModalTextOptions = () => {
    const { text: { value, setValue }} = useStoreContext()
    
    const setTextField = useCallback((value: string) => {
        setValue(value)
    },[setValue])
   
    return useMemo(() => ({
        setTextField,
        value
    }), [setTextField])
}
