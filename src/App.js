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
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32
  }
  async componentDidMount() {
    this.mounted = true;
    
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  updateEvents = async (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }
  updateEventCount = async (e) => {
    const newVal = e.target.value;
    this.setState({
      numberOfEvents: newVal,
    });
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  };
  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <Container>
          <Row>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents}
              updateEventCount={this.updateEventCount}/>
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