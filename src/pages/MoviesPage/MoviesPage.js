import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './MoviesPage.css';

function MoviesPage() {
    const { actorId } = useParams();
    //if it comes from actors page by selecting an actor then the list will be the specific actor movies
    //else it will show top ten all time movies
    // if(actorId )
    // const list= actorId? <h1>actor exist {actorId}</h1>:<h1>not exist</h1>

    return (
        <Container>
            <h3>{actorId}</h3>
        </Container>
    )
}
export default MoviesPage;