import React from 'react';

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div class='products'>
      <ul class='products__list'>
        {cartItems.map(({ id, name, price }) => (
          <li key={id} class='products__list-item'>
            <span class='products__item-name'>{name}</span>
            <span class='products__item-price'>{price}</span>
          </li>
        ))}
      </ul>
      <div class='products__total'>{`Total: $${total}`}</div>
    </div>
  );
};

export default ProductsList;
