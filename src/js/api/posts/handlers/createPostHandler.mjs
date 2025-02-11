import { personalTag } from "../../../constants/api.mjs";
import { createPost } from "../createPost.mjs";

export const createPostHandler = () => {
  const createPostForm = document.querySelector("#create-post-form");

  if (createPostForm) {
    createPostForm.addEventListener("submit", handlePostFormEvent);
  }
};

const handlePostFormEvent = (e) => {
  e.preventDefault();
  const createPostForm = e.target;
  const formData = new FormData(createPostForm);
  console.log(formData);
  const postData = Object.fromEntries(formData);
  console.log(postData);

  if (postData.media) {
    postData.media = {
      url: postData.media,
      alt: postData.alt || postData.title,
    };
  }

  postData.tags = [personalTag];

  createPost(postData);
};
