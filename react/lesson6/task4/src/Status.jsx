import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './index.scss';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
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
    return (
      <div className='status'>
        {this.state.isOnline === true ? (
          <Online onStatusOff={this.onStatusOff} />
        ) : (
          <Offline onStatusOn={this.onStatusOn} />
        )}
      </div>
    );
  }
}

export default Status;
