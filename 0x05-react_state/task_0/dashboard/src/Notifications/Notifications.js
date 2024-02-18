import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, css } from "aphrodite";

import NotificationItem from "./NotificationItem.js";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape.js";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length ||
    nextProps.displayDrawer !== this.props.displayDrawer;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className='menuItem'>
          <p
          className={css(menuitemStyles.menuItem, menuitemStyles.hoverAnimation)}
          onClick={this.props.handleDisplayDrawer}
          >
            Your notifications
          </p>
        </div>
        {this.props.displayDrawer && (
          <div className={css(notificationStyles.notification)}>
            <button
              style={{
                position: "absolute",
                background: "transparent",
                right: "0.5rem",
                top: "0.5rem",
                opacity: "0.4",
                border: "none",
                zIndex: 9999,
                cursor: "pointer",
              }}
              aria-label='Close'
              onClick={() => {
              console.log('Close button has been clicked');
              this.props.handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt='close' height='15px' width='15px' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem value='No new notification for now' />
              ) : (
                this.props.listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    markAsRead={this.markAsRead}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    id={notification.id}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const notificationStyles = StyleSheet.create({
  notification: {
    "@media (max-width: 900px)": {
      backgroundColor: "#ffffff",
      color: "121212",
      fontSize: "20px",
      position: "absolute",
      width: "100%",
      height: "100%",
      right: "0",
      top: "0",
    },

    "@media (min-width: 900px)": {
      backgroundColor:"#fffff8",
      border: "2px dashed #e41d3e",
      padding: "0.6rem",
      color: "121212",
      float: "left",
      fontSize: "16px",
      position: "absolute",
      right: "2rem",
      top: "0.5rem",
      width: "35%",
      height: "16%",
    },
  },
});

const opacityKeyframes = {
  "50%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
};

const bounceKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

const menuitemStyles = StyleSheet.create({
  menuItem: {
    position: "absolute",
    right: "2rem",
    top: "0.1rem",
    float: "right",
    textAlign: "right",
  },

  hoverAnimation: {
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
      animationDirection: "normal",
      cursor: "pointer",
    }
  },
});

export default Notifications;
