import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Breadcrumb } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from './HeaderBlock.module.scss';
const { Title } = Typography;
const { Header } = Layout;
export const HeaderBlock: React.FC = () => {
    return (
        <Header className={styles.header}>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.headerWrapper}>
                <Title>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </Title>
                <Link to='/'>
                    <SettingOutlined /> <p>Настройки</p>
                </Link>
            </div>
        </Header>
    );
};
