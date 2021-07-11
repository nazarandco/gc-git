import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './index.scss';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
      isOffline: false,
    };

    this.onStatusOn = this.onStatusOn.bind(this);
    this.onStatusOff = this.onStatusOff.bind(this);
  }

  onStatusOn() {
    this.setState({
      isOnline: true,
    });
  }

  onStatusOff() {
    this.setState({
      isOnline: false,
    });
  }

  render() {
    if (this.state.isOnline === true) {
      return <Online onStatusOff={this.onStatusOff} />;
    } else if (this.state.isOffline === false) {
      return <Offline onStatusOn={this.onStatusOn} />;
    }
  }
}

export default Status;
