import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1> Welcome Component </h1>
            <Link to="/home"> Back to home </Link>
        </div>
    );
};

export default Login;
