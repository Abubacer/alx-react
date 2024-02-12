import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;

        let li;

        const handleClick = () => {
            markAsRead(id);
        };

        if (value) {
            li = <li onClick={handleClick} data-notification-type={type}>{value}</li>;
        } else if (html) {
            li = <li onClick={handleClick} data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
        } else {
            li = <li onClick={handleClick} data-notification-type={type}></li>;
        }

        return li;
    }
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
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

export default NotificationItem;
