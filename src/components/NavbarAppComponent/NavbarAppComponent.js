import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavbarAppComponent.css'

export default function NavbarAppComponent() {

    const currentPath = usePathName();

    return (
        <Container className="c-navbar">
            <Navbar bg="white" variant="light">
                <Navbar.Brand className="c-navbar-brand">
                    <a href="#home">
                        <img src="https://cdn2.iconfinder.com/data/icons/bold-outline-v1/512/camera_cine_cinema_film-512.png" alt="" />
                    </a>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" active={currentPath === "/" || currentPath === "/home"}>Home</Nav.Link>
                    <Nav.Link href="#actors" active={currentPath === "/actors"}>Actors</Nav.Link>
                    <Nav.Link href="#movies" active={currentPath.includes("movies")}>Movies</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}