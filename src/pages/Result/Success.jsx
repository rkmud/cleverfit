import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const Success = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.conflictError}>
                <div className={styles.icon}>
                    <CheckCircleFilled />
                </div>
                <Title>Регистрация успешна</Title>
                <Text>
                    Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и
                    пароль.
                </Text>
                <Button onClick={handleClick} data-test-id='registration-enter-button'>
                    Войти
                </Button>
            </div>
        </div>
    );
};
