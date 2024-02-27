import React from 'react';
import { Image, Tabs } from 'antd';
import styles from './FormBlock.module.scss';
import logoIcon from '../../assets/images/logo.svg';
import { Registration } from '@components/Registration/Registration';
import { Login } from '@components/Login/Login';
import { useNavigate } from 'react-router-dom';

export const FormBlock = () => {
    const navigate = useNavigate();
    const handleTabChange = (key) => {
        if (key === '1') {
            navigate('/auth/login');
        } else if (key === '2') {
            navigate('/auth/registration');
        }
    };
    const currentPath = location.pathname;
    return (
        <div className={styles.formWrapper}>
            <Image src={logoIcon} preview={false} />
            <div className={styles.form}>
                <Tabs
                    defaultActiveKey={currentPath === '/auth/registration' ? '2' : '1'}
                    onChange={handleTabChange}
                    items={[
                        {
                            label: `Вход`,
                            key: '1',
                            children: <Login />,
                        },
                        {
                            label: `Регистрация`,
                            key: '2',
                            children: <Registration />,
                        },
                    ]}
                />
            </div>
        </div>
    );
};
