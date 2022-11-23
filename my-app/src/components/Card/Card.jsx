import ProductImage from "./ProductImage/ProductImage";
import "./card.css";

export default function Card({
  productName,
  price,
  thumbnailImg,
  discountRate,
}) {
  return (
    <li>
      <div className="product-img">
        <ProductImage {...{ thumbnailImg, productName }} />
      </div>
      <strong>이름</strong>
      <button></button>
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
