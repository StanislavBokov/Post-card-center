import {useCallback, useMemo} from "react";
import {useStoreContext} from "../../store-provider/StoreContext";

export const useToolbarOptions = () => {
    const {modal: {setModal}} = useStoreContext()
    const openTextModal = useCallback(() => {
        setModal('add-text')
    },[setModal])
    const openImgModal = useCallback(() => {
        setModal('add-img')
    },[setModal])
    const openBgModal = useCallback(() => {
        setModal('add-bg')
    },[setModal])
    return useMemo(() => ({
        openTextModal,
        openImgModal,
        openBgModal
    }), [openBgModal, openImgModal, openTextModal])
}
