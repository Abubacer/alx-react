import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;

        let li;

        const handleClick = () => {
            markAsRead(id);
        };

        if (type === 'urgent') {
            li = <li className={css(itemTypeStyles.urgent)} onClick={handleClick} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>;
        } else {
            li = <li className={css(itemTypeStyles.default)} onClick={handleClick} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>;
        }

        return li;
    }
}

NotificationItem.defaultProps = {
    type: 'default',
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

const itemTypeStyles = StyleSheet.create({
    default: {
        color: "blue",
    },
    urgent: {
        color: "red",
    }
});

export default NotificationItem;
