import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const SuccessPassword = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/auth');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.conflictError}>
                <div className={styles.icon}>
                    <CheckCircleFilled />
                </div>
                <Title>Пароль успешно изменен</Title>
                <Text>Теперь можно войти в аккаунт, используя свой логин и новый пароль</Text>
                <Button onClick={handleClick} data-test-id='change-entry-button'>
                    Войти
                </Button>
            </div>
        </div>
    );
};
