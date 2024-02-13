import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
      <header className={css(headerStyles.header)}>
        <img src={logo} className={css(headerStyles.headerLogo)} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e41d3e",
    borderBottom: "2px solid #e41d3e",
  },
  headerLogo: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
