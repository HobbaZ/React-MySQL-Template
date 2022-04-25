import React, { useState } from 'react';

import { Container, Button, Form} from 'react-bootstrap';

const Signup = () => {
    const [formInput, setFormInput] = useState('');
    const [submittingForm, setSubmittingForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmittingForm(true);
    
        if (!formInput) {
          return false;
        }
        
        //Send data to create user endpoint
        try {
          const response = await fetch(`api/users`, {method: 'POST'});
    
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
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name ="firstName" value={formInput.firstName || ''} placeholder="First Name" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"name ="lastName" value={formInput.lastName || ''} placeholder="Last Name" onChange={handleChange}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Create a username</Form.Label>
                        <Form.Control type="text" name ="username" value={formInput.username || ''} placeholder="username" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name ="email" value={formInput.email || ''} placeholder="Enter email" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formInput.password || ''} placeholder="Password" onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>

                    {submittingForm &&
                    <div>Submitting the form...</div>}
            </div>
        </Container>
        </>
    );
};

export default Signup;