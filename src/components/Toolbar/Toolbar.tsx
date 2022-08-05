import { FC } from "react";
import { Sidebar } from '@consta/uikit/Sidebar';
import { Button } from '@consta/uikit/Button';
import styles from './styles.module.scss'
import { Text } from '@consta/uikit/Text';


export const Toolbar:FC = () => {
    return (
        <div data-testid="toolbar">
        <Sidebar
            
            isOpen={true}
            position="left"
            hasOverlay={false}
            size="1/3"
        >   
            <Sidebar.Content className={styles.content}>
                <Text align="center" size="2xl">Выберете действие</Text>
                <Button 
                    data-testid="btn-text"
                    label="Текст" 
                    view="secondary"
                    size="l"
                    className={styles.btns}
                    width="full"
                />
                <Button 
                    data-testid="btn-background"
                    label="Фон" 
                    view="secondary"
                    size="l"
                    className={styles.btns}
                    width="full"
                />
                <Button 
                    data-testid="btn-picture"
                    label="Картинка" 
                    view="secondary"
                    size="l"
                    className={styles.btns}
                    width="full"
                />
            </Sidebar.Content>       
        </Sidebar>    
        </div>
    )
}