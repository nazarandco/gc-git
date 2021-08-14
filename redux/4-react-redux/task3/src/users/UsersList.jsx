import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import * as usersListActions from './usersList.actions';

class UserList extends React.Component {
  render() {
    const { usersList, currentPage, goNext, goPrev } = this.props;

    const usersPerPage = 3;

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = usersList.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          totalItems={usersList.length}
          itemsPerPage={usersPerPage}
          goNext={goNext}
          goPrev={goPrev}
        />
        <ul className='usersList'>
          {usersToDisplay.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    usersList: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  goNext: usersListActions.goNext,
  goPrev: usersListActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUserList = connector(UserList);

export default ConnectedUserList;
