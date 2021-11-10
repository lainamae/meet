// src/EventList.js

import React, { Component } from 'react';
import Event from './Event';
class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList d-flex flex-row">
 {events.map(event =>
        <li className="col"key={event.id}>
          <Event event={event} />
        </li>
      )}
      </ul>
    );
  }
}

export default EventList;