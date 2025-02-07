import FilterYears from "./FilterYears";

function FilterMovies({handleInputFilterMovie, uniqueYears, handleYearFilter, handleClickClear }) {
    return(
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
            <input className="form_btn" type="reset" value="Borrar" onClick={handleClickClear} />
      </form>

    )
}
export default FilterMovies;