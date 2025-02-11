import { getTimeAgo } from "../../../events/posts/getTimeAgo.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { createPostElements } from "../../../ui/posts/createPostElements.mjs";
import { fetchPosts } from "../fetchPosts.mjs";

const messageContainer = document.querySelector("#feed-info-message");
const loader = document.querySelector("#loader");
let currentPage = 1;
const limit = 10;
const usersParam = "_author=true";
const sortParam = "created";
let sortOrder = "desc";

// Fetch and display posts
export const getPostsHandler = async () => {
  try {
    const data = await fetchPosts(
      `${usersParam}&limit=${limit}&page=${currentPage}&sort=${sortParam}&sortOrder=${sortOrder}`
    );
    const posts = data?.data || [];
    if (posts.length === 0) {
      observer.disconnect();
      loader.style.display = "none";
      displayMessage(messageContainer, "info", "No more posts to load.");
      return;
    }
    renderPosts(posts);
    sortPostsByDate();
    currentPage++;
  } catch (err) {
    console.error(err);
    displayMessage(messageContainer, "error", "Failed to load posts. Try again later.");
    loader.style.display = "none";
  }
};

// Render posts to the container
export const renderPosts = (posts) => {
  posts.forEach((post) => {
    const profileImage = post?.author?.avatar?.url || "";
    const profileName = post?.author?.name || "";
    const postTitle = post?.title || "New Post";
    const postBody = post?.body || "";
    const postImage = post?.media?.url || "";
    const postAltText = postImage ? post?.media?.alt || postTitle : "";
    const timeAgo = getTimeAgo(post?.created || "");

    createPostElements(profileImage, profileName, postImage, postAltText, postTitle, postBody, timeAgo);
  });
};

// IntersectionObserver for infinite scroll
export const setupInfiniteScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load more posts when loader is in view (also loads posts initially..).
          getPostsHandler();
        }
      });
    },
    { rootMargin: "75px" } // Trigger loading 100px before reaching the loader
  );

  observer.observe(loader); // Observe the loader element (loader must be in DOM).
};

const sortPostsByDate = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#descending")) {
      document.querySelector("#descending-icon").classList.remove("opacity-0");
      document.querySelector("#ascending-icon").classList.add("opacity-0");
      document.querySelector("#feed-posts").innerHTML = "";
      sortOrder = "desc";
    } else if (e.target.closest("#ascending")) {
      document.querySelector("#ascending-icon").classList.remove("opacity-0");
      document.querySelector("#descending-icon").classList.add("opacity-0");
      document.querySelector("#feed-posts").innerHTML = "";
      sortOrder = "asc";
    }
    // setting currentPage = 1 to prevent sorting function to increment page number.
    currentPage = 1;
  });
};
