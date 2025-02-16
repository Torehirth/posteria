import { API_POSTS_URL } from "../../constants/api.mjs";
import { getQueryParameter } from "../../events/common/utils/getQueryParameter.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

export const fetchPost = async (requestType) => {
  const messageContainer = document.querySelector("#info-message");
  const loader = document.querySelector("#loader");
  const id = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${id}?_author=true`;

  if (!id) {
    throw new Error("Could not find the ID of the post");
  }

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
    displayMessage(messageContainer, "error", err.message);
    if (loader) {
      loader.classList.add("hidden");
    }
  }
};
