import React from "react";
import "./slider.css";
import leftArrow from "../../img/arrow.svg";
import rightArrow from "../../img/forward.svg";

export default function BtnSlider({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
