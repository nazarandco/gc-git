import React from 'react';

const CartTitle = ({ userName, count }) => (
  <div class='cart-title'>{`${userName.firstName}, you added ${count} items`}</div>
);

export default CartTitle;