import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(loginStyles.login)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' className={css(loginStyles.input)}><strong>Email:</strong></label>
        <input type='email' id='email'/>
        <label htmlFor='password' className={css(loginStyles.input)}><strong>Password:</strong></label>
        <input type='password' id='password'/>
        <button type='button' className={css(loginStyles.button)}>Ok</button>
      </div>
    </>
  );
}

const loginStyles = StyleSheet.create({
  login: {
    padding: "1rem",
  },
  input: {
    margin: "1rem",
  },
  button: {
    margin: "1rem",
    border: "1px solid gray",
    backgroundColor: "#ffffff",
    padding: "2px 6px 2px 6px",
  },
});

export default Login;
