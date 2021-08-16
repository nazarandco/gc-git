import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from './User';
import Pagination from './Pagination';
import * as usersListActions from './usersList.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

class UsersList extends React.Component {
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
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.string.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state) + 1,
  };
};

const mapDispatch = {
  goNext: usersListActions.goNext,
  goPrev: usersListActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
