import {useParams, Link} from 'react-router';
import ImgMovie from '../../images/120-1208201_available-in-two-formats-marco-de-foto-rollo.png'

function DetailPage({findMovie}) {

    const params = useParams();

    const movie = findMovie(params.movie);

    return (
        <section className="detail">
            <img className="detail_img_background" src={ImgMovie}></img>
            <img className="detail_img" src={movie.poster} alt="imagen de pelicula"></img>
            <div>
                <p className="detail_movie"><span className="detail_span">⭐</span>{movie.movie}<span className="detail_span">⭐</span></p>
                <p className="detail_director">"{movie.director}"</p>
                <p className="detail_full_line">{movie.full_line}</p>
            <   a className="detail_audio">{movie.audio}</a>
            </div>
            <Link to="/" className="btn">Volver</Link>
        </section>
    );
}

export default DetailPage;