import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  onOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  render() {
    return this.state.status === 'online' ? (
      <div className='status'>{this.state.status}</div>
    ) : (
      <div className='status status_offline'>{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
