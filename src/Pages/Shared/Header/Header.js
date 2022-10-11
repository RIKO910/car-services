import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
const Header = () => {
  const [user] =useAuthState(auth);
  const handleSignOut =() =>{
 signOut(auth)
  }
    return (     
  <Navbar collapseOnSelect expand="lg"  sticky='top' bg="dark" variant="dark">
      <Container >
        
        <Navbar.Brand as={Link} to="/"><img height='30px' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Services</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/About">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/expert">
                Expert
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
       { 
        user?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign Out</button>
         :
       <Nav.Link  as={Link} to="/login">
          login
        </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    );
};

export default Header;