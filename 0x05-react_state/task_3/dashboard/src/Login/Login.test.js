/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount } from "enzyme";
import Login from "./Login";
import { jest } from '@jest/globals';
import { StyleSheetTestUtils } from "aphrodite";

describe("Login component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper =  mount(<Login />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders a login classname", () => {
    expect(wrapper.find("div").exists()).toEqual(true);
  });

  it("renders tree input tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });

  it("renders two label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("renders a disabled submit button by default", () => {
    expect(wrapper.find('input[type="submit"]').props().disabled).toEqual(true);
  });

  it("enables the submit button after changing input values", () => {
    wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'password123' } });

    expect(wrapper.find('input[type="submit"]').props().disabled).toEqual(false);
  });
});
