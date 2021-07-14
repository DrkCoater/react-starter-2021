import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { user } from '../../index';

const Login = () => {
    const history = useHistory();

    const onLogin = () => {
        user.authenticated = true;
        history.push('/protected');
    };

    return (
        <div>
            <h1> Login Component </h1>
            <Link to="/home"> Back to home </Link>
            <button onClick={onLogin}> Login </button>
        </div>
    );
};

export default Login;
