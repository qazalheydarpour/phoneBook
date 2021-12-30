import {Navbar,Nav,Container} from 'react-bootstrap'
import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">PhoneBook</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="new">New+</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
