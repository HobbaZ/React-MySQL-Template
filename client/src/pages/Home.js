import React, { useState } from 'react';

import { Container, Button} from 'react-bootstrap';

function getUsers() {

    const response = fetch(`/api/users`).then((data) => {
      console.log(data);
    })
      if (!response.ok) {
        console.log(response);
        throw new Error('something went wrong!');
      }
    };

const Home = () => {

    return (
        <>
        <Container>
            <div>
            <Button onClick={getUsers}>Get All Users</Button>
            </div>
        </Container>
        </>
    );
};

export default Home;