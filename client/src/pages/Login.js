import React, { useState } from 'react';

import { Container, Button, Form} from 'react-bootstrap';
import Signup from './Signup';

const signup = () => {
    window.location.replace("/signup");
}

const Login = () => {
    const [formInput, setFormInput] = useState('');
    const [submittingForm, setSubmittingForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmittingForm(true);
    
        if (!formInput) {
          return false;
        }
        
        //Send data to login endpoint
        try {
          const response = await fetch(`api/users/login`, {
            method: 'POST',
            body: JSON.stringify({ ...formInput}),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (!response.ok) {
            console.log(response);
            throw new Error('something went wrong!');
          }
    
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
                        <Form.Control type="email" name ="email" value={formInput.email || ''} placeholder="Enter email" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" disabled={submittingForm}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formInput.password || ''} placeholder="Password" onChange={handleChange}/>
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="primary" 
                        type="submit" 
                        className='col-sm-8 col-md-4 col-lg-2 m-2'
                        disabled={!(formInput.firstname && formInput.lastname && formInput.username && formInput.email && formInput.password)}>
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

                    {submittingForm &&
                    <div>Trying to log you in...</div>}
            </div>
        </Container>
        </>
    );
};

export default Login;