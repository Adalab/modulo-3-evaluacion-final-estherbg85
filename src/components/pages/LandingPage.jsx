import MovieSceneList from "../movies/MovieSceneList";
import FilterMovies from "../movies/FilterMovies";

function LandingPage({movies, handleInputFilterMovie, uniqueYears, handleYearFilter, handleKeyDown, handleClickClear}) {

    return (
        
        <section>
            <FilterMovies handleInputFilterMovie={handleInputFilterMovie} uniqueYears={uniqueYears} handleYearFilter={handleYearFilter} handleKeyDown={handleKeyDown} handleClickClear={handleClickClear}></FilterMovies>
            <MovieSceneList movies={movies}></MovieSceneList>
        </section>
    );
}

export default LandingPage;