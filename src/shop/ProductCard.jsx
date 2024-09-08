import React from "react";
import { Link } from "react-router-dom";
import Ratting from "../components/Ratting";

const ProductCard = ({ gridList, products }) => {
    console.log(products)
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? "grid" : "list"
      }`}
    >
      {products.map((product, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-12">
          <div className={`${gridList ? "product-item" : "product-list-item"}`}>
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>

              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            <div className="prodct-content">
                <h5>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p className="productRating">
                    <Ratting/>
                </p>
                <h6 >${product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
