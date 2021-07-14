import React from 'react';
import Welcome from '../components/pages/Welcome';
import About from '../components/pages/About';

export default [
    {
        path: '/',
        exact: true,
        redirect: '/home',
    },
    {
        path: '/home',
        exact: true,
    },
    {
        path: '/home/Welcome',
        component: Welcome,
        exact: true,
    },
    {
        path: '/home/About',
        component: About,
        exact: true,
    },
];
