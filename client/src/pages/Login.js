import React, { useState } from 'react';

import { Container, Button, Form} from 'react-bootstrap';

import Auth from '../utils/auth';

const signup = () => {
    window.location.replace("/signup");
}

let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = () => {
    const [formInput, setFormInput] = useState({ email: '', password: '' });
    const [submittingForm, setSubmittingForm] = useState(false);

    // state for messages
    const [infoMessage, setInfoMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmittingForm(true);
    
        if (!formInput) {
          return false;
        }
        
        //Send data to login endpoint
        try {
          const response = await fetch(`/api/users/login`, {
            method: 'POST',
            body: JSON.stringify({ ...formInput}),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (!response.ok) {
            console.log(response);
            setInfoMessage('Wrong email or password entered')
            throw new Error('something went wrong trying to log in!');
          }

          const { token, user } = await response.json();
          setInfoMessage('Logging in!')
          console.log('logging in', user);
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
        <Container>
            <div>
                <h1 className='text-center'>Login</h1>
                <Form onSubmit={handleSubmit} className='mx-auto'>
                    
                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name ="email" value={formInput.email.trim() || ''} placeholder="Enter email" onChange={handleChange} required/>
                    </Form.Group>

                    {!emailRegex.test(formInput.email) ? 
                        <div className="text-center text-danger">{"Invalid email entered"}</div> : ''};

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formInput.password || ''} placeholder="Password" onChange={handleChange} required/>
                    </Form.Group>

                    {formInput.password.length < 8 ? 
                        <div className="text-center text-danger">{"Password must be minimum 8 characters"}</div> : ''};

                    {infoMessage && (
                  <div className='text-center'>{infoMessage}</div>
                )}

                    <div className='text-center'>
                        <Button variant="primary" 
                        type="submit" 
                        className='col-sm-8 col-md-4 col-lg-2 m-2'
                        disabled={!(formInput.email && formInput.password)}>
                            Login
                        </Button>
                    </div>
                    </Form>

                    <div className='text-center'>
                    <Button variant="primary"
                    className='col-sm-8 col-md-4 col-lg-2 m-2'
                    onClick={signup}>
                        Sign Up instead
                    </Button>
                </div>

                
            </div>
        </Container>
        </>
    );
};

export default Login;