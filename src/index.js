import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import './App.scss';

export const user = {
    authenticated: false,
};

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
