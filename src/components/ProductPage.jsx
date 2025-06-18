import React from "react";
import './ProductPage.css';
import img1 from '../assets/img6.jpg';
import img2 from '../assets/img7.jpg';
import img3 from '../assets/img8.webp';

const products = [
  {
    image: img1,
    discount: "30% OFF",
    originalPrice: "$100",
    discountedPrice: "$70",
    fabric: ["Mint green Lehengas to make'em ","go green with envy","In LOVE with the trending mint green"," lehengas?Dive into our collection"," right now to pick your favourite for"," every wedding function!"]
  },
  {
    image: img2,
    discount: "25% OFF",
    originalPrice: "$80",
    discountedPrice: "$60",
    fabric: ["Try a half saree look for your"," lehenga, it is the most popular South"," Indian style."]
  },
  {
    image: img3,
    discount: "40% OFF",
    originalPrice: "$120",
    discountedPrice: "$72",
    fabric: ["Make your lehenga look lighter with"," a light blouse and light duppatta","If will change the look completely."]
  },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="title">TWIRL TAILS</h1>
      <p className="desc">Here are some of the best deals for your big day.</p>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt="product" className="product-image" />
            <div className="discount">{product.discount}</div>
            <div className="prices">
              <span className="original-price">{product.originalPrice}</span>
              <span className="discounted-price">{product.discountedPrice}</span>
            </div>
            <div className="fabric-info">
              {product.fabric.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
