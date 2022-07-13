import React from 'react';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands'

//Change year automatically
function year() {
  let date = new Date();
  return date.getFullYear();
}

const Footer = () => {
return (
  <>
  <Container className='text-white text-center' fluid>
  <footer className='text-center'>
      <p>React App with MySQL Backend, {year()} 

          <a href="https://www.linkedin.com/in/zachary-hobba-52aaa182/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
          <a href="mailto:zachobba@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} /></a>
          <a href="https://github.com/HobbaZ"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
        </p>
  </footer>
  </Container>
  </>
);
};

export default Footer;