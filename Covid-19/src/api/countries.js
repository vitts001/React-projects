import axios from "axios";

const url = 'https://covid19.mathdro.id/api/countries';

const Countries = async () => {

    try {
        const { data: { countries } } = await axios.get(url)
        return countries.map((country) => country.name)
    } catch (error) {
        return error
    }
}


export default Countries;