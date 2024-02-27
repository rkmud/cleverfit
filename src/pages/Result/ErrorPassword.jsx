import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const ErrorPassword = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/auth/change-password');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.conflictError}>
                <CloseCircleFilled />
                <Title>Данные не сохранились</Title>
                <Text>Что-то пошло не так. Попробуйте ещё раз.</Text>
                <Button onClick={() => handleClick()} data-test-id='change-retry-button'>
                    Повторить
                </Button>
            </div>
        </div>
    );
};
