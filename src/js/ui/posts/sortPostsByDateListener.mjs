import { setCurrentPage, setSortOrder } from "../../api/posts/handlers/getPostsHandler.mjs";
import { sortPostsByDate } from "./sortPostsByDate.mjs";

export const sortPostsByDateListener = () => {
  const sortDropDownWrapper = document.querySelector("#sort-menu");

  sortDropDownWrapper.addEventListener("click", (e) => {
    if (e.target.closest("#descending")) {
      e.preventDefault();
      document.querySelector("#descending-icon").classList.remove("opacity-0");
      document.querySelector("#ascending-icon").classList.add("opacity-0");
      initSortPostsByDate("desc");
    } else if (e.target.closest("#ascending")) {
      document.querySelector("#ascending-icon").classList.remove("opacity-0");
      document.querySelector("#descending-icon").classList.add("opacity-0");
      initSortPostsByDate("asc");
    }
  });
};

const initSortPostsByDate = (sortingOrder) => {
  const loader = document.querySelector("#loader");
  if (loader) {
    loader.classList.remove("hidden");
  }
  document.querySelector("#feed-posts").innerHTML = "";
  setCurrentPage(1);
  setSortOrder(sortingOrder);
  sortPostsByDate(sortingOrder);
};
