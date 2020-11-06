import React, { Component } from "react";

import "./MenuActivo.css"

class MenuActivo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
    }

    handleClick() {
        let { isActive } = this.state;
        this.setState({
            isActive: !isActive
        });
    }

    render(){
        const { isActive } = this.state;
        let button1;
        let button2;
        let button3;
        if (button1 , isActive){
            button2 = null;
            button3 = null;
        } else if (button2, isActive){
            button1 = null;
            button3 = null;
        } else (button3, isActive){
            button1 = null;
            button2 = null;
        };
        return (
            <div>
                <h1 className={isActive ? "active" : null}>Channel 1</h1>
                <button onClick={() => this.handleClick()}>
                {isActive ? "On" : "Off"}
                </button>
                <h1 className={isActive ? "active" : null}>Channel 2</h1>
                <button onClick={() => this.handleClick()}>
                {isActive ? "On" : "Off"}
                </button>
                <h1 className={isActive ? "active" : null}>Channel 3</h1>
                <button onClick={() => this.handleClick()}>
                {isActive ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default MenuActivo;