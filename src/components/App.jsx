import { useState, useEffect } from "react";
import "../styles/App.scss";
import { Routes, Route } from 'react-router';
import Header from './layout/Header';
import MovieSceneDetail  from './pages/MovieSceneDetail';
import LandingPage from './pages/LandingPage';



function App() {

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [uniqueYears, setUniqueYears] = useState([]);
  const [movieOne, setMovieOne] = useState("");
  const [yearOne, setYearOne] = useState("");


  //USEEFFECT

  useEffect( () =>{
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then(response => response.json() )
    .then(dataJson => {
      setMovies(dataJson);
      setFilteredMovies(dataJson);

        const movieYears = [...new Set(dataJson.map((oneMovie) => oneMovie.year))];
        setUniqueYears(movieYears);
    });
  }, []);
  
  
  const handleInputFilterMovie = (ev) => {
    ev.preventDefault();
    filterMovieYear(ev.target.value.toLowerCase(), yearOne);
  };

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault(); // Para evitar recargar la pagina al pulsar
    }
  };

  const handleYearFilter = (ev) => {
    ev.preventDefault();
    filterMovieYear(movieOne, ev.target.value);
  };
   
  function filterMovieYear(film, age) {
    setMovieOne(film);
    setYearOne(age);

    if (film === ""){
      setFilteredMovies(movies.filter((movie) => movie.year === Number(age)));
    }
    if (age === "") {
      setFilteredMovies(movies.filter((movie) => movie.movie.toLowerCase().includes(film)));
    
    }else{
      setFilteredMovies(movies.filter((movie) => (movie.movie.toLowerCase().includes(film) && movie.year === Number(age))));
    }
  } 

  const findMovie = (movie) => {
    return movies.find(oneMovie => oneMovie.movie === movie);
   }

   const handleClickClear = (ev) => {
    ev.preventDefault(); //Volver a mostrar todo el listado
    setMovieOne(""); // Limpiar el filtro de películas
    setYearOne(""); // Limpiar el filtro de años
    setFilteredMovies(movies);
    
   }


  return (
    <div>
     <Header></Header>
      <main>
        
        <Routes>
          <Route index element={<LandingPage  movies={filteredMovies} handleInputFilterMovie={handleInputFilterMovie} uniqueYears={uniqueYears} handleYearFilter={handleYearFilter} handleKeyDown={handleKeyDown} handleClickClear={handleClickClear} movieOne={movieOne} yearOne={yearOne}/>} ></Route>
          <Route path="detail/:movie" element={<MovieSceneDetail findMovie={findMovie}/>}></Route>
        </Routes>
        
        </main>
    
    </div>
  )
}

export default App;
