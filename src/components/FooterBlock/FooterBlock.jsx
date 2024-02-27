import { Layout, Card, Space, Button } from 'antd';
import React from 'react';
const { Meta } = Card;
import styles from './FooterBlock.module.scss';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Footer } = Layout;

export const FooterBlock = () => {
    return (
        <Footer className={styles.footer}>
            <Button>Смотреть отзывы</Button>
            <Card
                actions={[
                    <Space>
                        <AndroidFilled />
                        Android OS
                    </Space>,
                    <Space>
                        <AppleFilled />
                        Apple IOS
                    </Space>,
                ]}
            >
                <div className={styles.card}>
                    <Meta title='Скачать на телефон' description='Доступно в PRO-тарифе' />
                </div>
            </Card>
        </Footer>
    );
};
