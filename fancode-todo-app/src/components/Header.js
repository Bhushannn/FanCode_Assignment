import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../images/fancode.png';

// this is simple UI for Header 
const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img
          src={logo}
          alt="FanCode Logo"
          style={{ width: '100px', height: '40px', marginRight: '10px' }}
        />
        FanCode Todo Checker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#todos">Todos</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
