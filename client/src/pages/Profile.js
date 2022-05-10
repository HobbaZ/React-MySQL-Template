import React, { useEffect, useState } from 'react';

import { Container, Button} from 'react-bootstrap';

import EditDetails from '../components/EditDetails'

import Auth from '../utils/auth';

const editAccount = () => {
  console.log('You want to edit your account');
    
};

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
  
  const Profile = () => {

    const [userData, setUserData] = useState({});

    // state for messages
    const [infoMessage, setInfoMessage] = useState('');

    useEffect(() => {
      const getUserData = async () => {
        try {
          const token = Auth.loggedIn() ? Auth.getToken() : null;
  
          if (!token) {
            console.log("Need to be logged in to do this")
            window.location.replace("/login");
            return false;
          }
  
          const response = await fetch('/api/users/me', {
              headers: { 'Content-Type': 'application/json',
              authorization: `Bearer ${token}`},
            });
  
          if (!response.ok) {
            setInfoMessage('something went wrong getting user data!')
            throw new Error('something went wrong getting user data!');
            
          }
  
          const user = await response.json();
          setUserData(user);
        } catch (err) {
          console.error(err);
        }
      };
  
      getUserData();
    }, []);

    //Delete account if logged in
    const deleteAccount = async () => {
      try {
    
          const token = Auth.loggedIn() ? Auth.getToken() : null;
    
          const response = await fetch(`/api/users/${userData.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
            authorization: `Bearer ${token}`},
          });
    
        if (!response.ok) {
          throw new Error('something went wrong with deleting account!');
        }
    
        //Delete user account, destroy access token and redirect to signup page if successful
        setInfoMessage('Account deleted!')
        console.log('user deleted')
        Auth.logout()
        window.location.replace("/signup");

      } catch (err) {
        console.error(err);
      }
    };
    

    const welcome = <Greeting lastname={userData.lastname} firstname={userData.firstname} username={userData.username} email={userData.email}/>

    return (
    <Container>
        <>
        {Auth && (
            <>
              <h2 style={{"textAlign": "center"}}>Your Profile</h2>
      
              <div>
                {welcome}
              </div>

              {infoMessage && (
                  <div>{infoMessage}</div>
                )}
                
              <div><EditDetails/></div>

              <Button variant="primary"
                    className='col-sm-8 col-md-4 col-lg-2 m-2'
                    onClick={editAccount}>
                        Edit Account
              </Button>

              <Button variant="primary"
                    className='col-sm-8 col-md-4 col-lg-2 m-2 bg-danger'
                    onClick={deleteAccount}>
                        Delete Account
              </Button>


            </>
        
        )}
        </>
        </Container>
        );
    
};

export default Profile;