import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatDate = (date) => moment(date).format('LTS');

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: this.props.location,
      offset: formatDate(getTimeWithOffset(this.props.offset)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // console.log('ok');
      this.setState({
        offset: formatDate(getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <div className='clock'>
          <div className='clock__location'>{this.state.location}</div>
          <div className='clock__time'>{this.state.offset}</div>
        </div>
    );
  }
}

export default Clock;
