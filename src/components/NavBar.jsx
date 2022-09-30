import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import {GiWallet} from 'react-icons/gi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blue from '../Images/blue.jpg';
import black from '../Images/black.jpg';
import gold from '../Images/gold.jpg';

export const NavBar = () => {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="#home"><GiWallet /> Blue Wallet</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <NavDropdown title="Wallet" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#wallet">Cards</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      <Card style={{ width: '18rem', height: '22rem' }}>
              <Card.Img variant="top" src={blue} />
              <Card.Body>
                  <Card.Title>Blue Card</Card.Title>
                  <Card.Text>
                      Some text
                  </Card.Text>
                  <Button variant="primary">Apply Now</Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem', height: '22rem'}}>
              <Card.Img variant="top" src={gold} />
              <Card.Body>
                  <Card.Title>Gold Card</Card.Title>
                  <Card.Text>
                      Some text
                  </Card.Text>
                  <Button variant="primary">Apply Now</Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem', height: '22rem' }}>
              <Card.Img variant="top" src={black} />
              <Card.Body>
                  <Card.Title>Black Card</Card.Title>
                  <Card.Text>
                      Some text
                  </Card.Text>
                  <Button variant="primary">Apply Now</Button>
              </Card.Body>
          </Card>
</>
  )
}


