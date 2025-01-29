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
  const postData = Object.fromEntries(formData);

  if (!postData.media || !postData.media.url) {
    delete postData.media;
  }

  createPost(postData);
};
