import React, { useState, useEffect } from 'react';

import { Container, Button, Form} from 'react-bootstrap';

import Auth from '../utils/auth';

const profile = () => {
    window.location.replace("/profile");
}

const EditDetails = () => {
    const [userData, setUserData] = useState({});
    const [formInput, setFormInput] = useState({ username: '', email: '' ,firstname: '', lastname: ''});
    const [submittingForm, setSubmittingForm] = useState(false);

    

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
            throw new Error('something went wrong!');
          }
  
          const user = await response.json();
          setUserData(user);
        } catch (err) {
          console.error(err);
        }
      };
  
      getUserData();
    }, []);

    const handleSubmit = async (event, userData) => {
        event.preventDefault();
        setSubmittingForm(true);
    
        if (!formInput) {
          return false;
        }
        
        //Send data to update user endpoint
        try {

            const token = Auth.loggedIn() ? Auth.getToken() : null;

            const response = await fetch(`api/users/${userData.id}`, {
                method: 'PUT',
                body: JSON.stringify({ ...formInput}),
                headers: { 'Content-Type': 'application/json',
                authorization: `Bearer ${token}`},
          });
    
          if (!response.ok) {
            console.log(response);
            throw new Error('something went wrong updating your details!');
          }

          const user = await response.json();
          console.log(user);
    
          setFormInput('');
        } catch (err) {
          console.error(err);
        }
      };

      const handleChange = async (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
      };

    return (
        <>
        <Container className='fluid'>
            <div>
                <h1 className='text-center'>Update Your Details</h1>
                <Form onSubmit={handleSubmit} className='mx-auto'>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Update First Name</Form.Label>
                        <Form.Control type="text" name ="firstname" value={formInput.firstname.trim() || ''} placeholder={userData.firstname} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Update Last Name</Form.Label>
                        <Form.Control type="text"name ="lastname" value={formInput.lastname.trim() || ''} placeholder={userData.lastname} onChange={handleChange}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Update Username</Form.Label>
                        <Form.Control type="text" name ="username" value={formInput.username.trim() || ''} placeholder={userData.username} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name ="email" value={formInput.email.trim() || ''} placeholder={userData.email} onChange={handleChange}/>
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="primary" 
                        type="submit" 
                        className='col-sm-8 col-md-4 col-lg-2 m-2'>
                            Update
                        </Button>
                    </div>
                </Form>

                <div className='text-center'>
                    <Button variant="primary"
                    className='col-sm-8 col-md-4 col-lg-2 m-2'
                    onClick={profile}>
                        cancel
                    </Button>
                </div>

                    {submittingForm &&
                    <div>Submitting the form...</div>}
            </div>
        </Container>
        </>
    );
};

export default EditDetails;