'use client';
import React from 'react';
import ToastWrapper from '../toast-wrapper';
import Header from '../header-layout';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Overlay from '../overlay';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <ToastWrapper />
            <Overlay />
            <Header />
            {children}
        </Provider>
    );
};

export default Layout;
