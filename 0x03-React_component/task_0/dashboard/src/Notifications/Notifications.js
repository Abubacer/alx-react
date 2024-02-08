import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';

import NotificationItem from './NotificationItem.js';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape.js';

function Notifications({ displayDrawer, listNotifications }) {
    return (
        <React.Fragment>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className='Notifications'>
                    <button onClick={() => {
                            console.log('Close button has been clicked');
                    }}
                        style={{
                        position: 'absolute',
                        background: 'transparent',
                        right: '1rem',
                        opacity: '0.4',
                        border: 'none',
                    }}
                    aria-label='Close'>
                        <img src={closeIcon} alt="close" height="15px" width="15px"/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 ? (
                            <NotificationItem value='No new notification for now' />
                        ) : (
                            listNotifications.map(notification => (
                                <NotificationItem
                                key={notification.id}
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
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;