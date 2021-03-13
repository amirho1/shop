import "./Slider.css";
import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Fetch from "../fetch/Fetch";

export default function Slider() {
  const [pictureNumber, setPictureNumber] = useState(0);
  let arr = [undefined, undefined, undefined, undefined, undefined];
  function Slide({ data }) {
    return (
      <div className="slider-container">
        <h1 className="top-five hover-under-line">Top five goods</h1>

        <div className="slider">
          <BsChevronLeft
            onClick={() => {
              if (pictureNumber === 0) {
                return setPictureNumber(4);
              }
              setPictureNumber(pictureNumber - 1);
            }}
            className="arrow arrow-left"
          />

          <img
            src={data[pictureNumber].image}
            alt={data[pictureNumber].title}
            className="slider-image"
          />

          <h3 className="price">{data[pictureNumber].price}$</h3>

          <BsChevronRight
            onClick={() => {
              if (pictureNumber === 4) {
                return setPictureNumber(0);
              }
              setPictureNumber(pictureNumber + 1);
            }}
            className="arrow arrow-right"
          />

          <div className="point-for-number-of-slide">
            {arr.map((item, index) =>
              index === pictureNumber ? (
                <div key={index} style={{ backgroundColor: "#7c52bf" }}></div>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <Fetch
      url="https://fakestoreapi.com/products?limit=5"
      renderSuccess={Slide}
    />
  );
}
