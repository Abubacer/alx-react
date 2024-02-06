import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';

import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import closeIcon from '../assets/close-icon.png';

function Notifications({ displayDrawer }) {
    return (
        <React.Fragment>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className='Notifications'>
                    <button style={{
                        position: 'absolute',
                        right: '1rem',
                        background: 'transparent',
                        opacity: '0.4',
                        border: 'none',
                    }}
                        aria-label='Close'
                        onClick={() => {
                            console.log('Close button has been clicked');
                        }}>
                        <img src={closeIcon} alt="close" height="15px" width="15px"></img>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type='default' value='New course available' />
                        <NotificationItem type='urgent' value='New resume available' />
                        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
};

Notifications.defaultProps = {
    displayDrawer: false,
  };

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

export default Notifications;