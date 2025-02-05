import PropTypes from 'prop-types';
import MoviesItem from './MoviesItem';

function MoviesList ( { movies } ) {
    return(
        <ul className="cards">
            
          {movies.map((oneMovie) => (

            <li key={oneMovie.movie} className="cards_movie">
            <MoviesItem oneMovie={oneMovie}></MoviesItem>
            </li>
          ))} 
        </ul>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.array
};

export default MoviesList;