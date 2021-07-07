import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'Off',
      counter: 0,
    };
  }

  modeOn() {
    this.setState({
      mode: 'On',
      counter: this.state.counter + 1,
    });
  }

  modeOff() {
    this.setState({
      mode: 'Off',
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.state.counter % 2 === 0 ? this.modeOn() : this.modeOff()
          }
          className='toggler'
        >
          {this.state.mode}
        </button>
      </div>
    );
  }
}

export default Toggler;
