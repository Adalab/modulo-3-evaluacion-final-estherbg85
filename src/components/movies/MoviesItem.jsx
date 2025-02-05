
import PropTypes from 'prop-types';

function MoviesItem ( {oneMovie } ) {
    return(
      <>
        <img className="cards_img" src={oneMovie.poster}></img>
        <p className="cards_movie">{oneMovie.movie}</p>
        <p className="cards_year">{oneMovie.year}</p>
        <p className="cards_full_line">{oneMovie.full_line}</p>
      </>
    );
}

MoviesItem.propTypes = {
    oneMovie: PropTypes.object
}

export default MoviesItem;