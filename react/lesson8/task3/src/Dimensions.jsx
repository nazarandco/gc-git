import React from 'react';

class Dimension extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    document.title = `${innerWidth} x ${innerHeight}`;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height}`;
  };

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  render() {
    return (
      <div class='dimensions'>
        {`${this.state.width}px - ${this.state.height}px`}
      </div>
    );
  }
}

export default Dimension;
