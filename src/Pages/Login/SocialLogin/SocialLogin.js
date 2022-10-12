import React from 'react';
import google from '../../../images/Social/google-logo.png'
import github from '../../../images/Social/Git-logo.png'
import facebook from '../../../images/Social/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {  useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement ;
    if (error) {
       
       errorElement=   <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
      if (user) {
        navigate('/')
      }
    if (error1) {
       
       errorElement=   <div>
            <p className='text-danger'>Error: {error1.message}</p>
          </div>
        
      }
      if (user1) {
        navigate('/')
      }
    return (
        <div>
            <div className='d-flex align-items-center' >
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div >
                <button 
                onClick={() => signInWithGoogle()}
                
                className='btn btn-info w-50 '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <br />
                <button className='btn btn-info w-50 m-2' >
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <br />
                <button 
                 onClick={() => signInWithGithub()}
                className='btn btn-info w-50 mb-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
                
            </div>
        </div>
    );
};

export default SocialLogin;