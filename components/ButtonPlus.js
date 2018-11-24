import React, { Component } from 'react';

class ButtonPlus extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={ () => this.setState({counter: this.state.counter+1})}>{this.props.children}</button>
                <p>Counter: { this.state.counter }</p>
            </div>
        );
    }
}

export default ButtonPlus;