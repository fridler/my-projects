import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavbarAppComponent.css'
import usePathName from "../../Hooks/usePathName"

export default function NavbarAppComponent() {

    const currentPath = usePathName();

    return (
        <Navbar className="c-navbar">

            <Nav className="mr-auto">
                <Nav.Link href="#home" active={currentPath === "/" || currentPath === "/home"}><img src="https://cdn3.iconfinder.com/data/icons/eziconic-v1-0/256/01.png" alt="image" /> Home </Nav.Link>
                <Nav.Link href="#actors" active={currentPath === "/actors"}><img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/chaplin_comedy_actor_man-256.png" alt="image" /> Actors</Nav.Link>
                <Nav.Link href="#movies" active={currentPath.includes("movies")}><img src="https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-94-256.png" alt="image" /> Movies</Nav.Link>
                <Nav.Link href="#todo" active={currentPath === "/todo"}><img src="https://www.flaticon.com/svg/vstatic/svg/2833/2833509.svg?token=exp=1619600164~hmac=fd3b86815ea1297db5a01b244f32c1ed" alt="image" /> Todo</Nav.Link>

            </Nav>

        </Navbar>



    )
}