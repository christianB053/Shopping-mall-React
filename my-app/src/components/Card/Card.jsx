import { useRef } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductName from "./ProductName/ProductName";
import "./card.css";

export default function Card({
  productName,
  price,
  thumbnailImg,
  discountRate,
}) {
  const likeBtn = useRef();
  function handleLikeBtn(e) {
    e.currentTarget.classList.toggle("on");
  }
  return (
    <li>
      <div className="product-img">
        <ProductImage {...{ thumbnailImg, productName }} />
      </div>
      <ProductName {...{ productName }} />
      <button
        ref={likeBtn}
        onClick={handleLikeBtn}
        className="like-btn"
      ></button>
      <div>
        <strong>할인가격</strong>
        <p>
          원래가격<span>원</span>
        </p>
        <p>
          할인율<span>원</span>
        </p>
      </div>
    </li>
  );
}
