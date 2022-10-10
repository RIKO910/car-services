import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" name='name' id='' placeholder='your name' />
                <br />
                <input type="text" name='email' id='' placeholder='email' required/>
                <br />
                <input type="text" name='email' id='' placeholder='email' required/>
            </form>
        </div>
    );
};

export default Register;