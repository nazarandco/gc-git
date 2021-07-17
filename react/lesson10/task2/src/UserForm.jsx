import React from 'react';

const UserForm = ({ userData, handleChange }) => (
  <form class='user-form'>
    <input
      type='text'
      name='firstName'
      class='user-form__input'
      value={userData.firstName}
      onChange={handleChange}
    />
    <input
      type='text'
      name='lastName'
      class='user-form__input'
      value={userData.lastName}
      onChange={handleChange}
    />
  </form>
);

export default UserForm;
