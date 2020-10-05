import Navbar from 'react-bootstrap/Navbar';
import React, { Component, Nav }  from 'react';

function NavBar (props) {

return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Navbar>
)

}

export default NavBar