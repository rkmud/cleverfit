import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { WarningFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const Warning = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/auth/login');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.conflictError}>
                <div className={styles.warningIcon}>
                    <WarningFilled />
                </div>
                <Title>Вход не выполнень</Title>
                <Text>Что-то пошло не так. Попробуйте еще раз</Text>
                <Button onClick={handleClick} data-test-id='login-retry-button'>
                    Повторить
                </Button>
            </div>
        </div>
    );
};
