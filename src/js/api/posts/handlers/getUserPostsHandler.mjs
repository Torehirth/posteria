import { API_SOCIAL_URL } from "../../../constants/api.mjs";
import { getFromStorage } from "../../../events/common/utils/getFromStorage.mjs";
import { renderPosts } from "../../../events/posts/renderPosts.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { updateNumberOfPosts } from "../../../ui/common/handlers/updateNumberPostsProfile.mjs";
import { fetchPosts } from "../fetchPosts.mjs";

export const getUserPostsHandler = async () => {
  try {
    const { name } = getFromStorage("user");
    const URLparams = "_author=true";
    const UserPostsURL = `${API_SOCIAL_URL}/profiles/${name}/posts?${URLparams}`;
    const data = await fetchPosts(`${UserPostsURL}`);
    const userPosts = data?.data || {};
    console.log("userPosts");

    if (!userPosts.length && data) {
      displayMessage("#info-message", "success", "No posts available");
    }
    // Disable loader when posts are loaded
    document.querySelector("#posts").innerHTML = "";
    renderPosts(userPosts, "#posts", "../post/index.html");
    updateNumberOfPosts(userPosts);
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", error.message || "Failed to display posts. Try again later");
    document.querySelector("#loader").classList.add("hidden");
    console.log("test");
  }
};
