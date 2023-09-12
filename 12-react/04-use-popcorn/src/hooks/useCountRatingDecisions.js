import { useEffect, useRef } from "react";

export const useCountRatingDecisions = (userRating) => {
  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  return countRef;
}