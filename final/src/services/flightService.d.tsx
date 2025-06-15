export type CabinClass = "Economy" | "Business";

export type Flight = {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  availableSeats: number;
  airline: string;
  aircraftType: string;
  terminal: string;
  gate: string;
  notes: string,
  cabinClass: CabinClass;
};

export type FlightUpdate = Partial<Flight>
