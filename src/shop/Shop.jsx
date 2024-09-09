import React, { useState } from "react";
import Pagebanner from "../components/Pagebanner";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showResults = "Showing 01 - 12 of 130 Results";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

//   pagination
const [currentPage, setCurrentPage] = useState(1)
const productsPerPage = 12;

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)


//function to change the current page 

const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber)
}


//filter products based on category
const [selectedCategory, setSelectedCategory] = useState('All')
const menuItems = [...new Set(Data.map(value=>value.category))]

const filterItem = (currentCategory) => {
    const newItem = Data.filter(newValue => {
        return newValue.category === currentCategory
    })
    setSelectedCategory(currentCategory)
    setProducts(newItem)
}

  return (
    <div>
      <Pagebanner title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title  */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>

                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductCard gridList={gridList} products={currentProducts} />
                </div>
                <Pagination 
                productsPerPage={productsPerPage}
                totalProducts = {products.length}
                paginate={paginate}
                activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
                <aside>
                    <Search products={products} gridList={gridList} />
                    <ShopCategory
                    filterItem={filterItem}
                    setItem={setProducts}
                    menuItems={menuItems}
                    setProducts={setProducts}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    />
                    <PopularPost/>
                    <Tags/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
