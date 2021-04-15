import React from 'react';
import './App.css';
import Counter from './components/counter2'
import Randomcolor from 'randomcolor';


//const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//const Img_API = "https://image.tmdb.org/t/p/w1280";
//const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0,
      color: ""
    }
    this.Increase = this.Increase.bind(this)
    this.Decrease = this.Decrease.bind(this)
    this.Reset = this.Reset.bind(this)
  }

  Increase() {
    this.setState({ count: this.state.count + 1 })
  }
  Decrease() {
    this.setState({ count: this.state.count - 1 })
  }
  Reset() {
    this.setState({ count: 0 })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const newColor = Randomcolor()
      this.setState({ color: newColor })
    }
  }

  render() {
    return (
      <div className="App" >
        <h1>Counter & Timer</h1>
        <div className="maindiv">
          <h1 style={{ color: this.state.color, fontSize: "60px" }}>{this.state.count}</h1>
          <button id="btn1" onClick={this.Increase}>Increase</button>
          <button id="btn2" onClick={this.Reset}>Reset</button>
          <button id="btn3" onClick={this.Decrease}>Decrease</button>
        </div>
      </div >
    )
  }
}

export default App;
