import React from "react";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", marginBottom: "10px" }}>
              <img src={item.image} alt={item.name} width="80" />
              <div style={{ marginLeft: "10px" }}>
                <h4>{item.name}</h4>
                <p>Price: Rs {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: Rs {item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <h3>Total: Rs {totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
