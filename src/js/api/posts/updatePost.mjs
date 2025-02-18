import { API_POSTS_URL } from "../../constants/api.mjs";
import { getQueryParameter } from "../../events/common/utils/getQueryParameter.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../utils/createAPIRequestHeader.mjs";
import { fetchPost } from "./fetchPost.mjs";

export const updatePostListener = () => {
  document.addEventListener("submit", async (e) => {
    console.log("update submit listener");
    await updatePost(e);
  });
};

const updatePost = async (e) => {
  e.preventDefault();
  const id = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${id}`;

  const updatePostForm = e.target.closest("#edit-post-form");
  const formData = new FormData(updatePostForm);
  const postData = Object.fromEntries(formData);

  if (postData.media) {
    postData.media = {
      url: postData.media,
      alt: `Could be an image of ${postData.title} and/or ${postData.body}`,
    };
  } else {
    // If image URL isn't entered into form, delete media to not get 400 response from API
    delete postData.media;
  }
  console.log(postData);

  if (!id) {
    console.error("ID not found as query parameter");
    return;
  }

  try {
    // Disable fieldset when calling the API and updating button text
    isFieldsetDisabled(true, 0.7, "Publishing..");

    const options = createAPIRequestHeader("PUT", postData);
    const response = await fetch(Url, options);
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Publishing the post failed. Please try again later..");
    }
    if (response.ok) {
      setTimeout(() => {
        location.reload();
      }, 2000);
    }

    console.log("updatePost is called! Post successfully updated");
    displayMessage("#info-message", "success", "Post edited successfully!");
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", err.message || "Could not edit post");
  }
};

const displayUpdateModal = (e) => {
  const editModal = document.querySelector("#edit-modal-container");
  const editButton = e.target.closest("#edit-button");

  if (editButton && editModal.classList.contains("hidden")) {
    editModal.classList.remove("hidden");
    addPostDataToForm();
  } else if (
    !e.target.closest("#edit-post-form") &&
    e.target.closest("#edit-modal-container") &&
    !editModal.classList.contains("hidden")
  ) {
    editModal.classList.add("hidden");
  }
};

const addPostDataToForm = async () => {
  const postTitleInput = document.querySelector("#post-title");
  const postBodyTextarea = document.querySelector("#post-body");
  const postImageURLInput = document.querySelector("#post-image");

  const idQueryParameter = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${idQueryParameter}`;
  const data = await fetchPost(Url, "GET");
  const post = data?.data || {};
  console.log(post);

  postTitleInput.value = post?.title;
  postBodyTextarea.value = post?.body;
  if (postImageURLInput.value) {
    // If no image URL provided the value in the input would be undefined
    postImageURLInput.value = post?.media?.url;
  }
};

export const displayUpdateModalListener = () => {
  document.addEventListener("click", displayUpdateModal);
};

displayUpdateModalListener();
