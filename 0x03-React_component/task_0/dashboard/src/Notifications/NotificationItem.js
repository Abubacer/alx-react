import React from 'react';
import PropTypes from 'prop-types';

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

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
};

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};

export default NotificationItem;