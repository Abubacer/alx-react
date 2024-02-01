import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils.js';
import closeIcon from './close-icon.png'

function Notifications() {
    return (
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
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
        </div>
    )
}

export default Notifications;