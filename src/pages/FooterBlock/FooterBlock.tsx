import { Layout, Card, Space, Anchor } from 'antd';
import React from 'react';
const { Meta } = Card;
import styles from './FooterBlock.module.scss';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Footer } = Layout;
const { Link } = Anchor;

export const FooterBlock: React.FC = () => {
    return (
        <Footer className={styles.footer}>
            <Link href='#' title='Смотреть отзывы'></Link>
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
