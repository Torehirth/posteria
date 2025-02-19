import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

export const fetchPost = async (Url, requestType) => {
  const loader = document.querySelector("#loader");

  try {
    const options = createAPIRequestHeader(requestType);
    const response = await fetch(Url, options);
    const post = await response.json();

    if (!response.ok) {
      throw new Error(post.errors?.[0]?.message || "Failed to get posts. Please try again later..");
    }
    return post;
  } catch (err) {
    console.error(err.message);
    displayMessage("#info-message", "error", err.message);
    if (loader) {
      loader.classList.add("hidden");
    }
  }
};
