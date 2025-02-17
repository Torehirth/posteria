import { API_POSTS_URL } from "../../constants/api.mjs";
import { getQueryParameter } from "../../events/common/utils/getQueryParameter.mjs";
import { resetURLWithoutRefresh } from "../../events/common/utils/resetURLWithoutRefresh.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { fetchPost } from "./fetchPost.mjs";

export const deletePostListener = () => {
  document.addEventListener("click", deletePost);
};

const deletePost = async (e) => {
  const id = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${id}`;

  if (!id) {
    console.error("ID not found as query parameter");
    return;
  }
  const deleteButton = e.target.closest("#delete-button");
  if (!deleteButton) return;

  try {
    await fetchPost(Url, "DELETE");
    console.log("Post deleted successfully");
    const postWrapper = document.querySelector("#post-wrapper");
    console.log(postWrapper);
    postWrapper.remove();
    resetURLWithoutRefresh();

    displayMessage("#info-message", "success", "Post deleted successfully!");
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", err.message || "Could delete post");
  }
};
