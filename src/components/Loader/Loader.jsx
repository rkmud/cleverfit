import React from 'react';
import Lottie from 'lottie-react';
import animationData from './loader.json';
import styles from './Loader.module.scss';

export const Loader = () => {
    return (
        <div>
            <Lottie animationData={animationData} data-test-id='loader' />
        </div>
    );
};
