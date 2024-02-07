/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

// test that App renders without crashing
// test if the App contain Notifications, Header, Login, and Footer components
describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />)
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('contain Notifications component', () => {
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it('contain Header component', () => {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('contain Login component', () => {
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('contain Footer component', () => {
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('does not display CourseList when isLoggedIn is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList').exists()).toBe(false);
    });

    describe('when isLoggedIn is true', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<App isLoggedIn={true} />);
        });

        it('does not include Login component', () => {
            expect(wrapper.find('Login').exists()).toBe(false);
        });

        it('includes CourseList component', () => {
            expect(wrapper.find('CourseList').exists()).toBe(true);
        });
    });
});

describe('when ctrl and h are pressed at the same time', () => {
    it('calls the logout function', () => {
        const mocked = jest.fn();
        const wrapper = mount(<App logOut={mocked} />);
        wrapper.simulate('keydown', {
            ctrlKey: true,
            key: 'h'
        });

        expect(mocked).toHaveBeenCalledTimes(1);
        wrapper.unmount();
    });

    it('calls the alert function', () => {
        const spy = jest.spyOn(window, 'alert');
        const wrapper = mount(<App />);
        wrapper.simulate('keydown', {
            ctrlKey: true,
            key: 'h'
        });

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
        wrapper.unmount();
    });

    it('calls the alert function with the correct message', () => {
        const spy = jest.spyOn(window, 'alert');
        const wrapper = mount(<App />);
        wrapper.simulate('keydown', {
            ctrlKey: true,
            key: 'h'
        });

        expect(spy).toHaveBeenCalledWith('Logging you out');
        spy.mockRestore();
        wrapper.unmount();
    });
});