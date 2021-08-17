import { connect } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import Filter from './Filter';
import User from './User';
import { updateFilter } from './users.actions';
import {
  filterTextSelector,
  filteredUsersListSelector,
  usersListSelector,
} from './users.selectors';

const UsersList = ({ users, filterText, updateFilterText }) => {
  const [input, setInput] = useState(filterText);
  const onChange = (e) => {
    setInput(e.target.value);
    updateFilterText(e.target.value);
  };

  return (
    <div>
      <Filter onChange={onChange} filterText={input} count={users.length} />
      <ul className='users'>
        {users.map((user) => (
          <User name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    filterText: filterTextSelector(state),
    users: filteredUsersListSelector(state),
  };
};

const mapDispatch = {
  updateFilterText: updateFilter,
};

export default connect(mapState, mapDispatch)(UsersList);
