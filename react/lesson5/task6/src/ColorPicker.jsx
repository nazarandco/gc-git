import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
  }

  render() {
    return (
      <div>
        <div class='picker__title'>{this.state.color}</div>
        <div>
          <button
            class='picker__button picker__button_coral'
            onMouseOver={() =>
              this.setState({
                color: 'Coral',
              })
            }
            onMouseOut={() =>
              this.setState({
                color: '',
              })
            }
          ></button>
          <button
            class='picker__button picker__button_aqua'
            onMouseOver={() =>
              this.setState({
                color: 'Aqua',
              })
            }
            onMouseOut={() =>
              this.setState({
                color: '',
              })
            }
          ></button>
          <button
            class='picker__button picker__button_bisque'
            onMouseOver={() =>
              this.setState({
                color: 'Bisque',
              })
            }
            onMouseOut={() =>
              this.setState({
                color: '',
              })
            }
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
