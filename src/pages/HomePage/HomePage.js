import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './HomePage.css';

export default function HomePage() {
    return (
        <Container className="p-home" >
            <h1>Best movie app ever!</h1>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Film_Barnstar_Hires_Gold.svg/2000px-Film_Barnstar_Hires_Gold.svg.png" fluid />
        </Container>
    )
}