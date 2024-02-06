import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// test that Notifications renders without crashing
describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders NotificationItem', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem')).toBeDefined();
        expect(wrapper.find('NotificationItem').first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });

    it('renders a text', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });
});