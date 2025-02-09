import PropTypes from 'prop-types';

function FilterYears({years, onChange, yearOne} ){
                     
    return (
        <select className="form_search" id="yearFilter" placeholder="All" onChange={onChange}  value={yearOne}>
            <option value="">All</option>
            {years.map((year) => (
                <option key={year} value={year}>{year}</option>
            ))} 
        </select>

    );
}

FilterYears.propTypes = {
    years: PropTypes.array,
    onChange: PropTypes.func,
    yearOne: PropTypes.string
};

export default FilterYears;