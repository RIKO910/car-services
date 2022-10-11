import React, { useRef } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    
    const navigate =useNavigate()
    const emailRef = useRef('');
    const passwordRef =useRef('');
    const nameRef=useRef('');



const navigateLogin =event =>{
  navigate('/login');
  console.log(event.target.value)
}
const handleRegister =event =>{
    event.preventDefault();
    const email =emailRef.current.value;
    const password =passwordRef.current.value;
    const name =nameRef.current.value;
    console.log(name,password,email)
}
    return (
        <div className='containerRegister'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister} className='form'>
                <input ref={nameRef} type="text" name='name' id='' placeholder='your name' />
                <br />
                <input ref={emailRef} type="email" name='email' id='' placeholder='email' required/>
                <br />
                <input ref={passwordRef} type="password" name='password' id='' placeholder='password' required/>
                <br />
                <input className='submit' type="submit" value="Register" />
            </form>
            
            <p>Already have an account <span role="button" onClick={navigateLogin} className='text-danger'>Please Login</span></p>

        </div>
    );
};

export default Register;