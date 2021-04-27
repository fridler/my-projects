import React from 'react'
import ActorCard from '../ActorCard/ActorCard';
import './Actors.css'

export default function Actors({ filterBy, sortBy, actors }) {

    let actorsCards;
    if (actors) {
        if (filterBy) {
            actors = actors.filter(actor => actor.fname.toLowerCase().includes(filterBy.toLowerCase()) ||
                actor.lname.toLowerCase().includes(filterBy.toLowerCase()));
        }
        if (sortBy) {
            actors.sort(function (a, b) {
                switch (sortBy) {
                    case "fname":
                    case "lname":
                        return a[sortBy].toUpperCase().localeCompare(b[sortBy].toUpperCase());
                    case "aged":
                        return b.age - a.age;
                    case "agea":
                        return a.age - b.age;
                    default:
                        return -1;
                }
            })
        }
        if (actors)
            actorsCards = actors.map((actor, index) => <ActorCard key={index} actor={actor} />);
    }
    return (
        <div className="actors-cards">
            {actorsCards}
        </div>
    )
}