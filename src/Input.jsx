import React from 'react';

class Input extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    handleInput = (e) => {
        this.setState({text: e.target.value});
    };
    render () {
        return (
            <div>
                <input type="text" onChange={this.handleInput}/>
                <hr/>
                {this.state.text}
            </div>
        );
    }
}

export default Input;
