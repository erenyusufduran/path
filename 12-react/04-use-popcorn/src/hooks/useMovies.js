import { useState, useEffect } from 'react';

const KEY = 'c7a85c15';

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });
        if (!res.ok) throw new Error('Something went wrong with fetching movies.');
        const data = await res.json();
        if (data.Response === 'False') throw new Error('Movie not found');
        const filteredData = await data.Search.filter((film) => film.Poster !== 'N/A');
        setMovies(filteredData);
        setError('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }
    fetchMovies();
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
};
