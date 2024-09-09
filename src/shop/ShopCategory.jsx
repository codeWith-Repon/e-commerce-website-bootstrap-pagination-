import React from "react";
import Data from '../products.json'

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Cagegories</h5>
      </div>
      <div>
        <button onClick={() => {setProducts(Data);
          setSelectedCategory("All")
         }}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((value, id) => {
          return (
            <button
              className={`m-2 ${
                selectedCategory === value ? "bg-warning" : ""
              }`}
              key={id}
              onClick={() => filterItem(value)}
            >
              {value}
            </button>
          )
        })}
      </div>
    </>
  );
};

export default ShopCategory;
