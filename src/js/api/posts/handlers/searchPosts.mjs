import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { fetchPosts } from "../fetchPosts.mjs";
import { renderPosts } from "./getPostsHandler.mjs";

const searchInputDesktop = document.querySelector("#aside-feed-search");
const searchInputMobile = document.querySelector("#feed-search");
const postsContainer = document.querySelector("#feed-posts");
const loader = document.querySelector("#loader");

export const searchInputEventListener = () => {
  document.addEventListener("input", (e) => {
    e.preventDefault();

    if (e.target === searchInputDesktop || e.target === searchInputMobile) {
      searchHandler(e);
    }
  });
};

export const searchHandler = async (e) => {
  const usersParam = "_author=true";
  try {
    const regex = /[^a-zA-Z0-9s]+/g; // Removes all spaces and special characters
    const inputValue = e?.target?.value.toLowerCase().replace(regex, "") || "";
    const data = await fetchPosts(usersParam);
    const posts = data?.data || [];

    if (inputValue.length) {
      postsContainer.innerHTML = "";
      loader.classList.add("hidden"); // Hides the loader to prevent observer to continue observing the loader = getPostHandler function wouldn't be called initially or by scroll.
    }

    const filteredPosts = posts.filter((post) => {
      return (
        // search for title, body, tags, name
        post?.body?.toLowerCase().trim().includes(inputValue) ||
        post?.title?.toLowerCase().trim().includes(inputValue) ||
        // Uses some() to loop through tags array and return posts if one element is true.
        post?.tags?.some((tag) => {
          return tag?.toLowerCase().trim().includes(inputValue);
        }) ||
        post?.author?.name?.toLowerCase().trim().includes(inputValue)
      );
    });
    console.log(filteredPosts);
    if (!filteredPosts) {
      displayMessage("#info-message", "warning", "No posts matches search criteria..");
    }
    if (filteredPosts.length) {
      postsContainer.innerHTML = "";
      renderPosts(filteredPosts);
    }
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", "Something went wrong searching the posts");
  }
};
