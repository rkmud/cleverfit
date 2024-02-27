import { HeartFilled, TrophyFilled, CalendarTwoTone } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import React from 'react';
import styles from './MenuBlock.module.scss';
import profilIcon from '../../assets/images/profile.svg';
export const MenuBlock = () => {
    return (
        <div className={styles.menu}>
            <Menu>
                <Menu.Item key='1' icon={<CalendarTwoTone twoToneColor={['#061178', '#061178']} />}>
                    Календарь
                </Menu.Item>
                <Menu.Item key='2' icon={<HeartFilled />}>
                    Тренировки
                </Menu.Item>
                <Menu.Item key='3' icon={<TrophyFilled />}>
                    Достижения
                </Menu.Item>
                <Menu.Item key='4' icon={<Avatar src={profilIcon} />}>
                    Профиль
                </Menu.Item>
            </Menu>
        </div>
    );
};
