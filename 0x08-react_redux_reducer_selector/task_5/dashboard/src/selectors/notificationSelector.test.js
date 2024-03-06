import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from './notificationSelector';

describe('notification selectors', () => {
    const initialState = {
        notification: {
            filter: 'DEFAULT',
            notifications: [
                { id: 1, isRead: false, type: 'default', value: 'New course available' },
                { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
                { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
            ]
        }
    };

    it('filterTypeSelected returns the correct filter type', () => {
        const selectedFilter = filterTypeSelected(initialState);
        expect(selectedFilter).toBe('DEFAULT');
    });

    it('getNotifications returns a list of notifications', () => {
        const notifications = getNotifications(initialState);
        expect(notifications).toEqual([
            { id: 1, isRead: false, type: 'default', value: 'New course available' },
            { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
            { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
        ]);
    });

    it('getUnreadNotifications returns a list of unread notifications', () => {
        const unreadNotifications = getUnreadNotifications(initialState);
        expect(unreadNotifications).toEqual([
            { id: 1, isRead: false, type: 'default', value: 'New course available' },
            { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
        ]);
    });
});
