import axios from 'axios'
import type { Flight, FlightUpdate } from './flightService.d.tsx';


const API_URL = `https://680fc8ae27f2fdac240f60df.mockapi.io`


export const getFlights: () => Promise<Flight[]> = async () => {
    try {
        const response = await axios.get(`${API_URL}/flights`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch flights:`, error)
        return []
    }
};

export const getFlight: (id: string) => Promise<Flight> = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/flights/${id}`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch flight: ${id}`, error)
        return []
    }
};

export const updateFlight: (id: string, update: FlightUpdate) => Promise<void> = async (id, update) => {
    try {
        await axios.put(`${API_URL}/flights/${id}`, update)
    } catch (error) {
        console.error(`Failed to update flight:`, error)
        throw new Error(`Failed to update flight: ${id}`);
    }
};


