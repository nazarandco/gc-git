import React from 'react';

class ColorPicker extends React.Component {
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

  colorChangeDef() {
    this.setState({
      color: '',
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
            onMouseOut={() => this.colorChangeDef()}
          ></button>
          <button
            class='picker__button picker__button_aqua'
            onMouseOver={() => this.colorChange('Aqua')}
            onMouseOut={() => this.colorChangeDef()}
          ></button>
          <button
            class='picker__button picker__button_bisque'
            onMouseOver={() => this.colorChange('Bisque')}
            onMouseOut={() => this.colorChangeDef()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
