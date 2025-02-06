import MovieSceneList from "../movies/MovieSceneList";

function LandingPage({movies}) {

    return (
        
        <section>
            <MovieSceneList movies={movies}></MovieSceneList>
        </section>
    );
}

export default LandingPage;