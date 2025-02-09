import { useState, useEffect } from "react";

function useFetch() {
  const [movies, setMovies] = useState([]);
  const [uniqueYears, setUniqueYears] = useState([]);

  //USEEFFECT

  useEffect(() => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
      .then((response) => response.json())
      .then((dataJson) => {
        setMovies(dataJson);

        const movieYears = [
          ...new Set(dataJson.map((oneMovie) => oneMovie.year)),
        ];
        setUniqueYears(movieYears);
      });
  }, []);

  return { movies, uniqueYears };
}

export { useFetch };
