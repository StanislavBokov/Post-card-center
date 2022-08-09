import { FC } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useStoreContext } from '../../store-provider/StoreContext';
import { Button } from '@consta/uikit/Button';
import styles from './styles.module.scss'

export const ModalBackground:FC = () => {
    const { background: { setBackground, colorState }} = useStoreContext()
    const [color, setColor] = useColor("hex", colorState.hex);
    
    const handleSubmit = () => {
        setBackground(color)
    }

    return (
        <div className={styles.wrapperColor}>
            <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
            <Button label="OK" className={styles.btn} onClick={() => handleSubmit()}/>
        </div>
    );
  
}