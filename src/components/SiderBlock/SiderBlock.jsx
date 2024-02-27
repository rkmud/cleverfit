import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Image, Menu, Avatar, Divider } from 'antd';
import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import exitIcon from '../../assets/images/Exit.svg';
import logoMin from '../../assets/images/logoMin.svg';
import styles from './SiderBlock.module.scss';
import { MenuBlock } from '@components/MenuBlock/MenuBlock';
import { useDispatch } from 'react-redux';
import { logOut } from '@redux/slice/auth/authSlice';
const { Sider } = Layout;
export const SiderBlock = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const onBreakpoint = (broken) => {
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
                {collapsed ? (
                    <Image src={logoMin} alt='' preview={false} />
                ) : (
                    <Image src={logo} preview={false} />
                )}

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
                        <Menu.Item key='5' icon={<Avatar src={exitIcon} />} onClick={() => dispatch(logOut())}>
                            Выход
                        </Menu.Item>
                    </Menu>
                </div>
            </Sider>
        </div>
    );
};
