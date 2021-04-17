import React, { useState, useEffect } from "react"
import RegionData from "../../api/regiondata"
import { Bar, Line } from "react-chartjs-2"
import "./index.css"

const Chart = (props) => {
    const [region, setRegion] = useState([])

    useEffect(() => {
        const FetchedRegion = async () => {
            setRegion(await RegionData())
        }
        FetchedRegion()
        //console.log(region)
    }, [])





    const lineChart = (
        region.length ? <Line
            data={{
                labels: region.map((({ region }) => region)),
                datasets: [{
                    data: region.map((({ totalInfected }) => totalInfected)),
                    label: "Active",
                    borderColor: "yellow",
                    fill: true
                }, {
                    data: region.map((({ recovered }) => recovered)),
                    label: "Recovered",
                    borderColor: "green",
                    fill: false
                }, {
                    data: region.map((({ deceased }) => deceased)),
                    label: "Deaths",
                    borderColor: "red",
                    fill: true
                }]
            }}
        /> : null
    )


    const barChart = (
        props.states ?
            (
                <Bar
                    data={{
                        labels: ['Active', 'NewInf.', 'NewRec.', 'Deaths', 'NewDeaths'],
                        datasets: [{
                            labels: 'people',
                            backgroundColor: [" yellow", "rgb(39, 238, 105)", "rgb(241, 32, 32)", "red", "red",],
                            data: [props.data.totalInfected, props.data.newInfected, props.data.newRecovered, props.data.deceased, props.data.newDeceased]
                        }]
                    }}
                    options={
                        {
                            legend: { display: false },
                            title: { display: true, text: `current state in ${props.states}` }
                        }
                    }
                />
            ) : null

    )


    return (
        <div className="chart">
            {props.states ? barChart : lineChart}
        </div>
    )
}

export default Chart;