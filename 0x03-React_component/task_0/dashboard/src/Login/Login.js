import React from 'react';
import './Login.css';

function Login() {
  return (
      <div className='login'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'><strong>Email:</strong></label>
        <input type='email' id='email'/>
        <label htmlFor='password'><strong>Password:</strong></label>
        <input type='password' id='password'/>
        <button type='button'>Ok</button>
      </div>
  );
}

export default Login;
