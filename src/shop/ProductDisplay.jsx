import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc =
  "Energistin an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity,img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrise = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrise = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon
    }
    // console.log(product)
    
  }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star" style={{ color: "darkkhaki" }}></i>
          <i className="icofont-star" style={{ color: "darkkhaki" }}></i>
          <i className="icofont-star" style={{ color: "darkkhaki" }}></i>
          <i className="icofont-star" style={{ color: "darkkhaki" }}></i>
          <i className="icofont-star" style={{ color: "darkkhaki" }}></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      <div>
        <form  onSubmit={handleSubmit}>
          <div className="d-flex my-3 ">
          <div className="select-product size me-3">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Blck</option>
            </select>
          </div>
          </div>
        
        <div className="d-flex align-items-center gap-2">
          <div className="cart-plus-minus mx-0">
            <div className="dec qtybutton" onClick={handleDecrise}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrise}>
              +
            </div>
          </div>
          <div className="discount-code">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
        </div>
        <div className="gap-4 d-flex mt-4">
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
