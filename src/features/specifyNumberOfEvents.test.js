import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event.js';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  // Feature file has a scenario titled "When user hasn’t specified a number 32 is the default number", but no match found in step definitions. Try adding the following code:

  test('When user hasn’t specified a number 32 is the default number', ({ given, when, then }) => {
      given('a user is on the main page', () => {

      });

      when('the user hasn’t specified a number of events', () => {

      });

      then('the default amount of events will be shown', () => {

      });
  });

  // Feature file has a scenario titled "User can change the number of events they want to see", but no match found in step definitions. Try adding the following code:

  test('User can change the number of events they want to see', ({ given, when, then }) => {
      given('a user is on the main page', () => {

      });

      when('a user specifies the number of events', () => {

      });

      then('the specified number of events is displayed', () => {

      });
  });
 });