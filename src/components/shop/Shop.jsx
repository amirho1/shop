import React from "react";
import Card from "./card/Card";
import Fetch from "../fetch/Fetch";
import "./Shop.css";

export default function Shop({ category = "" }) {
  return (
    <Fetch
      url={
        category
          ? `https://fakestoreapi.com/products/category/${category}`
          : `https://fakestoreapi.com/products/`
      }
      renderSuccess={ShopContainer}
    />
  );
}

function ShopContainer({ data }) {
  return (
    <div className="shop-container">
      {data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}
