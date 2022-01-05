// src/Event.js

import React, { Component } from "react";

import { Navbar } from 'react-bootstrap';
import logo from './img/logo192.png';

class Nav extends Component {

  render() {
    return <Navbar>
    <Navbar.Brand href="/meet">
      <img
        src={logo}
        width="48"
        height="48"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>

  }
}
export default Nav;