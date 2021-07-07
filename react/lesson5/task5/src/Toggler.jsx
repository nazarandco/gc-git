import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'Off'
    }
  }

  modeChange() {
    this.setState({
      mode: 'On',
    });
  }

  render() {
    return (
      <div>
        <button 
        onClick={() => this.modeChange()} 
        className='toggler'>
          {this.state.mode}
        </button>
      </div>
    );
  }
}

export default Toggler;
