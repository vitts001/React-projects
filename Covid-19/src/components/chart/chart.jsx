import React, { useState, useEffect } from "react"
import FetchDailyData from "../../api/dailydata"
import { Line, Bar } from "react-chartjs-2"


const Charts = (props) => {
    if (props) {
        console.log(props)
    }

    const [dailyData, setdailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await FetchDailyData())
        }
        fetchAPI()
        //console.log(dailyData)
    }, []);

    const lineChart = (
        dailyData.length ?
            <Line
                data={{
                    labels: dailyData.map((({ date }) => date)),
                    datasets: [{
                        data: dailyData.map((({ confirmed }) => confirmed)),
                        label: "Infected",
                        borderColor: "yellow",
                        fill: true,
                    }, {
                        data: dailyData.map((({ deaths }) => deaths)),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill: true,
                    }]
                }}
            /> : null
    )

    const barChart = (
        props.Data.confirmed ?
            (
                <Bar
                    data={{
                        labels: ['Infectes', 'Recovered', 'Deaths'],
                        datasets: [{
                            labels: 'people',
                            backgroundColor: [" yellow", "rgb(39, 238, 105)", "rgb(241, 32, 32)"],
                            data: [props.Data.confirmed.value, props.Data.recovered.value, props.Data.deaths.values]
                        }]
                    }}
                    options={
                        {
                            legend: { display: false },
                            title: { display: true, text: `current state in ${props.Country}` }
                        }
                    }
                />
            ) : null

    )



    return (
        <div style={{ width: "70%", margin: "auto", marginTop: "20px" }}>
            {props.Country ? barChart : lineChart}
        </div>
    )

}

export default Charts;