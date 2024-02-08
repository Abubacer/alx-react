import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders with type and value props', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
        expect(wrapper.text()).toEqual('test');
    });

    it('renders with html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
    });
});
