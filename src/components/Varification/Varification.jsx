import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VerificationInput from 'react-verification-input';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import styles from './Varification.module.scss';
import { ExclamationCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { useSendLetterMutation } from '@redux/slice/restore/restoreApi';
import { Loader } from '@components/Loader/Loader';
const { Text, Title } = Typography;
export const Varification = () => {
    const navigate = useNavigate();
    const [sendLetter] = useSendLetterMutation();
    const email = useSelector((state) => state.auth.user.email);
    const [successCode, setSuccessCode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const onCodeChange = async (data) => {
        if (data.length === 6) {
            setLoading(true);
            try {
                await sendLetter({ code: data, email }).unwrap();
                navigate('/auth/change-password');
                setSuccessCode(true);
            } catch (error) {
                setSuccessCode(false);
            } finally {
                setLoading(false);
            }
        }
    };

    return loading ? (
        <Loader />
    ) : (
        <div className={styles.wrapper}>
            <div className={styles.varificaty}>
                {!successCode ? <CloseCircleFilled /> : <ExclamationCircleFilled />}
                <Title>
                    {!successCode ? 'Неверный код.' : ''}
                    Введите код <br /> для восстановления аккауанта
                </Title>
                <Text>
                    Мы отправили вам на e-mail <b>{email}</b> шестизначный код. Введите его в поле
                    ниже.
                </Text>
                <VerificationInput
                    onInvalidInput={() => {
                        setInputValue('');
                    }}
                    onComplete={onCodeChange}
                    validChars='0-9'
                    inputMode='numeric'
                    placeholder=''
                    numberOfInputs={6}
                    classNames={{
                        character: `verification-input ${successCode ? `verification-input__error` : ''}`,
                    }}
                    inputProps={{ 'data-test-id': 'verification-input' }}
                    defaultValue=''
                />
                <Text>Не пришло письмо? Проверьте папку Спам.</Text>
            </div>
        </div>
    );
};
