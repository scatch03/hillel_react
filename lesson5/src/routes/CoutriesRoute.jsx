import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCountry } from "../services/countryService";
import CountryList from "../components/CountryList/CountryList";
import Country from "../components/Country/Country";


export default function Countries() {
    const [search, _] = useSearchParams();
    const [countryInfo, setCountryInfo] = useState(null)

    const fetchCountry = async (countryName) => {
        const country = await getCountry(countryName)
        setCountryInfo(country)
    }

    useEffect(() => {
        const countryName = search.get('country')
        fetchCountry(countryName)
    }, [search])

    return (<div>
            {
                countryInfo ?  <Country data={countryInfo} /> : <CountryList />
            }
         </div>);
}
