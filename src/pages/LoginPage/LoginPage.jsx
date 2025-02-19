import LoginForm from 'components/LoginForm/LoginForm';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.formContainer}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
