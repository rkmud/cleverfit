import { Layout } from 'antd';

import React from 'react';
import './main-page.scss';
import styles from './style.module.scss';
import { SiderBlock } from '@components/SiderBlock/SiderBlock';
import { HeaderBlock } from '@components/HeaderBlock/HeaderBlock';
import { FooterBlock } from '@components/FooterBlock/FooterBlock';
import { ContentBlock } from '@components/ContentBlock/ContentBlock';
import { Navigate, useLocation } from 'react-router-dom';
import { selectCurrentToken } from '@redux/slice/auth/authSlice';
import { useSelector } from 'react-redux';

export const MainPage = () => {
    const token = useSelector(selectCurrentToken);
    console.log(token)
    const location = useLocation();
    return token ? (
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
    ) : (
        <Navigate to='/auth' state={{ from: location }} replace />
    );
};
