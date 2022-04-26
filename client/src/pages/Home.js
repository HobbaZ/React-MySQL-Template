import React, { useState } from 'react';

import { Container, Button} from 'react-bootstrap';

import HeroImage from '../components/HeroImage';

function getUsers() {

    const response = fetch(`/api/users`)
      if (!response.ok) {
        console.log("Found all users", response);
        throw new Error('Error in finding all users!');
      }
    };

const Home = () => {

    return (
        <>
        <Container>
          <HeroImage/>
            <div>
            <Button onClick={getUsers}>Get All Users</Button>
            </div>
        </Container>
        </>
    );
};

export default Home;