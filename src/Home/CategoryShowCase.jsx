import React, { useState } from "react";
import { ProductData } from "./CategoryShowCaseData";
import shape from "../assets/images/shape-img/icon/01.png";
import shape2 from "../assets/images/shape-img/icon/02.png";
import Ratting from "../components/Ratting";
import { Link } from "react-router-dom";

const title = "Our Products";

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);


  const filterItem = (categoryItem)=>{
    const updateItems = ProductData.filter((curElem)=>{
      return curElem.cate === categoryItem
    })

    setItems(updateItems)

  }

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src={shape} alt="" />
      </div>
      <div className="course-shape two">
        <img src={shape2} alt="" />
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt="" />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-reiew">
                          <Ratting />
                        </div>
                      </div>
                    </div>

                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
