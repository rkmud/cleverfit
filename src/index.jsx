import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import { store, history, persistor } from '@redux/configure-store';
import { MainPage } from './pages/main-page/main-page';
import { Login } from '@components/Login/Login';
import { Registration } from '@components/Registration/Registration';
import { Success } from '@pages/Result/Success';
import 'normalize.css';
import './index.css';
import { FormPage } from '@pages/FormPage/FormPage';
import { ConflictError } from '@pages/Result/ConflictError';
import { Unauthorized } from '@pages/Result/Unauthorized';
import { Error } from '@pages/Result/Error';
import { Warning } from '@pages/Result/Warning';
import { NotFound } from '@pages/Result/NotFound';
import { Varification } from '@components/Varification/Varification';
import { Restore } from '@components/Restore/Restore';
import { SuccessPassword } from '@pages/Result/SuccessPassword';
import { ErrorPassword } from '@pages/Result/ErrorPassword';
import { PersistGate } from 'redux-persist/integration/react';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HistoryRouter history={history}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/main' element={<MainPage />} />
                        <Route path='/auth' element={<FormPage />} />
                        <Route path='/auth/login' element={<FormPage />} />
                        <Route path='/auth/registration' element={<FormPage />} />
                        <Route path='/auth/change-password' element={<Restore />} />
                        <Route path='/auth/confirm-email' element={<Varification />} />
                        <Route path='/result/error-user-exist' element={<ConflictError />} />
                        <Route path='/result/error' element={<Error />} />
                        <Route
                            path='/result/error-check-email-no-exist'
                            element={<Unauthorized />}
                        />
                        <Route path='/result/error-login' element={<Warning />} />
                        <Route path='/result/error-check-email' element={<NotFound />} />
                        <Route path='/result/success' element={<Success />} />
                        <Route
                            path='/result/success-change-password'
                            element={<SuccessPassword />}
                        />
                        <Route path='/result/error-change-password' element={<ErrorPassword />} />
                    </Routes>
                </HistoryRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
