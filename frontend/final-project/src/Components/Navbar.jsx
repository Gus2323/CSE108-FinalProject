import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/Login">
                    Nacho Mama's
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
                <BootstrapNavbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link as={Link} to="/dashboard/customer">
                            Dashboard
                        </Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/menu">
                            Menu
                        </Nav.Link> */}
                        <Nav.Link as={Link} to="/Login">
                            Login/Out
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
