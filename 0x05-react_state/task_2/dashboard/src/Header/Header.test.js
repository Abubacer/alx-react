/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import { jest } from "@jest/globals";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from '../App/AppContext';

describe("Header component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    // Initialize wrapper before each test
    wrapper = shallow(<Header />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders img tag", () => {
    expect(wrapper.find("img")).toBeDefined();
  });

  it("renders h1 tag", () => {
    expect(wrapper.find("header h1")).toBeDefined();
  });

  it(`Tests that logoutSection is not rendered with default context values`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });

  it(`Tests that logoutSection is rendered with context values`, () => {
    const context = {
      user: {
        email: "test@mail.com",
        password: "1234",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });

  it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
    const context = {
      user: {
        email: "test@mail.com",
        password: "1234",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const spy = jest.spyOn(context, "logOut");

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("a").simulate("click");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
