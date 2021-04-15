import './App.css';
import React from "react";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      tic: "",
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      win: ""
    }
    this.SetHtml = this.SetHtml.bind(this)

  }

  SetHtml(event) {
    if (this.state.tic === "" || this.state.tic === "O") {
      if (event.target.textContent === "") {
        let newar = this.state.arr
        newar[event.target.id] = "X"
        event.target.textContent = "X"
        this.setState({ tic: "X", arr: newar })
      }
    }
    else {
      if (event.target.textContent === "") {
        let newar = this.state.arr
        newar[event.target.id] = "O"
        event.target.textContent = "O"
        this.setState({ tic: "O", arr: newar })
      }
    }
  }

  componentDidUpdate() {
    if (this.state.arr[0] === this.state.arr[1] && this.state.arr[0] === this.state.arr[2]) {
      this.setState({ arr: this.state.arr[0] + "wins", win: this.state.arr[0] + " " + "wins this match" })
    }
    else if (this.state.arr[3] === this.state.arr[4] && this.state.arr[3] === this.state.arr[5]) {
      this.setState({ arr: this.state.arr[0] + "wins", win: this.state.arr[3] + " " + "wins this match" })
      console.log("done")
    }
    else if (this.state.arr[6] === this.state.arr[7] && this.state.arr[6] === this.state.arr[8]) {
      this.setState({ arr: this.state.arr[7] + "wins", win: this.state.arr[7] + " " + "wins this match" })
      console.log("done")
    }
    else if (this.state.arr[0] === this.state.arr[3] && this.state.arr[0] === this.state.arr[6]) {
      console.log("done")
    }
    else if (this.state.arr[1] === this.state.arr[4] && this.state.arr[1] === this.state.arr[7]) {
      console.log("done")
    }
    else if (this.state.arr[2] === this.state.arr[5] && this.state.arr[2] === this.state.arr[8]) {
      console.log("done")
    }
    else if (this.state.arr[0] === this.state.arr[4] && this.state.arr[0] === this.state.arr[8]) {
      console.log("done")
    }
    else if (this.state.arr[2] === this.state.arr[4] && this.state.arr[2] === this.state.arr[6]) {
      console.log("done")
    }
  }






  render() {
    return (
      <div className="App" >
        <div className="game-board">
          <div onClick={this.SetHtml} id="0" className="box"></div>
          <div onClick={this.SetHtml} id="1" className="box"></div>
          <div onClick={this.SetHtml} id="2" className="box"></div>
          <div onClick={this.SetHtml} id="3" className="box"></div>
          <div onClick={this.SetHtml} id="4" className="box"></div>
          <div onClick={this.SetHtml} id="5" className="box"></div>
          <div onClick={this.SetHtml} id="6" className="box"></div>
          <div onClick={this.SetHtml} id="7" className="box"></div>
          <div onClick={this.SetHtml} id="8" className="box"></div>
        </div>
        <h1>{this.state.win}</h1>
      </div>
    );
  }
}

export default App;
