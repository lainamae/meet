// src/App.js

import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import {Container, Row} from 'react-bootstrap'
import './App.scss';

class App extends Component {
  state = {
    events: [],
    locations: []
  }
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        </Row>
        <Row>
        <EventList events={this.state.events}/>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;