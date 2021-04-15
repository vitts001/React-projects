import React from "react"
import { Cards, Chart, Countrypicker } from "./components"
import styles from "./App.module.css"
import Fetchdata from "./api/index"

class App extends React.Component {

  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const fechededata = await Fetchdata()
    this.setState({ data: fechededata })
  }

  handleCountryChange = async (country) => {
    const fechededata = await Fetchdata(country)
    //console.log(fechededata)
    this.setState({ data: fechededata, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      <div >
        <h1 className={styles.h1}>Covid-19 Tracker</h1>
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Chart Data={data} Country={country} />
      </div>
    )
  }
}


export default App;
