import React from 'react';
import { Button, Typography, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFilled } from '@ant-design/icons';
import styles from './styles.module.scss';
import errorImg from '../../assets/images/errorImg.svg';
const { Text, Title } = Typography;
export const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/auth/login');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.mailError}>
                <Image src={errorImg} preview={false} />
                <Title>Что-то пошло не так</Title>
                <Text>Произошла ошибка, попробуйте отправить форму ещё раз.</Text>
                <Button onClick={handleClick} data-test-id='check-back-button'>
                    Назад
                </Button>
            </div>
        </div>
    );
};
