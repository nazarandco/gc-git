import { connect } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import Filter from './Filter';
import User from './User';
import { updateFilter } from './users.actions';
import {
  filterTextSelector,
  filteredUsersListSelector,
} from './users.selectors';

const UsersList = ({ users, filterText, updateFilterText }) => {
  const [input, setInput] = useState(filterText);
  const onChange = (e) => {
    setInput(e.target.value);
    updateFilterText(e.target.value.toUpperCase());
  };

  return (
    <div>
      <Filter
        onChange={onChange}
        filterText={input}
        count={filterText === '' ? '' : users.length}
      />
      <ul className='users'>
        {users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
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
