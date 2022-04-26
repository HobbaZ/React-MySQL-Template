import React from 'react';
import Container from 'react-bootstrap/Container';

//Change year automatically
function year() {
  let date = new Date();
  return date.getFullYear();
}

const Footer = () => {
return (
  <>
  <Container className='bg-primary text-white text-center' fluid>
  <div>
      <h4>Example {year()} </h4>
  </div>
  </Container>
  </>
);
};

export default Footer;