import './style.scss';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('react-view')
    );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}
