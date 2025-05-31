import axios from 'axios'

const API_URL = `https://restcountries.com/v3.1`

export const getCountries = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch countries:`, error)
        return null
    }
};

export const getCountry = async (countryName) => {
    try {
        const response = await axios.get(`${API_URL}/name/${countryName}`)
        return response.data[0]
    } catch (error) {
        console.error(`Get coutry [${countryName}] date failed:`, error)
        return null
    }
}

