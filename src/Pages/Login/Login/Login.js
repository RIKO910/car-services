import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location=useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    else
        alert('password is wrong !! please register again')
        
    const handleSubmit = event => {
        // `current` points to the mounted text input element
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    };


    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container okk w-50'>
            <h2>please login</h2>

            <Form onSubmit={handleSubmit} className='h-100 w-100'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>New to Car Service <span role="button" className='text-danger' onClick={navigateRegister}>Please Register</span></p>

        </div>
    );
};

export default Login;