import { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        alert('There was an error when loading data.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      alert('There was an error when loading data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>{children}</CitiesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside of the CitiesProvider');
  return context;
};
