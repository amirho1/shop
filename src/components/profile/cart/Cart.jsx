import React from "react";
import "./Cart.css";
import { useUserContext } from "../../contexts/UsersContext";
import ItemInCart from "./itemInCart/ItemInCart";

export default function Cart() {
  const { users, whoIsLogin, deleteCartItem, buyCartItems } = useUserContext();
  const cart = users.filter((user) => user.name === whoIsLogin)[0].cart;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>cart</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Product id</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <ItemInCart
              item={item}
              index={index}
              key={index}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <button onClick={() => buyCartItems()}>Buy</button>
        <p className="total-price bold-700">
          Total:{" "}
          {cart.length
            ? cart.reduce((item1, item2) => item1 + item2.price, 0)
            : 0}
        </p>
      </div>
    </div>
  );
}
