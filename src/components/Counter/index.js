import React, { Component, Fragment } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        console.log("Constructor");
        this.clickHandler = this.clickHandler.bind(this);
        this.clickHandlerQuit = this.clickHandlerQuit.bind(this);
    }

    componentDidMount(){
        console.log("Componente montado ComoponentDiMount");
        //this.setState({
        //    counter:1
        //})
    }

    componentDidUpdate() {
        console.log("El componente de actulizo");
    }

    clickHandler() {
        console.log(this.state)
        let { counter } = this.state;
        this.setState({
            counter: counter + 1
        });
    }

    clickHandlerQuit(){
        let { counter } = this.state;
        this.setState({
            counter: counter - 1
        });
    }

    render() {
        console.log("Render", this.state.counter)
        return(
            <div>
              <h1>Counter: { this.state.counter }</h1>
              <button onClick={() => this.clickHandler()}>Add</button>
              <button onClick={() => this.clickHandlerQuit()}>Quit</button>
            </div>
        
        )
    }
}

export default Counter