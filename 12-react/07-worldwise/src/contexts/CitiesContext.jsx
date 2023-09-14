import { useContext, useEffect, useReducer, useCallback } from 'react';
import { createContext } from 'react';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return { ...state, isLoading: false, currentCity: action.payload };
    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: initialState.currentCity,
      };
    case 'rejected':
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

export const CitiesProvider = ({ children }) => {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        dispatch({ type: 'loading' });
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch {
        dispatch({ type: 'rejected', payload: 'There was an error when loading cities...' });
      }
    };
    fetchCities();
  }, []);

  const getCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;
      try {
        dispatch({ type: 'loading' });
        const response = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await response.json();
        dispatch({ type: 'city/loaded', payload: data });
      } catch {
        dispatch({ type: 'rejected', payload: 'There was an error when loading city...' });
      }
    },
    [currentCity.id]
  );

  const createCity = async (newCity) => {
    try {
      dispatch({ type: 'loading' });
      const response = await fetch(`${BASE_URL}/cities/`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      dispatch({ type: 'city/created', payload: data });
    } catch {
      dispatch({ type: 'rejected', payload: 'There was an error when creating city.' });
    }
  };

  const deleteCity = async (id) => {
    try {
      dispatch({ type: 'loading' });
      await fetch(`${BASE_URL}/cities/${id}`, { method: 'DELETE' });
      dispatch({ type: 'city/deleted', payload: id });
    } catch {
      dispatch({ type: 'rejected', payload: 'There was an error when deleting city.' });
    }
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, error, getCity, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside of the CitiesProvider');
  return context;
};
