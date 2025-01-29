import { API_BASE_URL, API_SOCIAL_ENDPOINT, API_POSTS_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

export const getPosts = async () => {
  const createPostURL = `${API_BASE_URL}${API_SOCIAL_ENDPOINT}${API_POSTS_ENDPOINT}`;
  const form = document.querySelector("#create-post-form");
  const messageContainer = document.querySelector("#info-message");

  try {
    // Create API request header
    const options = createAPIRequestHeader("GET");
    // Fetch API
    const response = await fetch(createPostURL, options);
    const posts = await response.json();

    if (!response.ok) {
      throw new Error(posts.errors?.[0]?.message || "Failed to get posts. Please try again later..");
    }
    form.reset();
    return posts;
  } catch (err) {
    console.error(err.message);
    displayMessage(messageContainer, "error", err.message);
  }
};
