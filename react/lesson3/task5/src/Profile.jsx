import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment(date).format('DD MMM YYYY');

const Profile = (props) => (
  <div>
    <div className='profile__name'>
      {`${props.userData.firstName} ${props.userData.lastName}`}
    </div>

    <div className='profile__birth'>
      {`Was born ${formatDate(props.userData.birthDate)} in ${
        props.userData.birthPlace
      }`}
    </div>
  </div>
);

export default Profile;
