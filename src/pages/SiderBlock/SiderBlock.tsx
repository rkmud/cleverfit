import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Image, Menu, Avatar, Divider } from 'antd';
import React, { useState } from 'react';
import logo from '/logo.svg';
import exitIcon from '/Exit.svg';
import logoMin from '/logoMin.svg';
import styles from './SiderBlock.module.scss';
import { MenuBlock } from '../MenuBlock/MenuBlock';
const { Sider } = Layout;
export const SiderBlock: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onBreakpoint = (broken: boolean) => {
        if (broken) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    };
    return (
        <div className={styles.sider}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint='xxl'
                collapsedWidth={64}
                width={208}
                onBreakpoint={onBreakpoint}
            >
                {collapsed ? <Image src={logoMin} alt='' /> : <Image src={logo} />}

                <MenuBlock />
                <Button
                    data-test-id={window.innerWidth <= 360 ? 'sider-switch-mobile' : 'sider-switch'}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Button>
                <div className={styles.exit}>
                    <Divider />
                    <Menu>
                        <Menu.Item key='5' icon={<Avatar src={exitIcon} />}>
                            Выход
                        </Menu.Item>
                    </Menu>
                </div>
            </Sider>
        </div>
    );
};
