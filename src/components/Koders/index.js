import React, { Component } from "react"

const KODERS_JSON = [
    {
        name: "Axel",
        age: 31,
        hobbies: ["Videogames","Beer","Pets"]
    },
    {
        name: "Ivan",
        age: 29,
        hobbies: ["Basketball","Chess","Videogames"]
    },
    {
        name:"Luis",
        age: 34,
        hobbies: ["Money", "Pets", "Social media"],
    },
]

class Koders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            koders: [],
        }
    }

    componentDidMount() {
        // ->Request
        // ->Response
        setTimeout(() => {
            this.setState({
                koders: KODERS_JSON,
            })
        }, 5000);
    }

    _renderKoders(){
        return this.state.koders.map(({ name, age, hobbies}) => {
            return ( // el primer return es de render y el segundo de map
                <li>
                    {name}, {age} años
                    <ul>
                        {hobbies.map((hobbie) => (
                         <li>{hobbie}</li>   
                        ))}
                    </ul>
                </li>
            )
        })
    }

    render() {
        console.log("Render", this.state.koders)

        return (
            <div>
                <ul>{this._renderKoders()}</ul>
            </div>
        );
    }
}

export default Koders;