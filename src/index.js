import 'regenerator-runtime/runtime'; // to use async/await (https://github.com/babel/babel/issues/9849)
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('app')
);
