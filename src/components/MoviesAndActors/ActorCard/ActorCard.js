import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Redirect } from 'react-router';
import './ActorCard.css';
export default function ActorCard({ actor }) {
    const [redirectTo, setRedirectTo] = useState();
    if (redirectTo !== undefined) {
        return <Redirect to={'/actor/' + redirectTo + '/movies'} />
    }
    return (
        <Card className="col-sm-6 col-md-3 c-actor-card" onClick={() => setRedirectTo(actor.id)}>
            <Card.Img variant="top" src={actor.img} />
            <Card.Body className="c-actor-card-body">
                <Card.Title className="title">
                    <a href={actor.imdb} target="_blank" rel="noreferrer">
                        {`${actor.fname} ${actor.lname}`}
                    </a>
                </Card.Title>
                <Card.Text className={actor.deathDay ? "text-alert" : ""}>
                    {actor.age} {actor.deathDay ? " (deceased)" : ""}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}