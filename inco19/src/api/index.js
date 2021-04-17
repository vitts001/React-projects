import React from "react"
import axios from "axios"

let url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST"

const FetchApi = async (state) => {
    if (state) {
        //const regionData =
        try {
            const { data: { regionData } } = await axios.get(url)
            return regionData
        } catch (error) {
            return error
        }


    }
    else {
        try {
            const { data: { activeCases, activeCasesNew, recovered, recoveredNew, deaths, deathsNew, lastUpdatedAtApify } } = await axios.get(url)
            return { activeCases, activeCasesNew, recovered, recoveredNew, deaths, deathsNew, lastUpdatedAtApify }
        } catch (error) {
            return error
        }
    }
}

export default FetchApi;