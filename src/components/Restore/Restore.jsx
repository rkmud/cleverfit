import React, { useState } from 'react';
import styles from './Restore.module.scss';
import { Form, Input, Button, message, Typography } from 'antd';
import { ConflictError } from '@pages/Result/ConflictError';
import { Loader } from '@components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useRestorePassMutation } from '@redux/slice/restore/restoreApi';
const { Title } = Typography;
export const Restore = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [loading, setLoading] = useState(false);
    const [restorePass] = useRestorePassMutation();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await restorePass({ password: data.password, confirmPassword: data.confirm }).unwrap();
            navigate('/result/success-change-password');
        } catch (error) {
            navigate('/result/error-change-password');
        } finally {
            setLoading(false);
        }
    };
    const validatePassword = (rule, value) => {
        if (value && value.length >= 8) {
            if (/\d/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value)) {
                return Promise.resolve();
            }
        }
        return Promise.reject('Пароль не менее 8 символов, с заглавной буквой и цифрой');
    };

    return loading ? (
        <Loader />
    ) : (
        <div className={styles.wrapper}>
            <div className={styles.restore}>
                <Title>Восстановление аккаунта</Title>
                <Form form={form} onFinish={() => onSubmit()}>
                    <div className={styles.password}>
                        <Form.Item
                            className={styles.item}
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    min: 8,
                                    validator: validatePassword,
                                    message: '',
                                },
                            ]}
                            help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        >
                            <Input.Password placeholder='Пароль' data-test-id='change-password' />
                        </Form.Item>
                    </div>
                    <Form.Item
                        className={styles.item}
                        name='confirm'
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Пароли не совпадают' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Пароли не совпадают');
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder='Повторите пароль'
                            data-test-id='change-confirm-password'
                        />
                    </Form.Item>
                    <div className={styles.button}>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    data-test-id='change-submit-button'
                                    type='primary'
                                    htmlType='submit'
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form
                                            .getFieldsError()
                                            .filter(({ errors }) => errors.length).length
                                    }
                                >
                                    Сохранить
                                </Button>
                            )}
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};
