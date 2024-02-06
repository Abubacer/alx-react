import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// test that Notifications renders without crashing
// test that it renders three list items
// test that it renders the text 'Here is the list of notifications'
describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('renders a text', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });
});