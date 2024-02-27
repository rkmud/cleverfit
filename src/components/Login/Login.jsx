import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Checkbox, Tooltip, Typography } from 'antd';
import styles from './Login.module.scss';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLoginMutation } from '@redux/slice/auth/authApiSlice';
import { setCredentials } from '@redux/slice/auth/authSlice';
import { Loader } from '@components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useCheckMailMutation } from '@redux/slice/restore/restoreApi';
export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [loginUser] = useLoginMutation();
    const [checkMail] = useCheckMailMutation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailFieldTouch, setEmailFieldTouch] = useState(false)

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailFieldTouch(true)
        setIsEmailValid(regexEmail.test(value.trim()));
    };
   
    const onForgotPasswordClick = async (data) => {
        if (isEmailValid) {
            setLoading(true);
            try {
                await checkMail({ ...data }).unwrap();
                dispatch(setCredentials({ user: data }));
                navigate('/auth/confirm-email');
            } catch (error) {
                if (error.status === 404 && error.data.message === 'Email не найден' ) {
                    navigate('/result/error-check-email-no-exist');
                } else {
                    navigate('/result/error-check-email');
                }
            } finally {
                setLoading(false);
            }
        } 
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const userData = await loginUser({ ...data }).unwrap();
            dispatch(setCredentials({ ...userData }));
            navigate('/main');
        } catch (error) {
            navigate('/result/error-login');
        } finally {
            setLoading(false);
        }
    };
    return loading ? (
        <Loader />
    ) : (
        <div className={styles.loginForm}>
            <Form form={form} onFinish={onSubmit}>
                <div className={styles.mailInput}>
                           
                    <Form.Item name='email' className={styles.mail} >
                        <Input
                            data-test-id='login-email'
                            addonBefore='e-mail'
                            onChange={handleEmailChange}
                            value={email}
                            rules={[
                                { required: true, type: 'email', whitespace: true },
                            ]}
                        />
                    </Form.Item>
                </div>
                <Form.Item
                    className={styles.item}
                    name='password'
                    rules={[
                        {
                            required: true,
                            min: 8,
                            message: '',
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' data-test-id='login-password' />
                </Form.Item>
                <div className={styles.anyInfo}>
                    <Form.Item
                        name='remember'
                        valuePropName='checked'
                    >
                        <Checkbox data-test-id='login-remember'> Запомнить меня </Checkbox>
                    </Form.Item>
                    <Button
                        type='link'
                        onClick={() => onForgotPasswordClick({ email: email })}
                        data-test-id='login-forgot-button'
                        disabled={!isEmailValid && emailFieldTouch}
                    >
                        Забыли пароль?
                    </Button>
                </div>
                <div className={styles.buttons}>
                    <Form.Item shouldUpdate className={styles.button}>
                        {() => (
                            <Button
                                type='primary'
                                htmlType='submit'
                                disabled={
                                    !form.getFieldValue('email') || !form.getFieldValue('password')
                                }
                                data-test-id='login-submit-button'
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
