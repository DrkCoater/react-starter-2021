import React from 'react';
import Router from '../router/MainRouter';
import { Link } from 'react-router-dom';

const Home = ({ routes }) => {
    return (
        <div>
            <h1> Home Component </h1>
            <nav>
                <Link to="/home/welcome"> Welcome </Link>
                <Link to="/home/about"> About </Link>
            </nav>
            <Router routes={routes} />
        </div>
    );
};

export default Home;
