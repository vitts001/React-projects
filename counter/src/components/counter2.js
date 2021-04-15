import React from 'react';
import "./counter2.css"
class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            inp: 0
        }
        this.Setinp = this.Setinp.bind(this)
        this.Setcount = this.Setcount.bind(this)
        this.Reset = this.Reset.bind(this)
    }

    Setinp(event) {

        this.setState({ inp: event.target.value })
    }




    Setcount() {
        if (this.state.inp == 0) {
            alert("fill all fields")
        }
        else {
            setInterval(() => {

                if (this.state.inp === 0) {
                    alert("Times up");
                    window.location.reload()
                }
                this.setState({ count: this.state.inp - 1 });
                this.setState({ inp: this.state.inp - 1 })
            }, 1000);
        }
    }

    Reset() {
        this.setState({ count: 0, inp: 0 })
    }


    render() {
        return (
            <div>
                <div className="second_counter">
                    <div className="lab">
                        <label htmlFor="" style={{ fontWeight: "bold" }}>Time(In Sec.):</label>
                        <input onChange={this.Setinp} value={this.state.value} type="text" />
                    </div>
                    <h1> {this.state.count}</h1>
                    <button onClick={this.Setcount} id="btn4">Start</button><button onClick={this.Reset} id="btn5">Reset</button>
                </div>
            </div >
        )

    }
}

export default Counter;