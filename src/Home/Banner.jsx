import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/selectedCategory";

const title = (
  <h2>
    Search Your One Form <span>Thousand</span> of Products
  </h2>
);
const desc = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searcInput, setSearcInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  //search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearcInput(searchTerm);

    //filter product on base onh search
    const filtered = productData.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searcInput}
              onChange={handleSearch}
            />
            <button type="submit">
             <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searcInput &&
              filteredProducts.map((product, index) => 
                <li key={index}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
