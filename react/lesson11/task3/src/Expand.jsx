import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  showExpand = () => {
    this.setState({
      isOpen: true,
    });
  };

  hideExpand = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{this.props.title}</span>
          <button
            className={
              this.state.isOpen
                ? 'expand__toggle-btn expand__toggle-btn-off'
                : 'expand__toggle-btn'
            }
            onClick={this.state.isOpen ? this.hideExpand : this.showExpand}
          >
            <i className='fas fa-chevron-down'></i>
          </button>
        </div>
        <div className='expand__content'>
          {this.state.isOpen ? this.props.children : null}
        </div>
      </div>
    );
  }
}

export default Expand;
