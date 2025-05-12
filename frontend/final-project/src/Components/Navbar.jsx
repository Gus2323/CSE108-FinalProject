import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <BootstrapNavbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:"yellowgreen"}}>
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" style={{color:"black"}}>
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
                        <Nav.Link as={Link} to="/Login" style={{color:"black"}}>
                            Staff Login
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
