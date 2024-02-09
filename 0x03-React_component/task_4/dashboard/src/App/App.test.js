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
describe("When ctrl + h is pressed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("calls logOut function", () => {
    const mockedLogOut = jest.fn();
    wrapper.setProps({ logOut: mockedLogOut });

    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event); // Mock document object

    expect(mockedLogOut).toHaveBeenCalledTimes(1);
  });

  it("checks that alert function is called", () => {
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event); // Mock document object

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("checks that the alert is 'Logging you out'", () => {
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event); // Mock document object

    expect(spy).toHaveBeenCalledWith("Logging you out");
    spy.mockRestore();
  });
});
