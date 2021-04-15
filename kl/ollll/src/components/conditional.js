import React from 'react';
import data from './mydata';


class Conditional extends React.Component {


    constructor() {
        super()
        this.state = {
            Loading: false,
            charecter: []
        }

    }

    componentDidMount() {
        this.setState({ Loading: true })
        fetch("https://swapi.dev/api/people/81/").then(response => response.json()).then(data => { this.setState({ Loading: false, charecter: data }) })
    }




    render() {
        return (
            <div>
                <h1>API practice</h1>
                {this.state.Loading ? <h1 style={{ color: "red" }}>Loading....</h1> : <h1>{this.state.charecter.name}</h1>}
                <h1>I am here</h1>
                <table>
                    <tr>
                        <th>name</th>
                        <th>height(inch)</th>
                        <th>Gender</th>
                    </tr>
                    <tr>
                        <td>{this.state.charecter.name}</td>
                        <td>{this.state.charecter.height}</td>
                        <td>{this.state.charecter.gender}</td>
                    </tr>

                </table>
                <br />
            </div>
        )
    }
}

export default Conditional;