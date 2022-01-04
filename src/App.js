// src/App.js

import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { getEvents, extractLocations } from './api';
import './nprogress.css';
import {Container, Row} from 'react-bootstrap'
import './App.scss';
import logo from './img/logo192.png';



class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 12,
    errorText: ''
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
    if (newVal > 11) {
      this.setState({
        numberOfEvents: 11,
        errorText: 'select a number from 1 to 11'
      });
    } else {
      this.setState({
        numberOfEvents: newVal,
        errorText: ''
      });
    }
    
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents, this.state.errorText);
  };
  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <Container fluid>
          <div className="nav-bar">
              <a href= "/"><img
              src={logo}
              alt="MeetApp logo"
              /></a>
              <div className="search">
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
              <NumberOfEvents numberOfEvents={numberOfEvents} updateEventCount={this.updateEventCount} errorText={this.state.errorText}/>
              </div>
          </div>
          <Row>
            <EventList events={this.state.events}/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;