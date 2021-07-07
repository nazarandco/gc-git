import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
  }

  colorChange(clr) {
    this.setState({
      color: clr,
    });
  }

  render() {
    return (
      <div>
        <div class='picker__title'>{this.state.color}</div>
        <div>
          <button
            class='picker__button picker__button_coral'
            onMouseOver={() => this.colorChange('Coral')}
            onMouseOut={() => this.colorChange('')}
          ></button>
          <button
            class='picker__button picker__button_aqua'
            onMouseOver={() => this.colorChange('Aqua')}
            onMouseOut={() => this.colorChange('')}
          ></button>
          <button
            class='picker__button picker__button_bisque'
            onMouseOver={() => this.colorChange('Bisque')}
            onMouseOut={() => this.colorChange('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
