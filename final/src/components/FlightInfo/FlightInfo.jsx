import { FaWifi, FaUtensils, FaTv, FaPlaneDeparture } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import BookingForm from "../BookingForm/BookingForm";
import { useQuery } from "@tanstack/react-query";
import { getFlight } from "../../services/flightService";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";


const FlightInfo = ({ flightId }) => {
  const {
    isPending,
    error,
    data: flight,
  } = useQuery({
    queryKey: [`flight/${flightId}`],
    queryFn: () => getFlight(flightId),
  });

  if (isPending) {
    return <Loader />
  }
  if (error) {
    return <Error message={error.message} />
  }

  return (
    <div className="flex justify-between gap-2 flex-wrap">
      <div className="min-w-sm flex-grow p-6 bg-white rounded-xl shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 text-blue-700">
          <FaPlaneDeparture /> Flight {flight.flightNumber}
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700">
          <div>
            <strong>From:</strong> {flight.origin}
          </div>
          <div>
            <strong>To:</strong> {flight.destination}
          </div>
          <div>
            <strong>Departure:</strong> {flight.departureDate} at{" "}
            {flight.departureTime}
          </div>
          <div>
            <strong>Arrival:</strong> {flight.arrivalTime}
          </div>
          <div>
            <strong>Duration:</strong> {flight.duration}
          </div>
          <div>
            <strong>Terminal/Gate:</strong> {flight.terminal} / {flight.gate}
          </div>
          <div>
            <strong>Cabin Class:</strong> {flight.cabinClass}
          </div>
          <div>
            <strong>Aircraft:</strong> {flight.aircraftType}
          </div>
          <div>
            <strong>Baggage:</strong> {flight.baggageAllowance}
          </div>
          <div>
            <strong>Seats Left:</strong> {flight.availableSeats}
          </div>
          <div>
            <strong>Check-in Desk:</strong> {flight.checkInDesk}
          </div>
          <div>
            <strong>Boarding Time:</strong> {flight.boardingTime}
          </div>
          <div>
            <strong>Price:</strong> {flight.currency} {flight.price}
          </div>
          <div className="col-span-2">
            <strong>Airline:</strong> {flight.airline}
          </div>
          <div className="col-span-2">
            <strong>Status:</strong>
            <span className="text-green-600 inline-flex items-center ml-1">
              <MdCheckCircle className="mr-1" /> {flight.flightStatus}
            </span>
          </div>
          <div className="col-span-2">
            <strong>Notes:</strong> {flight.notes}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          {flight.mealService && (
            <span className="flex items-center gap-1">
              <FaUtensils /> Meal
            </span>
          )}
          {flight.wifiAvailable && (
            <span className="flex items-center gap-1">
              <FaWifi /> Wi-Fi
            </span>
          )}
          {flight.entertainmentSystem && (
            <span className="flex items-center gap-1">
              <FaTv /> Entertainment
            </span>
          )}
        </div>
      </div>

      <BookingForm flight={flight} />
    </div>
  );
};

export default FlightInfo;
