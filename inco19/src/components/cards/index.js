import React from "react";
import Reactdom from "react-dom"
import "./index.css"
import CountUp from "react-countup"

const Cards = (props) => {

    const CountryData = (
        <div className="row data">
            <div className="col-sm-4 active_case">
                <h4>Active Cases</h4>
                <h5>{props.data.activeCases}</h5>
                <h6>+{props.data.activeCasesNew}</h6>
            </div>
            <div className="col-sm-4 recovered">
                <h4>Recovered</h4>
                <h5>{props.data.recovered}</h5>
                <h6>+{props.data.recoveredNew}</h6>
            </div>
            <div className="col-sm-4 deaths">
                <h4>Deaths</h4>
                <h5>{props.data.deaths}</h5>
                <h6>+{props.data.deathsNew}</h6>
            </div>
        </div>
    )

    const StateData = (
        props.states ?
            <div className="row data">
                <div className="col-sm-4 active_case">
                    <h4>Active Cases</h4>
                    <h5>{props.data.totalInfected}</h5>
                    <h6>+{props.data.newInfected}</h6>
                </div>
                <div className="col-sm-4 recovered">
                    <h4>Recovered</h4>
                    <h5>{props.data.recovered}</h5>
                    <h6>+{props.data.newRecovered}</h6>
                </div>
                <div className="col-sm-4 deaths">
                    <h4>Deaths</h4>
                    <h5>{props.data.deceased}</h5>
                    <h6>+{props.data.newDeceased}</h6>
                </div>
            </div> : null
    )

    return (
        <div>
            {props.states ? StateData : CountryData}
        </div>
    )

}

export default Cards;