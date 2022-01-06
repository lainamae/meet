// src/App.js

import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
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
    errorText: '',
    // showWelcomeScreen: undefined
  }

  // async componentDidMount() {
  //   this.mounted = true;

  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({ events, locations: extractLocations(events) });
  //     }
  //   });
  // }
  async componentDidMount() { 
    this.mounted = true; 
    const accessToken = localStorage.getItem('access_token'); 
    const isTokenValid = (await checkToken(accessToken)).error ? false : 
    true; 
    const searchParams = new URLSearchParams(window.location.search);   
    const code = searchParams.get("code"); 
    this.setState({ showWelcomeScreen: !(code || isTokenValid) }); 
    if ((code || isTokenValid) && this.mounted) { 
    getEvents().then((events) => { 
    if (this.mounted) { 
    this.setState({ events, locations: extractLocations(events) }); 
    } 
    }); 
    } 
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
    if (newVal > 24) {
      this.setState({
        numberOfEvents: 24,
        errorText: 'select a number from 1 to 24'
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
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };
  render() {
    // if (this.state.showWelcomeScreen === undefined) return <div className="App" /> 
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
          <h4>Events in each city</h4>
          <ResponsiveContainer height={400} >
          <ScatterChart
           margin={{
             top: 20, right: 20, bottom: 20, left: 20,
           }}
          >
           <CartesianGrid />
           <XAxis type="category" dataKey="city" name="city"/>
           <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
           <Tooltip cursor={{ strokeDasharray: '3 3' }} />
           <Scatter data={this.getData()} fill="#ffffff" />
          </ScatterChart>
          </ResponsiveContainer>
          </Row>



          <Row>
            <EventList events={this.state.events}/>
          </Row>
          
        </Container>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }}/>
      </div>
    );
  }
}

export default App;