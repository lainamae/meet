import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

import EventList from "../EventList";
import NumberOfEvents from '../NumberOfEvents';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  // Feature file has a scenario titled "When user hasn’t specified a number 12 is the default number", but no match found in step definitions. Try adding the following code:

  test('When user hasn’t specified a number 12 is the default number', ({ given, when, then }) => {
    let AppWrapper;

      given('a user is on the main page', () => {
        AppWrapper = mount(<App />);
      });

      when('the user hasn’t specified a number of events', () => {
        expect(AppWrapper.state('numberOfEvents')).toBe(12);
        AppWrapper.update();
      });

      then('the default amount of events will be shown', () => {
        expect(AppWrapper.find('.event')).toHaveLength(12);
      });
  });

  // Feature file has a scenario titled "User can change the number of events they want to see", but no match found in step definitions. Try adding the following code:

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;

      given('a user is on the main page', () => {
        AppWrapper = mount(<App />);
        const EventsQuantity = { target: { value: 8 } }
        AppWrapper.find('.number-events-input').simulate('change', 
        EventsQuantity);
      });

      when('a user specifies the number of events', () => {
        expect(AppWrapper.find('.EventList')).toHaveLength(1);
        
        AppWrapper.update();

      });

      then('the specified number of events is displayed', () => {
        // AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(8);
      });
  });
 });