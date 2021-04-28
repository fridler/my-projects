import React from 'react'
import MovieCard from '../MovieCard/MovieCard';

export default function Movies({ movies }) {
    let moviesCards;
    if (movies) {
        moviesCards = movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>);
    }
    return (
        <div className="c-movies">
            {moviesCards}
        </div>
    )
}