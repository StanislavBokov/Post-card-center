import { FC } from 'react'
import { FileField } from '@consta/uikit/FileField';
import { Button } from '@consta/uikit/Button';

export const ModalImg:FC = () => {

    const chooseFile = ({ target }:any) => {
        console.log(target.files);
    }
    return (
        <FileField id="fileField" onChange={chooseFile}>{(props) => <Button {...props} label="Выбрать файлы" />}</FileField>
    )
}