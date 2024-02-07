import React from "react";
import { shallow } from "enzyme";
import App from "./App";

// test that App renders without crashing
// test if the App contain Notifications, Header, Login, and Footer components
describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("contain Notifications component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("contain Header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("contain Login component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("contain Footer component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("does not display CourseList when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  it("when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("Login").exists()).toBe(false);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });
});
