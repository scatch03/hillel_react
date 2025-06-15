import NavigateBtn from "../NavigateBtn/NavigateBtn";


const FlightsTable = ({ flights }) => {
  return (
    <div className="overflow-x-auto py-2">
      <table className="min-w-full table-auto border border-gray-300 shadow rounded-lg">
        <thead className="bg-blue-600 text-white text-sm">
          <tr>
            <th className="px-2 md:px-4 py-2 text-left">Flight</th>
            <th className="md:px-4 py-2 text-left">From → To</th>
            <th className="px-4 py-2 text-left">Departure</th>
            <th className="px-4 py-2 text-left hidden sm:table-cell">Arrival</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Price</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Airline</th>
            <th className="md:px-4 py-2 text-left">Seats</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-2 md:px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm bg-white">
          {flights.map((flight) => (
            <tr key={flight.id} className="border-t hover:bg-gray-50">
              <td className="px-2 md:px-4 py-2 font-bold">{flight.flightNumber}</td>
              <td className="md:px-4 py-2">{flight.origin} → {flight.destination}</td>
              <td className="px-4 py-2">{flight.departureDate} {flight.departureTime}</td>
              <td className="px-4 py-2 hidden sm:table-cell">{flight.arrivalTime}</td>
              <td className="px-4 py-2 hidden md:table-cell">
                {flight.currency} {flight.price}
              </td>
              <td className="px-4 py-2 hidden md:table-cell">{flight.airline}</td>
              <td className="md:px-4 py-2">{flight.availableSeats}</td>
              <td className="px-4 py-2">{flight.flightStatus}</td>
              <td className="px-2 md:px-4 py-2">
                    <NavigateBtn title='More' to={`/flight/${flight.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightsTable;
