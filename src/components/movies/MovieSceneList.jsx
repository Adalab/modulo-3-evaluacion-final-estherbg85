import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList ( { movies } ) {

  //Ordenamos las peliculas alfabeticamente usando .sort

   const sortedMovies = [...movies].sort((a, b) => {
    return a.movie.localeCompare(b.movie);
   });


    return(
        <ul className="cards">
            
          {sortedMovies.map((oneMovie) => (
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