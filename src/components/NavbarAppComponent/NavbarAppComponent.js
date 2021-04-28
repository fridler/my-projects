import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './NavbarAppComponent.css'
import usePathName from "../../Hooks/usePathName"

export default function NavbarAppComponent() {

    const currentPath = usePathName();

    return (
        <Navbar className="c-navbar">

            <Nav className="mr-auto">
                <Nav.Link href="#home" active={currentPath === "/" || currentPath === "/home"}><img src="https://cdn3.iconfinder.com/data/icons/eziconic-v1-0/256/01.png" alt="Home" /> Home </Nav.Link>
                <Nav.Link href="#actors" active={currentPath === "/actors"}><img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/chaplin_comedy_actor_man-256.png" alt="Actors" /> Actors</Nav.Link>
                <Nav.Link href="#movies" active={currentPath.includes("movies")}><img src="https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-94-256.png" alt="Movies" /> Movies</Nav.Link>
                <Nav.Link href="#todo" active={currentPath === "/todo"}><img src="https://www.flaticon.com/svg/vstatic/svg/2833/2833509.svg?token=exp=1619623220~hmac=b661155084c18164d8d328e965507226" alt="Todo" /> Todo</Nav.Link>
                <Nav.Link href="#breeds" active={currentPath === "/breeds"}><img src="https://cdn4.iconfinder.com/data/icons/book-genres-1/340/dog_book_pet_animal_friend_read-512.png" alt="Dog Breeds" /> Dog Breeds</Nav.Link>

            </Nav>

        </Navbar>



    )
}