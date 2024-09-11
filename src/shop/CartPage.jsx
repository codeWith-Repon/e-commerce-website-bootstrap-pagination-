import React, { useEffect } from "react";

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

  return <div>
    
  </div>;
};

export default CartPage;
