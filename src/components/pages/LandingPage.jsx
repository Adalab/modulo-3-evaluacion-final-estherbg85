import MovieSceneList from "../movies/MovieSceneList";
import FilterForm from "../movies/FilterForm";

function LandingPage({movies, handleInputFilterMovie, uniqueYears, handleYearFilter}) {

    return (
        
        <section>
            <FilterForm handleInputFilterMovie={handleInputFilterMovie} uniqueYears={uniqueYears} handleYearFilter={handleYearFilter} ></FilterForm>
            <MovieSceneList movies={movies}></MovieSceneList>
        </section>
    );
}

export default LandingPage;