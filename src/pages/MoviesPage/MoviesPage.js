import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModel from '../../model/MovieModel';
import './MoviesPage.css';

function MoviesPage() {
    const { actorId } = useParams();
    const [movies, setMovies] = useState([]);

    let movieList = [];
    //if it comes from actors page by selecting an actor then the list will be the specific actor movies
    //else it will show top ten all time movies

    useEffect(() => {

        const searchURL = actorId ? `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=d5fc0ebcdc97957658216ba08b5e9436` :
            "https://api.themoviedb.org/3/movie/top_rated?api_key=d5fc0ebcdc97957658216ba08b5e9436";

        axios.get(searchURL).then(res =>
            actorId ? res.data.cast.slice(0, 19).map(plainMovie => addMovie(plainMovie)) :
                res.data.results.slice(0, 19).map(plainMovie => addMovie(plainMovie))
        );
    }, [actorId]);


    function addMovie(plainMovie) {
        const movie = new MovieModel(plainMovie.id, plainMovie.title, "https://image.tmdb.org/t/p/w500" + plainMovie.poster_path, plainMovie.overview);
        //get info regarding each movie
        const promise1 = axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d5fc0ebcdc97957658216ba08b5e9436`);
        const promise2 = axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=d5fc0ebcdc97957658216ba08b5e9436`);
        Promise.all([promise1, promise2]).then(responses => {
            movie.setStars(responses[0].data.cast.slice(0, 9).map(x => x.name).join(", "));
            movie.setDirector(responses[0].data.crew.find(x => x.job === 'Director').name);
            movie.setRuntime(responses[1].data.runtime);
            movieList = movieList.concat(movie);
            setMovies(movieList);
        });

    }

    return (
        <Container>
            <h1 className="text-center">Top Rated Films</h1>
            {movies ? movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>) : <Spinner />}
        </Container>
    )
}
export default MoviesPage;