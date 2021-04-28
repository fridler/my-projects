import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainNavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>
                    <FontAwesomeIcon icon="dog"  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Breeds</Nav.Link>
                        <Nav.Link href="#About" disabled>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
