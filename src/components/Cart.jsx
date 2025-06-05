import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>
        Cart Total: {cart.length} item{cart.length !== 1 ? "s" : ""}
      </p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} ({item.price})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
