import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import './MovieCard.css'
export default function MovieCard({ movie }) {
    return (
        <Container className="c-movie-card mb-3">
            <Card className="c-movie-card-item row g-0">
                <img src={movie.posterPath} alt="" className="col-md-4" />
                <Card.Body className="col-md-8 c-movie-card-body">
                    <Card.Title className="text-center">
                        {movie.title}
                    </Card.Title>
                    <Card.Text className="c-movie-card-text">
                        <ListGroup variant="flush">
                            <ListGroup.Item>Durarion (minutes): {movie.runtime}</ListGroup.Item>
                            <ListGroup.Item>Director: {movie.director}</ListGroup.Item>
                            <ListGroup.Item>Stars: {movie.stars}</ListGroup.Item>
                            <ListGroup.Item>Plot: {movie.plot}</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}