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

  render() {
    return (
      <div>
        <div className='picker__title'>{this.state.color}</div>
        <div>
          <button
            className='picker__button picker__button_coral'
            onMouseOver={() => this.colorChange('Coral')}
            onMouseOut={() => this.colorChange('')}
          ></button>
          <button
            className='picker__button picker__button_aqua'
            onMouseOver={() => this.colorChange('Aqua')}
            onMouseOut={() => this.colorChange('')}
          ></button>
          <button
            className='picker__button picker__button_bisque'
            onMouseOver={() => this.colorChange('Bisque')}
            onMouseOut={() => this.colorChange('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
