import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavbarAppComponent.css'
export default function NavbarAppComponent() {
    return (
        <Container className="c-navbar">
            <Navbar bg="white" variant="light">
                <Navbar.Brand className="c-navbar-brand">
                    <img src="https://cdn2.iconfinder.com/data/icons/bold-outline-v1/512/camera_cine_cinema_film-512.png" alt=""></img>
                    Movie App
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#actors">Actors</Nav.Link>
                    <Nav.Link href="#movies">Movies</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}