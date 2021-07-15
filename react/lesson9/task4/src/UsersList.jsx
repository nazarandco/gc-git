import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    filterBy: null,
    count: this.props.users.length,
  };

  handleFilter = (e) => {
    const { value } = e.target;

    this.setState({
      filterBy: value,
    });
  };

  render() {
    let usersList;
    if (this.state.filterBy) {
      usersList = this.props.users
        .slice()
        .filter((el) =>
          el.name.toUpperCase().includes(this.state.filterBy.toUpperCase())
        );
    } else {
      usersList = this.props.users;
    }

    return (
      <div>
        <Filter
          filterText={this.state.filterBy}
          count={usersList.length}
          onChange={this.handleFilter}
        />
        <ul className='users'>
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
