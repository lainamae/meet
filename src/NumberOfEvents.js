import React, {Component} from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
        <input
        type="text"
        className="number-events-input"
        value={this.props.numberOfEvents}
        onChange={(e) => this.props.updateEventCount(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;


// state = {
//   numberOfEvents: 32
// }
// updateEventCount = (event) => {
//   const value = event.target.value;
//   this.setState({
//     numberOfEvents: value,
//   });
// };