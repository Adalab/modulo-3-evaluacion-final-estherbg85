import { useState, useEffect } from "react";
import "../styles/App.scss";
import MovieSceneList from "./movies/MovieSceneList";
import FilterYears from "./movies/FilterYears";
import Header from './layout/Header';

function App() {

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [uniqueYears, setUniqueYears] = useState([]);


  //USEEFFECT

  useEffect( () =>{
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then(response => response.json() )
    .then(dataJson => {
      console.log(dataJson)
      setMovies(dataJson);
      setFilteredMovies(dataJson);

    
        const movieYears = [...new Set(dataJson.map((oneMovie) => oneMovie.year))];
        setUniqueYears(movieYears);
        console.log(uniqueYears);
    });
  }, []);
  
  const handleInputFilterMovie = (ev) => {
    ev.preventDefault();
    const searchTerm = ev.target.value.toLowerCase(); 
    setFilteredMovies(movies.filter((movie) => movie.movie.toLowerCase().includes(searchTerm))
    );
  };

  const handleYearFilter = (ev) => {


    const selectedYear = ev.target.value; // Obtener el año seleccionado
    if (selectedYear === "") {
      setFilteredMovies(movies); // Si se selecciona "Todos", mostramos todas las películas
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.year === Number(selectedYear)) // Asegurarnos de comparar los números correctamente
      );
    }
    /*console.log(uniqueYears);
    setFilteredMovies(
      filteredMovies.filter((movie) => movie.year === ev.target.value)
    );*/
  };

  return (
    <div className="page">
     <Header></Header>
      <main>
        <form className="form">
          <label  className="form_filter" htmlFor="movie">Movie</label>
          <input
            className="form_search"
            autoComplete="off"
            type="search"
            name="movie"
            onInput={handleInputFilterMovie} 
            />
          <label  className="form_filter" htmlFor="year">Year</label>
          <FilterYears years={uniqueYears} onChange={handleYearFilter}></FilterYears>
            
        </form>
        <section>
        <MovieSceneList movies={filteredMovies}></MovieSceneList>
        </section>
        </main>
    
    </div>
  )
}

export default App;
