import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, numberOfEvents ;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={numberOfEvents}/>)
  });
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: 22 }};
    
    NumberOfEventsWrapper.find('.number-events-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(22);
  });
})