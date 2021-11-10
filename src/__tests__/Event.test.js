// src/__tests__/EventList.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test("Summary is displayed", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("Location is displayed", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("Date and timezone are displayed", () => {
    expect(EventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("show more button is displayed", () => {
    expect(EventWrapper.find(".show-more")).toHaveLength(1);
  });
  test("default collapsed state for event is true", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
  test("change collapsed state on click of button", () => {
    EventWrapper.find('.show-more').simulate('click')
    expect(EventWrapper.state("collapsed")).toBe(false);
  });
  test("if collapsed state is false, details are visible", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    const moreInfo = EventWrapper.find(".more-info");
    expect(moreInfo.find(".show")).toHaveLength(1);
  });
  test("if collapsed state is true, details are not visible", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    const moreInfo = EventWrapper.find(".more-info");
    expect(moreInfo.find(".hidden")).toHaveLength(1);
  });
});