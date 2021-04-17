import React, { useState, useEffect } from "react"
import "./index.css"
import RegionData from "../../api/regiondata"

const StatePicker = (props) => {

    const [region, setRegion] = useState([])

    useEffect(() => {
        const FetchedRegion = async () => {
            setRegion(await RegionData())
        }
        FetchedRegion()
        console.log(region)
    }, [])


    return (
        <div className="states">
            <select onChange={(e) => props.handleStateChange(e.target.value)} name="" id="">
                <option value="India">India</option>
                {region.map(({ region, i }) => <option key={i} value={region}>{region}</option>)}
            </select>
        </div>
    )
}

export default StatePicker;