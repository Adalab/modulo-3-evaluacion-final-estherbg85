import { Link } from 'react-router';
import PropTypes from 'prop-types';

function MovieSceneItem ( {oneMovie } ) {
    return(
      <Link to={"detail/"+oneMovie.movie}>
        <img className="cards_img" src={oneMovie.poster}></img>
        <p className="cards_movie">{oneMovie.movie}</p>
        <p className="cards_year">{oneMovie.year}</p>
        <p className="cards_full_line">{oneMovie.full_line}</p>
      </Link>
    );
}

MovieSceneItem.propTypes = {
    oneMovie: PropTypes.object
}

export default MovieSceneItem;