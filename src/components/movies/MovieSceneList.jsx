import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList ( { movies } ) {
   console.log(movies);
    return(
        <ul className="cards">
            
          {movies.map((oneMovie) => (
            <li key={oneMovie.movie+oneMovie.current_wow_in_movie} className="cards_list">
              <MovieSceneItem oneMovie={oneMovie}></MovieSceneItem>
            </li>
          ))} 
        </ul>
    );
}

MovieSceneList.propTypes = {
    movies: PropTypes.array
};

export default MovieSceneList;