import { Map } from 'immutable';
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes.js';
import { notificationsNormalizer } from '../schema/notifications';

const initialNotificationState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
});

const notificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.merge(Map(notificationsNormalizer(action.data)));

        case MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        default:
            return state;
    }
};

export default notificationReducer;
