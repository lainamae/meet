// src/EventList.js

import React, { Component } from 'react';
import Event from './Event';
import {Col} from 'react-bootstrap'

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList d-flex flex-row flex-wrap">
 {events.map(event =>
        <Col md={4} key={event.id} className="event-col">
        <li>
          <Event event={event} />
        </li>
        </Col>
      )}
      </ul>
    );
  }
}

export default EventList;