import {useParams, Link} from 'react-router';
import imgmovie from '../../images/—Pngtree—a free director s chair_15014238 (2).png'


function DetailPage({findMovie}) {

    const params = useParams();

    const movie = findMovie(params.movie);

    return (
        <section className="detail">
            <img className="detail_img" src={movie.poster} alt="imagen de pelicula"></img>
            <div className="detail_colum">
                <p className="detail_movie"><span className="detail_span">⭐</span>{movie.movie}<span className="detail_span">⭐</span></p>
                <p className="detail_director">"{movie.director}"</p>
                <img className="detail_director_chair" src={imgmovie}></img>
                <p className="detail_full_line">{movie.full_line}</p>
            <a href={movie.audio} download="NuevoNombreAudio.mp3"target="_blank" 
  rel="noopener noreferrer" className="detail_audio">Escuchar Audio</a>
            </div>
            <Link to="/" className="btn">Volver</Link>
        </section>
    );
}

export default DetailPage;