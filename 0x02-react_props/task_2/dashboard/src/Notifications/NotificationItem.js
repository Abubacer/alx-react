import React from 'react';

function NotificationItem({ type, html, value }) {
    let li;

    if (value) {
        li = <li data-notification-type={type}>{value}</li>;
    } else if (html) {
        li = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
    } else {
        li = <li data-notification-type={type}></li>;
    }

    return li;
}

export default NotificationItem;