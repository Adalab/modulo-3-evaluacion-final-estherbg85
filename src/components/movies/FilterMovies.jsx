import PropTypes from 'prop-types';
import FilterYears from "./FilterYears";

function FilterMovies({handleInputFilterMovie, uniqueYears, handleYearFilter,
    handleKeyDown, handleClickClear, movieOne,yearOne }) {
   
    return(
        <form className="form">
            <label  className="form_filter" htmlFor="movie">Movie</label>
            <input
            className="form_search"
            autoComplete="off"
            type="search"
            name="movie"
            onInput={handleInputFilterMovie} 
            onKeyDown={handleKeyDown}
            value={movieOne}
            />
            <label  className="form_filter" htmlFor="year">Year</label>
            <FilterYears years={uniqueYears} onChange={handleYearFilter} yearOne={yearOne}></FilterYears>
            <button className="form_btn" onClick={handleClickClear}>Borrar</button>
            
      </form>

    )
}

FilterMovies.propTypes = {
    handleInputFilterMovie: PropTypes.func,
    uniqueYears: PropTypes.array,
    handleYearFilter: PropTypes.func,
    handleKeyDown: PropTypes.func,
    handleClickClear: PropTypes.func,
    movieOne: PropTypes.string,
    yearOne: PropTypes.string
};
export default FilterMovies;