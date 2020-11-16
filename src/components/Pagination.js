import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
const Pagination = ({ start, totalPage, limit, onhandle }) => {
  const pages = Math.ceil(totalPage / limit);
  const paginator = [];
  const [currentPage, setCurrentPage] = useState(start <= pages ? start : 1);
  let ellipsisLeft = false;
  let ellipsisRight = false;
  onhandle(currentPage);
  for (let i = 1; i < pages; i++) {
    if (i === currentPage) {
      paginator.push({ id: i, current: true, ellipsis: false });
    } else {
      if (
        i < 2 ||
        i > pages - 1 ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        paginator.push({ id: i, current: false, ellipsis: false });
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        paginator.push({ id: i, current: false, ellipsis: true });
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        paginator.push({ id: i, current: false, ellipsis: true });
        ellipsisRight = true;
      }
    }
  }
  const prevPage = () => {
    setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
  };
  const nextPage = () => {
    setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
  };
  const changePage = (page, e) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const Pagination = styled.ul`
    display: flex;
    list-style: none;
    li {
      font-size: 16px;
      margin-left: 20px;
      cursor: pointer;
    }
    .active {
      text-align: center;
      width: 20px;
      height: 20px;
      background-color: #dcdcdc;
      border-radius: 50%;
    }
  `;
  return (
    <Pagination>
      <li onClick={prevPage}>
        <i className="fas fa-caret-left"></i>
      </li>
      {paginator.map((page) => {
        if (!page.ellipsis) {
          return (
            <li
              key={`duyen+${page.id}`}
              className={page.current ? "active" : ""}
              onClick={(e) => changePage(page.id, e)}
            >
              {page.id}
            </li>
          );
        } else {
          return (
            <li key={page.id}>
              <span>&hellip;</span>
            </li>
          );
        }
      })}
      <li onClick={nextPage}>
        <i className="fas fa-caret-right"></i>
      </li>
    </Pagination>
  );
};
export default Pagination;
