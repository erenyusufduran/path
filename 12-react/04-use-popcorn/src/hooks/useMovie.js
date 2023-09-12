import { useState, useEffect } from 'react';

const KEY = 'c7a85c15';

export const useMovie = (selectedId) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
      if (!res.ok) throw new Error('Something went wrong with fetching movies.');
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  return { movie, isLoading };
};
