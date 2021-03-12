import React, { useState } from "react";
import "./Card.css";
import { GrClose } from "react-icons/gr";
import { useUserContext } from "../../contexts/UsersContext";

export default function Card({ product }) {
  const { addToCart } = useUserContext();

  const [backfaceStyle, setBackfaceStyle] = useState({
    display: "none",
    state: 0,
  });

  const makeVisibleOrHiddenBackface = () => {
    if (!backfaceStyle.state)
      return setBackfaceStyle({ display: "block", state: 1 });
    setBackfaceStyle({ display: "none", state: 0 });
  };

  return (
    <div className="card-container">
      <div className="details" style={{ display: backfaceStyle.display }}>
        <GrClose
          className="close-back-face"
          onClick={makeVisibleOrHiddenBackface}
        />

        <div className="price-title">
          <h3 className="title">{product.title}</h3>
          <h4 className="card-price text-purpel">{product.price}$</h4>
        </div>

        <p className="category">
          <b style={{ color: "#aa21ff" }}>category:</b> {product.category}
        </p>
        <p className="description" id="description">
          <b className="text-purpel">Description:</b> {product.description}
        </p>
      </div>

      <div className="fade-all-container"></div>

      <div className="card-top-section">
        <button
          className="view-detail card-button"
          onClick={makeVisibleOrHiddenBackface}
        >
          VIEW DETAIL
        </button>

        <button
          className="card-add card-button"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>
        <img src={product.image} alt={product.title} className="card-image" />
      </div>

      <div className="card-bottom-section">
        <div className="price-title">
          <h3 className="title">{product.title}</h3>
          <h4 className="card-price text-purpel">{product.price}$</h4>
        </div>
      </div>
    </div>
  );
}
