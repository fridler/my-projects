import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Movies from '../../components/Movies/Movies';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieModel from '../../model/MovieModel';
import './MoviesPage.css';

function MoviesPage() {
    const { actorId } = useParams();
    const [movies, setMovies] = useState([]);
    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState("")

    let movieList = [];
    //if it comes from actors page by selecting an actor then the list will be the specific actor movies
    //else it will show top ten all time movies

    useEffect(() => {

        if (actorId) {
            const searchURL = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=d5fc0ebcdc97957658216ba08b5e9436`;
            axios.get(searchURL).then(res => {
                res.data.cast.slice(0, 20).map(plainMovie => {
                    const movie = new MovieModel(plainMovie.id, plainMovie.title, "https://image.tmdb.org/t/p/w500" + plainMovie.poster_path, plainMovie.overview);
                    //get info regarding each movie
                    additionalInfo(movie, actorId);
                });
            });
        }
    }, [actorId]);


    function additionalInfo(movie, actorId) {
        const promise1 = axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d5fc0ebcdc97957658216ba08b5e9436`);
        const promise2 = axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=d5fc0ebcdc97957658216ba08b5e9436`);
        Promise.all([promise1, promise2]).then(responses => {
            movie.setStars(responses[0].data.cast.slice(0, 9).map(x => x.name).join(", "));
            movie.setDirector(responses[0].data.crew.find(x => x.job === 'Director').name);
            movie.setRuntime(responses[1].data.runtime);
            if (actorId) {
                movieList = movieList.concat(movie);
            } else {
                movieList = movies.concat(movie);
            }
            setMovies(movieList);
        });

    }
    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);
        if (newSearchText) {
            //call to TMDB
            const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=d5fc0ebcdc97957658216ba08b5e9436&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setResults(response.data.results);
            });
        } else {
            setResults([]);
        }
    }

    function addMovie(resultIndex) {
        if (movies && !movies.some(el => parseInt(el.id) === parseInt(results[resultIndex].id))) {
            const movie = new MovieModel(results[resultIndex].id,
                results[resultIndex].title,
                "https://image.tmdb.org/t/p/w500" + results[resultIndex].poster_path,
                results[resultIndex].overview);
            additionalInfo(movie, null);
        }
        setResults([]);
        setSearchText("");
    }

    return (
        <Container className="p-movie">
            <h1 className="p-title">Movies</h1>
            <SearchBox
                placeHolder="Search Movie..."
                searchText={searchText}
                onSearchChange={handleSearchChange}
                results={results.map(result => result.title)}
                onResultSelected={addMovie} />
            <div className="p-movie-results">
                {movies.length > 0 ?
                    <Movies movies={movies} /> :
                    <Spinner className="p-movie-spinner" />}
            </div>
        </Container>
    )
}
export default MoviesPage;