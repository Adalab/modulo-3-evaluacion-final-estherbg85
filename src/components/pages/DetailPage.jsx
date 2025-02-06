import {useParams, Link} from 'react-router';

function DetailPage({findMovie}) {

    const params = useParams();

    const movie = findMovie(params.movie);

    return (
        <section className="detail">
            
            <p className="detail_movie"><span className="detail_span">⭐</span>{movie.movie}<span className="detail_span">⭐</span></p>
            <p className="detail_director">"{movie.director}"</p>
            <p className="detail_full_line">{movie.full_line}</p>
            <a className="detail_audio">{movie.audio}</a>
            <Link to="/" className="btn">Volver</Link>
        </section>
    );
}

export default DetailPage;