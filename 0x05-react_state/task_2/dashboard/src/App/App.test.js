/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';
import { act } from 'react-dom/test-utils';
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
            expect(wrapper.find('Login')).toHaveLength(1);
        });

        it('includes CourseList component', () => {
            expect(wrapper.find('CourseList').exists());
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

  it('checks if default value of displayDrawer in state is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('checks if after calling handleDisplayDrawer, the state displayDrawer should now be true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('checks if after calling handleHideDrawer, the state displayDrawer is updated to be false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

    it(`checks if the logIn function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const testUser = {
			email: 'test@mail.com',
			password: 'test123',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);

    act(() => {
      const instance = wrapper.instance();
		  instance.logIn(testUser.email, testUser.password);
    });

		expect(wrapper.state().user).toEqual(testUser);
		wrapper.unmount();
	});

	it(`checks if the logOut function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		expect(wrapper.state().user).toEqual(user);

    act(() => {
		const instance = wrapper.instance();
		instance.logOut();
    });
		expect(wrapper.state().user).toEqual(user);
		wrapper.unmount();
	});
});
