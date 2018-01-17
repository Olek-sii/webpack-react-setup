import './style.scss';
import { hot } from 'react-hot-loader';
import Input from './Input';
import React from 'react';

class App extends React.Component {
    render () {
        return (
            <div>
                <div>Hello!!!</div>
                <Input />
            </div>
        );
    }
}

export default hot(module)(App);
