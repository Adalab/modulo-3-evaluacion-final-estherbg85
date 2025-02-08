import PropTypes from 'prop-types';
import MovieSceneList from "../movies/MovieSceneList";
import FilterMovies from "../movies/FilterMovies";
import gift from "../../images/source.gif"

function LandingPage({movies, handleInputFilterMovie, uniqueYears, handleYearFilter, handleKeyDown, handleClickClear, movieOne}) {

    return (
        
        <section>
            <FilterMovies handleInputFilterMovie={handleInputFilterMovie} 
                uniqueYears={uniqueYears} 
                handleYearFilter={handleYearFilter} 
                handleKeyDown={handleKeyDown} 
                handleClickClear={handleClickClear} 
                movieOne={movieOne} />
            {movies.length === 0 ? (
                <p className="not_found">No se ha encontrado ninguna pelicula con el nombre: {movieOne}<img className="gift" src={gift}></img></p>) : ( 
                <MovieSceneList movies={movies}/>)}
        </section>
    );
}

LandingPage.propTypes = {
    movies: PropTypes.array,
    handleInputFilterMovie: PropTypes.func,
    uniqueYears: PropTypes.array,
    handleYearFilter: PropTypes.func,
    handleKeyDown: PropTypes.func,
    handleClickClear: PropTypes.func,
    movieOne: PropTypes.string
};


export default LandingPage;