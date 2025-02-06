

function FilterForm({handleInputFilterMovie, uniqueYears, handleYearFilter }) {
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
      </form>

    )
}
export default FilterForm;