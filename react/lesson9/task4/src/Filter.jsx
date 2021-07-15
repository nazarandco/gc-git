import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className='filter' onChange={this.props.onChange}>
        <span className='filter__count'>{this.props.count}</span>
        <input
          type='text'
          className='filter__input'
          value={this.props.filterText}
        />
      </div>
    );
  }
}

export default Filter;
