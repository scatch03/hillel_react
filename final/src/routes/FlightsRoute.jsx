import { useQuery } from "@tanstack/react-query"
import FlightsTable from "../components/FlightsTable/FlightsTable"
import SearchForm from "../components/SearchForm/SearchForm"
import useFlightsStore from "../stores/flightsStore"
import { useEffect, useState } from "react"
import { getFlights } from '../services/flightService'
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";


export default function FlightsRoute() {
  const { isPending, error, data: loadedFlights} = useQuery({
    queryKey: ['flights'],
    queryFn: getFlights
  })

  // take only required state to avoid unnecessary re-render
  const flights = useFlightsStore((state) => state.flights); 
  const setFlights = useFlightsStore((state) => state.setFlights)
  const [filteredFlights, setFilteredFlights] = useState([])
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    setFlights(loadedFlights)
    setFilteredFlights(loadedFlights)
  }, [loadedFlights])

  useEffect(() => {
    if (!flights){
      setFilteredFlights([])
      return
    }

    setFilteredFlights(flights.filter(flight => {
      if (filter && filter.origin && filter.origin !== flight.origin){
        return false
      }
      if (filter && filter.destination && filter.destination !== flight.destination){
        return false
      }
      if (filter && filter.departureDate && filter.departureDate !== flight.departureDate){
        return false;
      }
      return true
    }))
  }, [filter, flights])

  if (isPending) {
    return <Loader />
  }
  if (error) {
    return <Error message={error.message} />
  }

  return (
    <div >
      <SearchForm setFilter={setFilter} />
      {
        filteredFlights && filteredFlights.length ?
          <FlightsTable flights={filteredFlights} /> :
          null
      }
    </div>
  );
}
