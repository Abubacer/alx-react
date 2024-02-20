/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { act } from "react-dom/test-utils";

// test that App renders without crashing
// test if the App contain Notifications, Header, Login, and Footer components
describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = shallow(<App />);
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

describe("App logOut function", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<App logOut={()=>{}}/>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("calls alert when ctrl + h are pressed", () => {
    const spyAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
    window.dispatchEvent(event);
    expect(spyAlert).toHaveBeenCalledWith("Logging you out");
  });
});

describe("App Component's State />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  it('check if default value of displayDrawer in state is false', () => {
    expect(wrapper.state().displayDrawer).toEqual(false);

    act(() => {
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    });
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('check if after calling handleDisplayDrawer, the state displayDrawer change to true/false', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});
