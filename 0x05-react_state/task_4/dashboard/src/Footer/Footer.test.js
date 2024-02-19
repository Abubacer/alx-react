/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import { jest } from "@jest/globals";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

describe("Footer component", () => {
  let wrapper;

  beforeEach(() => {
    // Initialize wrapper before each test
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Footer />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders the text “Copyright”", () => {
    expect(wrapper.find("footer.footer p").exists()).toEqual(true);
    expect(wrapper.find("footer.footer p").text()).toContain("Copyright");
  });
});
describe("Footer Component context and state", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("checks if the link is not rendered when user is logged out", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(0);
    expect(wrapper.find("a").exists()).toBe(false);
    expect(wrapper.text()).not.toContain("Contact us");

    wrapper.unmount();
  });

  it("checks if the link is rendered when user is loggedin ", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.text()).toContain("Contact us");

    wrapper.unmount();
  });
});
