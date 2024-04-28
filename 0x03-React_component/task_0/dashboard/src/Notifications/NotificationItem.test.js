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
describe('onclick event behaves as it should', () => {
	it('should call console.log', () => {
		const wrapper = shallow(<NotificationItem />);
		const spy = jest.fn();

		wrapper.setProps({ value: 'test item', markAsRead: spy, id: 1 });
		wrapper.find('li').props().onClick();
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(1);
		spy.mockRestore();
	});
});
