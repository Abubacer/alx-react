import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

class Header extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { user, logOut } = context;
          return (
            <>
              <header className={css(headerStyles.header)}>
                <img
                  src={logo}
                  className={css(headerStyles.headerLogo)}
                  alt='Holberton Logo'
                />
                <h1>School dashboard</h1>
              </header>
              {user.isLoggedIn && (
                <section id='logoutSection'>
                  <h2>
                    Welcome<strong> {user.email} </strong>
                    <em><a href='' onClick={logOut}>(logout)</a></em>
                  </h2>
                </section>
              )}
            </>
          );
        }}
      </AppContext.Consumer>
    );
  }
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
