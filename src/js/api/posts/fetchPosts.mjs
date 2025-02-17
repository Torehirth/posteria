import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

/**
 * Fetches posts from the given URL.
 *
 * @param {string} URL - The URL to fetch posts from.
 * @returns {Promise<Object[]>} A promise that resolves to an array of post objects.
 * @throws {Error} Throws an error if the fetch operation fails.
 *
 * @example
 * const URL = 'https://api.example.com/posts';
 * fetchPosts(URL)
 *   .then(posts => {
 *     console.log(posts);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching posts:', error);
 *   });
 */
export const fetchPosts = async (URL) => {
  const messageContainer = document.querySelector("#info-message");
  const loader = document.querySelector("#loader");

  try {
    // Create API request header
    const options = createAPIRequestHeader("GET");
    // Fetch API
    const response = await fetch(URL, options);
    const posts = await response.json();

    if (!response.ok) {
      throw new Error(posts.errors?.[0]?.message || "Failed to get posts. Please try again later..");
    }
    return posts;
  } catch (err) {
    console.error(err.message);
    displayMessage(messageContainer, "error", err.message);
    if (loader) {
      loader.classList.add("hidden");
    }
  }
};

