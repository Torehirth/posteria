import { API_BASE_URL, API_SOCIAL_ENDPOINT, API_POSTS_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";

export const createPostHandler = () => {
  const createPostForm = document.querySelector("#create-post-form");

  if (createPostForm) {
    createPostForm.addEventListener("submit", handlePostFormEvent);
  }
};

// ----------------------------------------------

export const handlePostFormEvent = (e) => {
  e.preventDefault();
  const createPostForm = e.target;
  const formData = new FormData(createPostForm);
  const postData = Object.fromEntries(formData);

  if (!postData.media || !postData.media.url) {
    delete postData.media;
  }

  createPost(postData);
};

// ----------------------------------------------

export const createPost = async (post) => {
  const createPostURL = `${API_BASE_URL}${API_SOCIAL_ENDPOINT}${API_POSTS_ENDPOINT}`;
  const form = document.querySelector("#create-post-form");
  const messageContainer = document.querySelector("#info-message");

  try {
    // Disable fieldset/form when calling the API
    isFieldsetDisabled(true, 0.7, "Publishing..");
    // Create API request header
    const options = createAPIRequestHeader("POST", post);
    // Fetch API
    const response = await fetch(createPostURL, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Publishing the post failed. Please try again later..");
    }
    form.reset();
  } catch (err) {
    console.error(err.message);
    displayMessage(messageContainer, "error", err.message);
  } finally {
    // Enable fieldset/form after calling the API
    isFieldsetDisabled(false, 1, "Publish");
  }
};

// -------------------------------------------

export const fetchPosts = async () => {
  const createPostURL = `${API_BASE_URL}${API_SOCIAL_ENDPOINT}${API_POSTS_ENDPOINT}`;
  const form = document.querySelector("#create-post-form");
  const messageContainer = document.querySelector("#info-message");

  try {
    // Disable fieldset/form when calling the API
    isFieldsetDisabled(true, 0.7, "Publishing..");
    // Create API request header
    const options = createAPIRequestHeader("GET");
    // Fetch API
    const response = await fetch(createPostURL, options);
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Failed to get posts. Please try again later..");
    }
    form.reset();
  } catch (err) {
    console.error(err.message);
    displayMessage(messageContainer, "error", err.message);
  } finally {
    // Enable fieldset/form after calling the API
    isFieldsetDisabled(false, 1, "Publish");
  }
};
