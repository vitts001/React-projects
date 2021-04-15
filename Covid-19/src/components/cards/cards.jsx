import React from "react"
import "./cards.css"
import CountUp from "react-countup"


const Cards = ({ data: { confirmed, recovered, deaths, lastupdate } }) => {
    if (!confirmed) {
        return "Loading..."
    }

    //console.log(props.data)
    return (
        <div>

            <div className="card11 infected">

                <h2>Infected</h2>
                <h3><CountUp start={0} end={confirmed.value} duration={4} separator="," /></h3>
                <p>No of infected people</p>
            </div>
            <div className="card11 recovered">

                <h2>Recovered</h2>
                <h3><CountUp start={0} end={recovered.value} duration={4} separator="," /></h3>
                <p>No of recovered people</p>
            </div>
            <div className="card11 deaths">

                <h2>Deaths</h2>
                <h3><CountUp start={0} end={deaths.value} duration={4} separator="," /></h3>
                <p>No of deaths</p>
            </div>
        </div >

    )
}

export default Cards;