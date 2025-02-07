import { useState, useEffect } from "react";
import "../styles/App.scss";
import { Routes, Route } from 'react-router';

import FilterYears from "./movies/FilterYears";
import Header from './layout/Header';
import DetailPage  from './pages/DetailPage';
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
    console.log(ev.target.value);
    filterMovieYear(ev.target.value.toLowerCase(), yearOne);
  };

  const handleYearFilter = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
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

  return (
    <div className="page">
     <Header></Header>
      <main>
      
        
        <Routes>
          <Route index element={<LandingPage  movies={filteredMovies} handleInputFilterMovie={handleInputFilterMovie} uniqueYears={uniqueYears} handleYearFilter={handleYearFilter}/>} ></Route>
          <Route path="detail/:movie" element={<DetailPage findMovie={findMovie}/>}></Route>
        </Routes>
        
        </main>
    
    </div>
  )
}

export default App;
