/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe('ctrl + h alert', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls logOut and alert when Ctrl + h is pressed', () => {
    // Mock the logOut function
    const logOutMock = jest.fn();

    // Mock the alert function
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Render the component
    const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);

    // Simulate the keydown event with Ctrl + h
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    // Expect logOut to have been called
    expect(logOutMock).toHaveBeenCalled();

    // Expect alert to have been called with the correct message
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  });
});
