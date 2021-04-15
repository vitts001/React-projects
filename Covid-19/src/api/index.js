import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

const Fetchdata = async (country) => {
    let changeableurl = url;
    if (country) {
        changeableurl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastupdate } } = await axios.get(changeableurl)
        return { confirmed, recovered, deaths, lastupdate }
    } catch (error) {
        return error
    }
}


export default Fetchdata;