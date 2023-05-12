import React from 'react';

import Header from '../Header/Header';
import styles from './sharedLayout.module.scss';
import UserRoutes from 'routes/UserRoutes';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const SharedLayout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <UserRoutes />
            <NotFoundPage />
        </div>
    );
};

export default SharedLayout;
