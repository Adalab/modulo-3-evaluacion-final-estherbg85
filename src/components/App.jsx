import { useState } from "react";
import { useFetch } from "../lib/hooks";
import "../styles/App.scss";
import { Routes, Route } from 'react-router';
import Header from './layout/Header';
import MovieSceneDetail  from './pages/MovieSceneDetail';
import LandingPage from './pages/LandingPage';




function App() {

  //VARIABLES DE ESTADO

  
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieOne, setMovieOne] = useState("");
  const [yearOne, setYearOne] = useState("");
  const {movies, uniqueYears} = useFetch();


  
  
  //EVENTOS  /  FUNCIONES
  
  const handleKeyDown = (ev) => {// Para evitar recargar la pagina al pulsar enter en un campo
    if (ev.key === "Enter") {
      ev.preventDefault(); 
    }
  };
  
  const handleInputFilterMovie = (ev) => {  //Filtrar por nombre 
    ev.preventDefault();
    filterMovieYear(ev.target.value.toLowerCase(), yearOne);
  };

  const handleYearFilter = (ev) => {  //Filtrar por años
    ev.preventDefault();
    filterMovieYear(movieOne, ev.target.value);
  };
   
  function filterMovieYear(film, age) {  //Filtrado por nombre y despues por año
    setMovieOne(film);
    setYearOne(age);

    if (film === "" && age === ""){
      setFilteredMovies(movies);
    }else if (film === ""){
      setFilteredMovies(movies.filter((movie) => movie.year === Number(age)));
    }else if (age === "") {
      setFilteredMovies(movies.filter((movie) => movie.movie.toLowerCase().includes(film)));    
    }else{
      setFilteredMovies(movies.filter((movie) => (movie.movie.toLowerCase().includes(film) && movie.year === Number(age))));
    }
  } 

  const findMovie = (movie) => {
    return movies.find(oneMovie => oneMovie.movie === movie);
   }

   const handleClickClear = (ev) => {  //Limpiar campos al hacer click en borrar
    ev.preventDefault(); 
    setMovieOne(""); // Limpiar el filtro de películas
    setYearOne(""); // Limpiar el filtro de años
    setFilteredMovies(movies); //Volver a mostrar todo el listado
    
   }


  return (
    <div>
     <Header></Header>
      <main>
        
        <Routes>
          <Route index element={<LandingPage  movies={filteredMovies.length !== 0 ? filteredMovies : movies} handleInputFilterMovie={handleInputFilterMovie} uniqueYears={uniqueYears} handleYearFilter={handleYearFilter} handleKeyDown={handleKeyDown} handleClickClear={handleClickClear} movieOne={movieOne} yearOne={yearOne}/>} ></Route>
          <Route path="detail/:movie" element={<MovieSceneDetail findMovie={findMovie}/>}></Route>
        </Routes>
        
        </main>
    
    </div>
  )
}

export default App;
