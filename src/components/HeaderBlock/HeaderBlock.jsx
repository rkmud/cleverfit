import React from 'react';
import { Layout, Typography, Breadcrumb, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from './HeaderBlock.module.scss';
const { Title } = Typography;
const { Header } = Layout;
export const HeaderBlock = () => {
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
                <Button>
                    <SettingOutlined /> Настройки
                </Button>
            </div>
        </Header>
    );
};
