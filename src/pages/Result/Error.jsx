import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text, Title } = Typography;
export const Error = () => {
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
                    Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.
                </Text>
                <Button onClick={handleClick} data-test-id='registration-retry-button'>
                    Повторить
                </Button>
            </div>
        </div>
    );
};
