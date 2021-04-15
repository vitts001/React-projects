import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./components/navbar";
import Images from "./components/prop"
import data from "./components/mydata"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"


class Cont extends React.Component {

  constructor() {
    super()
    this.state = {
      mydata1: data
    }
  }

  HandleClick(id) {
    console.log("clicked", id)

  }

  HandleChange(it1) {
    console.log(it1)

  }

  render() {
    const Comps = this.state.mydata1.map(ob => <Images answer={ob.answer} Handlechange={this.HandleChange} Handleclick={this.HandleClick} keyy={ob.id} question={ob.question} option1={ob.option1} option2={ob.option2} option3={ob.option3} option4={ob.option4} />
    )
    return (
      <div>

        {Comps}
      </div>
    )
  }
}

export default Cont;




ReactDOM.render(
  <div>

    <Navbar />
  </div >,
  document.getElementById('root')
);




