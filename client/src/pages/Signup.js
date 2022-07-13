import React, { useState } from 'react';

import { Container, Button, Form} from 'react-bootstrap';

import Auth from '../utils/auth';

const login = () => {
    window.location.replace("/login");
};

let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Signup = () => {
    const [formInput, setFormInput] = useState({ username: '', email: '', password: '' ,firstname: '', lastname: ''});
    const [submittingForm, setSubmittingForm] = useState(false);

const checkUsername = async () => {
    try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          console.log("Need to be logged in to do this")
          window.location.replace("/login");
          return false;
        }

        const response = await fetch('/api/users/me', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            authorization: `Bearer ${token}`},
          });

        if (!response.ok) {
          throw new Error('something went wrong getting user data!');
          
        }

        const user = await response.json();
        if (formInput.username === user.username) {
            return (
                <>
            {<div className="text-center text-danger">{"Username already exists"}</div>};
            </>
            )}
      } catch (err) {
        console.error(err);
      }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmittingForm(true);
    
        if (!formInput) {
          return false;
        }
        
        //Send data to create user endpoint
        try {
          const response = await fetch(`api/users`, {
            method: 'POST',
            body: JSON.stringify({ ...formInput}),
            headers: { 'Content-Type': 'application/json' },
          });
          
    
          if (!response.ok) {
            console.log(response);
            throw new Error('something went wrong!');
          }

          const { token, user } = await response.json();
          console.log(user);
          Auth.login(token);
    
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
                <h1 className='text-center'>Sign Up</h1>
                <Form onSubmit={handleSubmit} className='mx-auto'>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name ="firstname" value={formInput.firstname.trim() || ''} placeholder="First Name" onChange={handleChange} required minLength={2}/>
                    </Form.Group>

                    {formInput.firstname.length < 2 ? 
                        <div className="text-center text-danger">{"First name must be at least 2 characters"}</div> : ''};

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"name ="lastname" value={formInput.lastname.trim() || ''} placeholder="Last Name" onChange={handleChange} required minLength={2}/>
                    </Form.Group>

                    {formInput.lastname.length < 2 ? 
                        <div className="text-center text-danger">{"Last name must be at least 2 characters"}</div> : ''};
                    
                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Create a username</Form.Label>
                        <Form.Control type="text" name ="username" value={formInput.username.trim() || ''} placeholder="username" onChange={handleChange} required minLength={2} formNoValidate={true}/>
                    </Form.Group>
                    
                    {formInput.username.length < 2 ? 
                        <div className="text-center text-danger">{"Username must be at least 2 characters"}</div> : ''};

                    

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name ="email" value={formInput.email.trim() || ''} placeholder="Enter email" onChange={handleChange} required minLength={2}/>
                    </Form.Group>

                    {!emailRegex.test(formInput.email) ? 
                        <div className="text-center text-danger">{"Invalid email entered"}</div> : ''};

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formInput.password || ''} placeholder="Password" onChange={handleChange} required minLength={8}/>
                    </Form.Group>

                    {formInput.password.length < 8 ? 
                        <div className="text-center text-danger">{"Password must be minimum 8 characters"}</div> : ''};

                    <div className='text-center'>
                        <Button variant="primary" 
                        type="submit" 
                        className='col-sm-8 col-md-4 col-lg-2 m-2'
                        disabled={!(formInput.username)}>
                            Sign Up
                        </Button>
                    </div>

                    <div className='text-center'>
                    <Button variant="primary"
                    className='col-sm-8 col-md-4 col-lg-2 m-2'
                    onClick={login}>
                        login instead
                    </Button>
                </div>
                </Form>

                

                    {submittingForm &&
                    <div>Submitting the form...</div>}
            </div>
        </Container>
        </>
    );
};

export default Signup;