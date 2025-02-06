function DetailPage() {
    return (
        <>
        <p className="detail_movie">{oneMovie.movie}</p>
        <p className="detail_full_line">{oneMovie.full_line}</p>
        <p className="detail_director">{oneMovie.director}</p>
        <a className="detail_audio">{oneMovie.audio}</a>
        </>
    );
}

export default DetailPage;