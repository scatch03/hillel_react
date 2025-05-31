import CountriesContext from "../../contexts/CountriesContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'



export default function CountryList() {
    const { countries } = useContext(CountriesContext)

    return (
        <ul>
            {
                countries && countries.length ?
                countries.map(c => 
                    <li className="text-left pl-15">
                        <Link 
                            className="mt-8 text-blue-600 font-700" 
                            to={`/countries?country=${c ? c.name.common : null}`}>
                                {c.flag} {c.name.official} 
                        </Link>
                    </li>) :
                null
            }
        </ul>
    )
}