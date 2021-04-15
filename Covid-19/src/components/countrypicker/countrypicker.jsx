import React, { useState, useEffect } from "react"
import { NativeSelect, FormControl } from "@material-ui/core"
import Countries from "../../api/countries"

const Countrypicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const Fetchcountries = async () => {
            setFetchedCountries(await Countries())
        }
        Fetchcountries()
    }, [setFetchedCountries]);


    return (
        <div>
            <FormControl style={{ marginLeft: "40%", marginTop: "20px" }}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option >)}
                </NativeSelect>
            </FormControl>

        </div>
    )

}

export default Countrypicker;