import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location=useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
       
        errorElement=   <div>
             <p className='text-danger'>Error: {error.message}</p>
           </div>
         
       }
    
    const handleSubmit = event => {
        // `current` points to the mounted text input element
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
      
        
            
    };
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
        auth
      );
    const resetPassword = async () =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }
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
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New to Car Service <span role="button" className='text-danger' onClick={navigateRegister}>Please Register</span></p>
            <p>Forget Password ? <span role="button" className='text-danger'  onClick={resetPassword}>Reset Password</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;