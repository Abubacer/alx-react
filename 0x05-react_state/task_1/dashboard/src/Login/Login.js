import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <>
      <div className={css(loginStyles.login)}>
        <p>Login to access the full dashboard</p>
        <form
          className={css(loginStyles.inputContainer)}
          onSubmit={handleLoginSubmit}
        >
          <div>
            <label htmlFor='email' className={css(loginStyles.input)}>
              <strong>Email:</strong>
            </label>
            <input
              type='email'
              id='email'
              className={css(loginStyles.input)}
              value={email}
              onChange={handleChangeEmail}
            />
            <label htmlFor='password' className={css(loginStyles.input)}>
              <strong>Password:</strong>
            </label>
            <input
              type='password'
              id='password'
              className={css(loginStyles.input)}
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <input
            type='submit'
            disabled={!enableSubmit}
            className={css(loginStyles.button)}
            value='Ok'
          />
        </form>
      </div>
    </>
  );
}

const loginStyles = StyleSheet.create({
  inputContainer: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
    },

    "@media (min-width: 900px)": {
      display: "flex",
      flexDirection: "row",
    },
  },

  input: {
    margin: "0.5rem 0.5rem 0rem 0",
    height: "1.5rem",
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
