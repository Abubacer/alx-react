import React, { Component } from "react";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { user, logOut } from "./AppContext";
import AppContext from "./AppContext";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export const listNotificationsInitialState = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

document.body.style.margin = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: listNotificationsInitialState,
    };
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((notification) => {
        return notification.id !== id;
      }),
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { user, logOut, displayDrawer, listNotifications } = this.state;

    const { isLoggedIn } = this.props;

    const value = { user, logOut };

    return (
      <AppContext.Provider value={value}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.container)}>
          <div className={css(styles.app)}>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title='News from the School'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              vehicula ipsum, sed egestas diam. Suspendisse potenti. In porta
              finibus dictum. Quisque bibendum erat nibh, quis sollicitudin
              augue pharetra in. Aliquam vehicula ipsum venenatis pretium
              luctus. Sed non lacus sit amet augue fermentum molestie. Nam felis
              arcu, tincidunt ut nibh vel, suscipit ullamcorper nulla.
              Pellentesque vitae vehicula tellus. Maecenas eu sem tincidunt,
              volutpat mi vel, scelerisque magna.
            </p>
          </BodySection>

          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

const cssVars = {
  mainColor: "#e01d3f",
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  container: {
    width: "calc(100% - 16px)",
    marginLeft: "8px",
    marginRight: "8px",
  },

  app: {
    borderBottom: `3px solid ${cssVars.mainColor}`,
  },

  appBody: {
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    borderTop: `3px solid ${cssVars.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    position: "fixed",
    paddingBottom: "10px",
    bottom: 0,
    fontStyle: "italic",
    [screenSize.small]: {
      position: "static",
    },
  },
});

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
  };
};

// export default App;

export default connect(mapStateToProps)(App);
