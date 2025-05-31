import { useState, useEffect } from 'react';
import { Outlet, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes/routes'
import './App.css'
import Menu from './components/Menu/Menu';
import  CountriesContext from './contexts/CountriesContext'
import { getCountries } from './services/countryService'


function AppRoutes() {
  return useRoutes(routes);
}

export default function App() {
  const [countries, setCountries] = useState([])
  const fetchCoutries = async () => {
    const countries = await getCountries();
    setCountries(countries)
  }
  
  useEffect(() => {
      fetchCoutries()
  }, [])

  return (
    <CountriesContext.Provider value={{countries}}>
      <Router>
        <header>
          <Menu />
        </header>

        <Outlet />

        <AppRoutes />
      </Router>
    </CountriesContext.Provider>
  );
}
