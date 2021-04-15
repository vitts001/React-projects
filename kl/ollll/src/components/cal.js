import React from 'react';



class Calculator extends React.Component {

    constructor() {
        super()
        this.state = {
            result: ""
        }
        this.Calculate = this.Calculate.bind(this)
        this.Clear = this.Clear.bind(this)
        this.FinalAnswer = this.FinalAnswer.bind(this)
    }


    Calculate(event) {
        let a = this.state.result
        console.log(parseInt(event.target.textContent))
        this.setState({
            result: a + event.target.textContent
        })
    }

    Clear() {
        console.log(eval(this.state.result))
        this.setState({
            result: ""
        })

    }

    FinalAnswer() {
        let a = this.state.result
        this.setState({
            result: eval(a)
        })
    }


    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>Calculator</h1><br /><br />

                <div class="container1" style={{ width: "200px", textAlign: "center", boxShadow: "8px 8px 5px 5px" }}>
                    <div class="result">{this.state.result}</div>
                    <div class="buttons">
                        <span onClick={this.Clear} class="button resetBtn">AC</span>
                        <span class="button negative operator">x</span>
                        <span onClick={this.Calculate} class="button operator percent">%</span>
                        <span onClick={this.Calculate} class="button operator">/</span>
                        <span onClick={this.Calculate} class="button number">7</span>
                        <span onClick={this.Calculate} class="button number">8</span>
                        <span onClick={this.Calculate} class="button number">9</span>
                        <span onClick={this.Calculate} class="button operator">*</span>
                        <span onClick={this.Calculate} class="button number">4</span>
                        <span onClick={this.Calculate} class="button number">5</span>
                        <span onClick={this.Calculate} class="button number">6</span>
                        <span onClick={this.Calculate} class="button operator">-</span>
                        <span onClick={this.Calculate} class="button number">1</span>
                        <span onClick={this.Calculate} class="button number">2</span>
                        <span onClick={this.Calculate} class="button number">3</span>
                        <span onClick={this.Calculate} class="button operator">+</span>
                        <span onClick={this.Calculate} class="button number zero-btn">0</span>
                        <span onClick={this.Calculate} class="button number dot">.</span>
                        <span onClick={this.FinalAnswer} class="button  operator">=</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;