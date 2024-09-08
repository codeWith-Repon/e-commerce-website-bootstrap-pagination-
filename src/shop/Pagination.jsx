import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (activePage > 1) {
              paginate(activePage - 1);
              scrollToTop();
            }
          }}
          disabled={activePage === 1}
          className={activePage === 1 ? "disabled" : ""}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>

      {/* page number button  */}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? "bg-warning" : ""}`}
        >
          <button
            onClick={() => {
              paginate(number);
              scrollToTop();
            }}
            className="bg-transparent"
          >
            {number}
          </button>
        </li>
      ))}

      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (activePage < pageNumbers.length) {
              paginate(activePage + 1);
              scrollToTop();
            }
          }}
          disabled={activePage === pageNumbers.length}
          className={activePage === pageNumbers.length ? "disabled" : ""}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
