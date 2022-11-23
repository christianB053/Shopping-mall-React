import React from "react";

export default function ProductPrice({ price, discountRate }) {
  const discountPrice = price - (price * discountRate) / 100;
  return (
    <>
      <strong>{discountPrice}</strong>
      <p>
        {price}
        <span>원</span>
      </p>
      <p>
        {discountRate}
        <span>%</span>
      </p>
    </>
  );
}
