import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom component", () => {
  it("should apply margin bottom to child component", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test'>
        <div>Child component content</div>
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);
    expect(bodySection.prop("title")).toEqual("test");
  });
});
