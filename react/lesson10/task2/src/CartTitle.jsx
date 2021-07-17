import React from 'react';

const CartTitle = ({ userData, count }) => (
  <div class='cart-title'>{`${userData.firstName}, you added ${count} items`}</div>
);

export default CartTitle;