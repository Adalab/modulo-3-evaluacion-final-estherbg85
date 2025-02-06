import { useState, useEffect } from "react";
import "../styles/App.scss";
import MovieSceneList from "./movies/MovieSceneList";
import MovieSceneItem from "./movies/MovieSceneItem";

function App() {

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState([]);
const [filterMovie, setFilterMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  //USEEFFECT

  useEffect( () =>{
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then(response => response.json() )
    .then(dataJson => {
      console.log(dataJson)
      setMovies(dataJson);
      setFilteredMovies(dataJson);
    });
  }, []);
  
  const handleInputFilterMovie = (ev) => {
    const searchTerm = ev.target.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas
    setFilteredMovies(
      movies.filter((movie) => movie.movie.toLowerCase().includes(searchTerm))
    );
  };

  
  return (
    <div className="page">
      <header>
        <h1 className="page_title">Owen Wilson's "WOW"</h1>
        <p className="page_border"></p>
      </header>
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
          <select className="form_search" id="yearFilter" placeholder="All">
            <option value="">All</option>
            <option value="2020">2015</option>
            <option value="2021">2016</option>
            <option value="2022">2017</option>
            <option value="2023">2018</option>
            <option value="2024">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
            
        </form>
        <section>
        <MovieSceneList movies={filteredMovies}></MovieSceneList>
        </section>
        </main>
    
    </div>
  )
}

export default App
