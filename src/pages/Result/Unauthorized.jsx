import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const Unauthorized = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/auth/login');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.mailError}>
                <CloseCircleFilled />
                <Title>Такой e-mail не зарегистрирован</Title>
                <Text>Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.</Text>
                <Button onClick={handleClick} data-test-id='check-retry-button'>
                    Попробовать снова
                </Button>
            </div>
        </div>
    );
};
