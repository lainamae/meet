import React, {Component} from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.props.errorText} />
        <input
        type="text"
        name="number"
        className="number-events-input"
        value={this.props.numberOfEvents}
        onChange={this.props.updateEventCount}
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