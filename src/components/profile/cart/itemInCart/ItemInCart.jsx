import React from "react";
import { MdDelete } from "react-icons/md";
import "./ItemInCart.css";

export default function ItemInCart({ index, item, deleteCartItem }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td>{item.id}</td>
      <td>
        <MdDelete
          onClick={() => deleteCartItem(index)}
          className="delete-cart-item"
        />
      </td>
    </tr>
  );
}
