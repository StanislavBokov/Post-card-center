import { FC, useState, useEffect } from 'react'
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { validate, isEmptyErrors } from './helper';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import { useStoreContext } from '../../store-provider/StoreContext';
import { useModalTextOptions } from './useModalTextOptions'


export const ModalText:FC = observer(() => {
    const { modal: { setModal }} = useStoreContext()
    const { value, setTextField } = useModalTextOptions()
    type Data = { [key:string]: { value: string, isBlur: boolean } }
  
    const [data, setData] = useState<Data>({
        text: { value, isBlur: false },
      });
    const [errors, setErrors] = useState({ text: '' })
    
    const handleChange = (target:any ) => {  
        setData((prevState:Data) => ({
          ...prevState,
          [target.name]: { ...data[target.name], value: target.value  }
        }));
      };
    const handleBlur = ({ target }:any) => {     
        setData((prevState:Data) => ({
            ...prevState,
            [target.name]: { ...data[target.name], isBlur: true  }
        }));
    };
    useEffect(() => {
    validate(data, setErrors)
    }, [data])

    const handleSubmit = () => {
      setTextField(data.text.value)
      setModal(null)
    }
    return (
        <div className={styles.modalTextContainer}>
            <div className={styles.textField}>
            <TextField 
                onChange={handleChange} 
                value={data.text.value} 
                type="text" 
                label="Введите текст" 
                name="text"
                onBlur={handleBlur}
                status={data.text.isBlur && errors.text && "alert"}
                size="l"
                data-testid="input"
            />
           {data.text.isBlur && <span className={styles.errorMessage}>{errors.text}</span>}
        </div>
        <Button
            size="m"
            view="primary"
            label="OK"
            width="default"
            disabled={isEmptyErrors(errors)}
            onClick={handleSubmit}
            data-testid="button-submit"
      />
        </div>
    )
})