

import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#4997b6';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#d621d7';
  }
}

export { InfoAlert };
export { ErrorAlert };
