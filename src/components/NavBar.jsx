import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import {GiWallet} from 'react-icons/gi';

export const NavBar = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand style={{ color: '#0d6efd' }} href="/home"><GiWallet /> Blue Wallet</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link style={{  }} href="/home">Home</Nav.Link>
                      <NavDropdown title="Wallet" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/wallet">Blue Card</NavDropdown.Item>
                          <NavDropdown.Item href="/wallet">Gold Card</NavDropdown.Item>
                          <NavDropdown.Item href="/wallet">Black Card</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>   
</div>
  )
}


