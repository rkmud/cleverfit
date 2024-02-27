import React, { useState } from 'react';
import styles from './Registration.module.scss';
import { Form, Input, Button, message } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useRegisterUserMutation } from '@redux/slice/regist/registSlice';
import { ConflictError } from '@pages/Result/ConflictError';
import { Loader } from '@components/Loader/Loader';
import { constrainedMemory } from 'process';
import { useNavigate } from 'react-router-dom';
export const Registration = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [loading, setLoading] = useState(false);
    const [registUser] = useRegisterUserMutation();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await registUser({ ...data }).unwrap();
            navigate('/result/success');
        } catch (error) {
            console.log(error);
            if (error.status === 409) {
                navigate('/result/error-user-exist');
            } else {
                navigate('/result/error');
            }
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
        <div className={styles.registForm}>
            <Form form={form} onFinish={() => onSubmit()}>
                <div className={styles.regist}>
                    <Form.Item
                        className={styles.mail}
                        name='email'
                        help={false}
                        rules={[{ required: true, type: 'email' }]}
                    >
                        <Input data-test-id='registration-email' addonBefore='e-mail' />
                    </Form.Item>
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
                            <Input.Password
                                placeholder='Пароль'
                                data-test-id='registration-password'
                            />
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
                            data-test-id='registration-confirm-password'
                        />
                    </Form.Item>
                </div>
                <div className={styles.buttons}>
                    <Form.Item shouldUpdate className={styles.button}>
                        {() => (
                            <Button
                                data-test-id='registration-submit-button'
                                type='primary'
                                htmlType='submit'
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length)
                                        .length
                                }
                            >
                                Войти
                            </Button>
                        )}
                    </Form.Item>

                    <Form.Item className={styles.btnRegist}>
                        <Button type='primary' htmlType='submit'>
                            <GooglePlusOutlined />
                            Регистрация через Google
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};
