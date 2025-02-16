import { updatePageTitle } from "../../../events/common/updatePageTitle.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { renderSpecificPost } from "../../../ui/posts/renderSpecificPost.mjs";
import { fetchPost } from "../fetchPost.mjs";
const messageContainer = document.querySelector("#info-message");

export const getSpecificPostHandler = async () => {
  try {
    const data = await fetchPost("GET");
    const post = data?.data || [];

    if (!post) {
      window.location.href = "../feed/index.html";
    }
    console.log(post);
    updatePageTitle(post);
    renderSpecificPost(post);
  } catch (err) {
    console.error(err);
    displayMessage(messageContainer, "error", "Failed to load posts. Try again later.");
    loader.style.display = "none";
  }
};
