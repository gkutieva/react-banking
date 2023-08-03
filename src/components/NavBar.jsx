import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import {GiWallet} from 'react-icons/gi';

const containerStyles = {
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
}

const linkStyles = {
  textDecoration: "none",
  color:'#212529',
  paddingLeft: '1rem'
}

const navDropdownStyles = {
  display:"block",
  textDecoration: "none",
  paddingLeft: '1rem',
  color:'#212529',
  
}

export const NavBar = () => {
  return (
    <div id='nav-bar'>
        <Navbar bg="light" expand="lg">
          <Container style={containerStyles}>
              <Link to="/" style={{...linkStyles, color: "#0D6DFD"}}><GiWallet /> Blue Wallet</Link>

              <Navbar.Collapse id="basic-navbar-nav">
                       
                        <Link to="/" style={linkStyles}>
                            Home
                        </Link>
                        
                      <NavDropdown title="Wallet" id="basic-nav-dropdown" style={linkStyles}>

                        <Link to="/wallet" style={navDropdownStyles}>
                          Blue Card
                        </Link>
              
                        <Link to="/wallet" style={navDropdownStyles}>
                            Gold Card
                        </Link>

                        <Link to="/wallet" style={navDropdownStyles}>
                          Black Card
                        </Link>
  
                      </NavDropdown>
  
              </Navbar.Collapse>
          </Container>
      </Navbar>   
</div>
  )
}


