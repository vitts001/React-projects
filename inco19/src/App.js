import React from "react"
import FetchApi from "./api/index"
import Cards from "./components/cards"
import Charts from "./components/chart"
import StatePicker from "./components/statepicker"
import "./app.css"

class App extends React.Component {

  state = {
    data: "",
    newState: [],
    states: ""
  }


  componentDidMount() {
    const FetchData = async () => {
      this.setState({ data: await FetchApi() })
    }
    FetchData()
  }

  handleStateChange = (event) => {
    //console.log(event)
    const FetchData = async () => {
      this.setState({ newState: await FetchApi(event) })
      if (this.state.newState) {
        this.state.newState.map((ob) => {
          if (ob.region === event) {
            this.setState({ data: ob, states: event })
          }
        })

      }
    }
    FetchData()

  }


  render() {

    //console.log(data)
    const { data, states } = this.state
    return (
      <div className="main">
        <h1 style={{ textAlign: "center" }}>India Covid Tracker</h1>
        <Cards data={data} states={states} />
        <StatePicker handleStateChange={this.handleStateChange} />
        <Charts data={data} states={states} />
      </div>
    )
  }
}


export default App;
