import {useParams} from 'react-router';

function DetailPage() {

    const params = useParams();

    return (
        <>
            <p className="detail_movie">{params.movie}</p>
            <p className="detail_full_line">{params.full_line}</p>
            <p className="detail_director">{params.director}</p>
            <a className="detail_audio">{params.audio}</a>
        </>
    );
}

export default DetailPage;