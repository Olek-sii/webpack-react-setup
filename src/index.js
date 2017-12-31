import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.hydrate(<App />, document.getElementById('react-view'));

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
