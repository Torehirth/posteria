import { setCurrentPage, setSortOrder } from "../../api/posts/handlers/getPostsHandler.mjs";

export const sortPostsByDate = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#descending")) {
      document.querySelector("#descending-icon").classList.remove("opacity-0");
      document.querySelector("#ascending-icon").classList.add("opacity-0");
      document.querySelector("#feed-posts").innerHTML = "";
      // Using setter function to set sortOrder = "desc"
      setSortOrder("desc");
    } else if (e.target.closest("#ascending")) {
      document.querySelector("#ascending-icon").classList.remove("opacity-0");
      document.querySelector("#descending-icon").classList.add("opacity-0");
      document.querySelector("#feed-posts").innerHTML = "";
      // Using setter function to set sortOrder = "asc"
      setSortOrder("asc");
    }
    // Using setter function to set currentPage = 1 to prevent sorting function to increment page number.
    setCurrentPage(1);
  });
};
