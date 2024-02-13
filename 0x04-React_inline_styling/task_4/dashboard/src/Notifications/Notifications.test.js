import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from 'aphrodite';

// test Notifications component
describe("Notifications component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders NotificationItem", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find("NotificationItem")).toBeDefined();
  });

  it("the menuItem is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.NotificationItem").exists()).toBe(false);
  });

  it("the menuItem is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  describe("listNotifications", () => {
    let latestNotification;
    let listNotifications;

    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });

    it("renders with values", () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists()).toBeTruthy();
      const Notificationitem = wrapper.find("NotificationItem");
      expect(Notificationitem).toHaveLength(3);
    });

    it("renders without values", () => {
      listNotifications = [];
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists()).toBeTruthy();
      const Notificationitem = wrapper.find("NotificationItem");
      expect(Notificationitem).toHaveLength(1);
    });

    it("renders without listNotifications", () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      const Notificationitem = wrapper.find("NotificationItem");
      expect(Notificationitem).toHaveLength(1);
    });
  });
});

describe('onclick markAsRead event behaves as it should', () => {
	it('should call console.log with Notification $id has been marked as read', () => {
		const wrapper = shallow(<Notifications />);
		const spy = jest.spyOn(console, 'log').mockImplementation();

		wrapper.instance().markAsRead = spy;
		wrapper.instance().markAsRead(1);
		expect(wrapper.instance().markAsRead).toBeCalledWith(1);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(1);
		spy.mockRestore();
	});
});

describe("Notifications component props", () => {
  let listNotifications;

  beforeEach(() => {
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];
  });

  it("doesn't rerender when updating the props of the component with the same listNotifications", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(
      false
    );
  });

  it("rerenders if listNotifications is changed", () => {
    const updatedListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "New projects available" },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(wrapper.instance().shouldComponentUpdate(updatedListNotifications)).toBe(
      true
    );
  });
});
