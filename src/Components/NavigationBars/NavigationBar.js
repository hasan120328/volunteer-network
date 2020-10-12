import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import  volunteerLogo from '../../logos/group1.png';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            
  <Navbar.Brand href="#home"> <img style={{width:100}} src={volunteerLogo } alt=""/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
      <Nav.Link href="#home">Events</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Register</Nav.Link>
      <Nav.Link href="#link">Admin</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </div>
    );
};

export default NavigationBar;