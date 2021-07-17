import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale='c' />
        <TemperatureInput scale='f' />
      </div>
    );
  }
}

export default Calculator;