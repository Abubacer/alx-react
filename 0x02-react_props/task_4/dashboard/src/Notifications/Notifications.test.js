import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// test that Notifications renders without crashing
describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('NotificationItem')).toBeDefined();
        expect(wrapper.find('NotificationItem').first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });

    it('renders a text', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });

    it('the menuItem is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
    
    it('div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('div.Notifications').exists()).toBe(false);
    });

    it('the menuItem is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications').exists()).toBe(true);
    });
});
