import { createSelector } from 'reselect';

export const filterTypeSelected = state => state.notification.filter;
export const getNotifications = state => state.notification.notifications;

export const getUnreadNotifications = createSelector(
    [getNotifications],
    notifications => notifications.filter(notification => !notification.isRead)
);
