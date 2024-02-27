import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const ConflictError = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/auth/registration');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.conflictError}>
                <CloseCircleFilled />
                <Title>Данные не сохранились</Title>
                <Text>
                    Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому
                    e-mail.
                </Text>
                <Button onClick={handleClick} data-test-id='registration-back-button'>
                    Назад к регистрации
                </Button>
            </div>
        </div>
    );
};
