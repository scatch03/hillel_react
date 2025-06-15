import { create } from 'zustand'


const useFlightsStore = create((set) => ({
  flights: [],
  setFlights: (flights) => set({ flights })
}))

export default useFlightsStore