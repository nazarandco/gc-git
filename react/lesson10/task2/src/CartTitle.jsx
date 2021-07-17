import React from 'react';

const CartTitle = ({ userName, count }) => (
  <div class='cart-title'>{`${userName}, you added ${count} products`}</div>
);

export default CartTitle;