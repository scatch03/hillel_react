import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import CountriesContext from "../contexts/CountriesContext"


export default function Home() {
    const { countries } = useContext(CountriesContext)
    const [country, setCountry] = useState(null)

    useEffect(() => {
        setCountry(countries[0])
    }, [countries])

    const handleSelectCountry = (e) => {
        const countryMatch = countries.find(c => c.name.common === e.target.value)
        setCountry(countryMatch)
    }
  
    return (
        <div className="border-1 py-8 flex flex-col items-center">
            {
                countries && countries.length ? 
                <select className="p-2 rounded-3xl border-1 border-blue-50" 
                        defaultValue={country ? country.name.common : null} 
                        onChange={handleSelectCountry}>
                    {
                        countries.map(country => 
                            <option value={country.name.common}>
                               {country.flag} {country.name.official}
                            </option>)
                    }
                </select> :
                 null
            }
            <Link className="mt-8 text-blue-600 font-700" 
                to={`/countries?country=${country ? country.name.common : null}`}>
            {
                country ? <> Read more about {country.flag} {country.name.official} </> : null
            }
            </Link>
        </div>
    )
}