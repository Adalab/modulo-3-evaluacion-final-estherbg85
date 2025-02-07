import FilterYears from "./FilterYears";

function FilterMovies({handleInputFilterMovie, uniqueYears, handleYearFilter,handleKeyDown,handleClickClear }) {
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
            />
            <label  className="form_filter" htmlFor="year">Year</label>
            <FilterYears years={uniqueYears} onChange={handleYearFilter}></FilterYears>
            <button className="form_btn" onClick={handleClickClear}>Borrar</button>
            
      </form>

    )
}
export default FilterMovies;