import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(loginStyles.login)}>
        <p>Login to access the full dashboard</p>
        <div className={css(loginStyles.inputContainer)}>
        <label htmlFor='email' className={css(loginStyles.input)}><strong>Email:</strong></label>
        <input type='email' id='email' className={css(loginStyles.input)} />
        <label htmlFor='password' className={css(loginStyles.input)}><strong>Password:</strong></label>
        <input type='password' id='password'className={css(loginStyles.input)} />
        <button type='button' className={css(loginStyles.button)}>Ok</button>
        </div>
      </div>
    </>
  );
}

const loginStyles = StyleSheet.create({
  login: {
  },

  inputContainer: {
    '@media (max-width: 900px)': {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
    },

    '@media (min-width: 900px)': {
      display: "flex",
      flexDirection: "row",
    },
  },

  input: {
    margin: "0.5rem 0.5rem 0rem 0",
    height: "1.5rem"
  },

  button: {
    border: "1px solid gray",
    backgroundColor: "#ffffff",
    padding: "6px",
    maxWidth: "2.5rem",
    marginTop: "0.5rem",
  },
});

export default Login;
