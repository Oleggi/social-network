import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalCount, pageSize, onPageChange = null, currentPage, setCurrentPage}) => {
    onPageChange = (p) => {
        setCurrentPage(p);
      };
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.pages_wrapper}>
      {pages.map((p, i) => {
        return (
          <div
            key={i}
            className={p === currentPage ? s.active_page : ""}
            onClick={() => onPageChange(p)}
          >
            {p}
          </div>
        );
      })}
    </div>
  );
};

export default Paginator;
