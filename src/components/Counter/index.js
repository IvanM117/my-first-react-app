import React, { Component, Fragment } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    render() {
        return(
        <h1>Counter: { this.state.counter }</h1>
        )
    }
}

export default Counter