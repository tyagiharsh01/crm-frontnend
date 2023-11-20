import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar collapseOnSelect variant='dark' bg='info' expand='md'>
     <Navbar.Brand>logo</Navbar.Brand>
     <Navbar.Toggle aria-controls='basic-navbar-nav'/>
     <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
            <Nav.Link href='/dashBoard'>Dashboard</Nav.Link>
            <Nav.Link href='/tickets'>Tickets</Nav.Link>
            <Nav.Link href='/logout'>Logout</Nav.Link>
        </Nav>
     </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
