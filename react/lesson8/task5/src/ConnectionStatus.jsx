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
    })
  }

  onOffline = () => {
    this.setState({
      status: 'offline',
    })
  }

  render() {
    return this.state.status === 'online' ? (
      <div class='status status_online'>{this.state.status}</div>
    ) : (
      <div class='status status_offline'>{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
