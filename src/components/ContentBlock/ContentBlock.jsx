import { Layout, Typography, Col, Row, List, Card, Avatar } from 'antd';
import { CalendarTwoTone, HeartFilled } from '@ant-design/icons';

import styles from './ContentBlcok.module.scss';
import profileIcon from '../../assets/images/profile.svg';
const { Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;
export const ContentBlock = () => {
    return (
        <Content className={styles.container}>
            <Row>
                <Col span={24} className={styles.list}>
                    <List>
                        С CleverFit ты сможешь:
                        <List.Item>
                            — планировать свои тренировки на календаре, выбирая тип и уровень
                            нагрузки;
                        </List.Item>
                        <List.Item>
                            — отслеживать свои достижения в разделе статистики, сравнивая свои
                            результаты с нормами и рекордами;
                        </List.Item>
                        <List.Item>
                            — создавать свой профиль, где ты можешь загружать свои фото, видео и
                            отзывы о тренировках;
                        </List.Item>
                        <List.Item>
                            — выполнять расписанные тренировки для разных частей тела, следуя
                            подробным инструкциям и советам профессиональных тренеров.
                        </List.Item>
                    </List>
                </Col>
            </Row>
            <Row>
                <Col span={24} className={styles.description}>
                    <Text>
                        CleverFit — это не просто приложение, а твой личный помощник
                        в&#160;мире&#160;фитнеса. Не откладывай на завтра — начни тренироваться уже
                        сегодня!
                    </Text>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className={styles.cards}>
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <Card title='Расписать тренировки'>
                        <Meta avatar={<HeartFilled />} title='Тренировки' />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <Card title='Назначить календарь'>
                        <Meta
                            avatar={<CalendarTwoTone twoToneColor={['#2F54EB', '#2F54EB']} />}
                            title='Календарь'
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <Card title='Заполнить профиль'>
                        <Meta avatar={<Avatar src={profileIcon} />} title='Профиль' />
                    </Card>
                </Col>
            </Row>
        </Content>
    );
};
