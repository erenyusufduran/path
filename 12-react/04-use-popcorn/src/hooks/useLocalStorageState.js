import { useState, useEffect } from 'react';

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || initialState;
    return JSON.parse(storedValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
