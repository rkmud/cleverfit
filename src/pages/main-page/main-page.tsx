import { Layout } from 'antd';

import React from 'react';
import './main-page.scss';
import styles from './style.module.scss';
import { HeaderBlock } from '../HeaderBlock/HeaderBlock';
import { SiderBlock } from '../SiderBlock/SiderBlock';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { FooterBlock } from '../FooterBlock/FooterBlock';

export const MainPage: React.FC = () => {
    
    return (
        <div className={styles.app} data-test-id='app'>
            <Layout>
                <SiderBlock />
                <Layout>
                    <HeaderBlock />
                    <ContentBlock />
                    <FooterBlock />
                </Layout>
            </Layout>
        </div>
    );
};
