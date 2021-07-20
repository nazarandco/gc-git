import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const users = this.props.users;

    const usersPerPage = 3;

    // i: usersPerPage, currentPage
    // o: users[]

    const startIndex = (this.state.currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={usersToDisplay.length}
          itemsPerPage={usersPerPage}
          goNext={this.goNext}
          goPrev={this.goPrev}
        />
        <ul className='users'>
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
