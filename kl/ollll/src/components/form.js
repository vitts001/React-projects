import React from 'react';

class FormComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            location: ""
        }
        this.HandleChange = this.HandleChange.bind(this)
    }

    HandleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>Form Practice</h1>
                <form>
                    <label htmlFor="">Name:</label>
                    <input name="name" onChange={this.HandleChange} value={this.state.name} type="text" />
                    <label htmlFor="">Age:</label>
                    <input type="text" name="age" onChange={this.HandleChange} value={this.state.age} />
                    <label htmlFor="">Location:</label>
                    <select name="location" value={this.state.location} onChange={this.HandleChange}>
                        <option value="pune" onChange={this.HandleChange}>pune</option>
                        <option value="latur" onChange={this.HandleChange}>Latur</option>
                        <option value="Aurangabad" onChange={this.HandleChange}>Aurangabad</option>
                        <option value="mumbai" onChange={this.HandleChange}>mumbai</option>
                    </select>
                </form>
                <h2>Your name:{this.state.name}</h2>
                <h2>your age:{this.state.age}</h2>
                <h2>Location Choose:{this.state.location}</h2>
            </div>
        )
    }
}

export default FormComponent;