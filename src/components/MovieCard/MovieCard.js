import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import './MovieCard.css'
export default function MovieCard({ movie }) {
    return (
        <Container className="c-movie-card row">
            <img src={movie.posterPath} alt="" className="col-md-4"></img>
            <div className="col-md-8">
                <h3>{movie.title}</h3>
                <h6>Durarion: {movie.runtime}</h6>
                <h6>Director: {movie.director}</h6>
                <h6>Stars: {movie.stars}</h6>
                <h6>Plot: {movie.plot}</h6>
            </div>
        </Container>
    )
}