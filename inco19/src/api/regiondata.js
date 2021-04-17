import axios from "axios"

let url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST"

const RegionData = async () => {
    const { data: { regionData } } = await axios.get(url)
    return regionData
    //console.log(regionData)
}

export default RegionData;