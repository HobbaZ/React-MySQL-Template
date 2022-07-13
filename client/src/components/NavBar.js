import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Auth from '../utils/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const AppNavbar = () => {

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light">
  <Container fluid>
  <Navbar.Brand as={Link} className="text-white" to='/'>Logo</Navbar.Brand>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <Nav className="navbar-nav ml-auto mb-2 mb-lg-0">
      <Nav.Link as={Link} className="text-white active" to='/'>Home</Nav.Link>
      <Nav.Link as={Link} className="text-white" to='/about'>About</Nav.Link>

      {/* if user is logged in show profile and logout tabs*/}
      {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} className="text-white" to='/profile'><FontAwesomeIcon icon={faUser} /> Profile</Nav.Link>
                <Nav.Link onClick={Auth.logout} className="text-white"><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</Nav.Link>
              </>
            ) : (
              
              <>
            {/*Else show login and signup links*/}
              <Nav.Link as={Link} className="text-white" to='/login'><FontAwesomeIcon icon={faArrowRightToBracket} /> Login</Nav.Link>
              <Nav.Link as={Link} className="text-white" to='/signup'><FontAwesomeIcon icon={faUser} /> Sign Up</Nav.Link>
          </>
            )}
      </Nav>

    </div>
  </Container>
</nav>

    </>
  );
};

export default AppNavbar;