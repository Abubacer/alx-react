import React from "react";
import PropTypes from "prop-types";

import "./Notifications.css";

import NotificationItem from "./NotificationItem.js";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape.js";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer && (
          <div className='Notifications'>
            <button
              onClick={() => {
                console.log("Close button has been clicked");
              }}
              style={{
                position: "absolute",
                background: "transparent",
                right: "1rem",
                opacity: "0.4",
                border: "none",
              }}
              aria-label='Close'
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
