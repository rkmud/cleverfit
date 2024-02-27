import { FormBlock } from '@components/FormBlock/FormBlock';
import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './page.scss';
import { ConflictError } from '../Result/ConflictError';
export const FormPage = () => {
    return (
        <div className='form'>
            <FormBlock />
        </div>
    );
};
