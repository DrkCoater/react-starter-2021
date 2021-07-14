import React from 'react';
import Router from './components/router/MainRouter';
import routes from './configs/route-config';

const App = () => {
    return (
        <div>
            <Router routes={routes} />
        </div>
    );
};

export default App;
