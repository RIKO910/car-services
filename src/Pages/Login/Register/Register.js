import React, { useRef, useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Button, Form } from 'react-bootstrap';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);
    
    const navigate = useNavigate()
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateLogin = event => {
        navigate('/login');
        console.log(event.target.value)
    }
    if (user) {
        console.log('user',user)
    }
    const handleRegister = async( event )=> {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        // const agree =event.terms.terms.checked;
        
         await   createUserWithEmailAndPassword(email, password);
         await updateProfile({ displayName: name });
         console.log('Updated profile');
         navigate('/')
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='container okk w-50 '>
            <h2>Please Register</h2>

            <Form onSubmit={handleRegister} className='h-100 w-100'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} name='password'  type="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 text-primary ' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <br />
                <Button  
                disabled={!agree}
                variant="primary" className='submit' type="submit" value="Register">
                    Submit
                </Button>
            </Form>
            {/* <form onSubmit={handleRegister} className='form'>
                <input ref={nameRef} type="text" name='name' id='' placeholder='your name' />
                <br />
                <input ref={emailRef} type="email" name='email' id='' placeholder='email' required/>
                <br />
                <input ref={passwordRef} type="password" name='password' id='' placeholder='password' required/>
                <br />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree? 'text-primary ':'text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <br />
                <input className='submit w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form> */}

            <p>Already have an account <span role="button" onClick={navigateLogin} className='text-danger'>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;