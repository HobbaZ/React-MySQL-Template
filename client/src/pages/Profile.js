import React, { useEffect, useState } from 'react';

import { Container} from 'react-bootstrap';
import Auth from '../utils/auth';

function Greeting(props) {

    const date = new Date();
    let currentHour = date.getHours();
    let currentGreeting = '';
    
    if (currentHour >=0 && currentHour < 12) {
      currentGreeting = 'Good Morning';
  
    } else if (currentHour >= 12 && currentHour < 18 ) {
      currentGreeting = 'Good Afternoon';
  
    } else {
      currentGreeting = 'Good Evening';
    }
    return (
    <>
    <h1>{currentGreeting}, {props.firstname}</h1>
    <h4>Your current details are:</h4>
    <p>First Name: {props.firstname}</p>
    <p>Last Name: {props.lastname}</p>
    <p>Username: {props.username}</p>
    <p>Email: {props.email}</p>
    </>
    )
  }
  
  //put in useEffect
  const welcome = <Greeting lastname={userData.lastname} firstname={userData.firstname} username={userData.username} email={userData.email}/>
  
  const Profile = (props) => {

    return (
    <Container>
        <>
        {Auth.loggedIn() && (
            <>
              <h2 style={{"textAlign": "center"}}>Your Profile</h2>
      
              <div>
                {welcome}
              </div>
            </>
        
        )}
        </>
        </Container>
        );
    
};

export default Profile;