import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { renderSpecificPost } from "../../../ui/posts/renderSpecificPost.mjs";
import { fetchPost } from "../fetchPost.mjs";
const messageContainer = document.querySelector("#info-message");

export const getSpecificPostHandler = async () => {
  try {
    const data = await fetchPost("GET");
    const post = data?.data || [];
    console.log(post);

    if (!post) {
      window.location.href = "../feed/index.html";
    }

    renderSpecificPost(post);
  } catch (err) {
    console.error(err);
    displayMessage(messageContainer, "error", "Failed to load posts. Try again later.");
    loader.style.display = "none";
  }
};
