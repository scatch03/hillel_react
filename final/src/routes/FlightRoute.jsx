import { useParams } from "react-router-dom"
import FlightInfo from "../components/FlightInfo/FlightInfo"


export default function FlightRoute() {
    const {id} = useParams()

    return (
        <FlightInfo flightId={id} />
    )
}