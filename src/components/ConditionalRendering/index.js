import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActiveState: false,
        };
    }


    render() {
        const {
            props: { isActive },
            state: { isActiveState}
        } = this;

        return (
        <div> 
            {isActive ? <h1>Prop activo</h1> : <h1>Prop inactivo</h1>}
            {isActiveState ? <h1>State activo</h1> : <h1>State inactivo</h1>}
        </div>
        );
    }
}

export default ConditionalRendering;