import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;