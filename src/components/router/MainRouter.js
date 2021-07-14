import React from 'react';
import { Switch } from 'react-router-dom';
import SubRoutes from './SubRoutes';

const MainRouter = ({ routes }) => {
    return <Switch>{routes && routes.map((route) => <SubRoutes key={route.path} {...route} />)}</Switch>;
};

export default MainRouter;
