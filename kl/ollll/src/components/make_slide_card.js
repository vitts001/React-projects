import React from "react";
import SliderComp from "./slidercomp"

class SlidersInput extends React.Component {

    constructor() {
        super()
        this.state = {
            what: "",
            addwhat: ""
        }
        this.CallSliderComp = this.CallSliderComp.bind(this)
        this.SetValues = this.SetValues.bind(this)
    }

    CallSliderComp() {
        localStorage.setItem("what", this.state.what)
    }

    SetValues(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <div className="sliderinput">
                    <label style={{ marginTop: "50px" }} htmlFor="">What:</label>
                    <input onChange={this.SetValues} name="what" value={this.state.value} type="text" /><br /><br />
                    <label htmlFor="">Add What:</label>
                    <input onChange={this.SetValues} name="addwhat" value={this.state.value} type="text" /><br /><br />
                    <button onClick={this.CallSliderComp}>Add</button>
                </div>
            </div>
        )
    }
}

export default SlidersInput