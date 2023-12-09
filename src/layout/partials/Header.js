import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
        
    // localStorage.removeItem('token');
    // console.log("handle logout");
    navigate("/");

}
  return (
    <Navbar collapseOnSelect variant='dark' bg='info' expand='md'>
     <Navbar.Brand>logo</Navbar.Brand>
     <Navbar.Toggle aria-controls='basic-navbar-nav'/>
     <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
            {/* <Link to='/dashBoard'>Dashboard</Link>
            <Link to='/ticketsList'>Tickets</Link>
            <Link to='/logout'>Logout</Link> */}
            <LinkContainer to='/dashBoard'><Nav.Link >Dashboard</Nav.Link></LinkContainer>
            <LinkContainer to='/ticketsList'><Nav.Link>Tickets</Nav.Link></LinkContainer>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>    
        </Nav>
     </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
