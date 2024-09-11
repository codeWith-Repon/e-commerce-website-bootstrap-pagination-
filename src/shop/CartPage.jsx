import React, { useEffect, useState } from "react";
import Pagebanner from "../components/Pagebanner";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    //fetch cart item from local storage
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItem);
  }, []);

  //calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //handle quantity incrise
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update locl storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //handl quenty decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      //update locl storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );

    //update new cart
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart total
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <Pagebanner title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top  */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-product">Product</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    className="cart-page-input-text"
                    name="coupon"
                    id="coupon"
                    placeholder="coupon code ...."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>CheckoutPage</div>
                </form>
              </div>


              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="ouline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="us">United States (USA)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakistan</option>
                          <option value="np">Nepal</option>
                        </select>
                       
                      </div>

                      <div className="oultline-select shipping-select">
                        <div className="ouline-select">
                          <select>
                            <option value="uk">United Kingdom (UK)</option>
                            <option value="us">United States (USA)</option>
                            <option value="bd">Bangladesh</option>
                            <option value="pak">Pakistan</option>
                            <option value="np">Nepal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
