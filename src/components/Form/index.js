import React, { Component } from "react";
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            MXNQuantity: 0,
            USDQuantity: 0,
        };

        this.handleChange = this.handleChange.bind(this); // aqui pasamos el this del padre
    }

    handleChange( {target: { value } }) {
        this.setState({
            MXNQuantity: value,
            USDQuantity: value / 21.6,
        });
    }


    render() {
        const { MXNQuantity, USDQuantity } = this.state;
        return (
        <div> 
            <form>
                <input type="number" value={MXNQuantity} 
                onChange={this.handleChange}/>
            </form>
            <p>USD: ${USDQuantity}</p>
        </div>
        );
    }
}

export default Form;