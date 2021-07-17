import React from 'react';

const CartTitle = ({ userData, count }) => (
  <div class='cart-title'>{`${userData.firstName} ${userData.lastName}, you added ${count} items`}</div>
);

export default CartTitle;