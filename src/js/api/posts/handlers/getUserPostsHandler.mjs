import { API_SOCIAL_URL } from "../../../constants/api.mjs";
import { getFromStorage } from "../../../events/common/utils/getFromStorage.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { renderPosts } from "../../../ui/posts/renderPosts.mjs";
import { fetchPosts } from "../fetchPosts.mjs";

export const getUserPostsHandler = async () => {
  try {
    // Get name property from destucturing the user object from local storage
    const { name } = getFromStorage("user");
    const URLparams = "_author=true";
    const UserPostsURL = `${API_SOCIAL_URL}/profiles/${name}/posts?${URLparams}`;
    const data = await fetchPosts(`${UserPostsURL}`);
    const userPosts = data?.data || [];

    if (!userPosts.length && data) {
      displayMessage("#info-message", "warning", "No posts available");
    }
    // Disable loader when posts are loaded
    document.querySelector("#posts").innerHTML = "";
    renderPosts(userPosts, "#posts", "../post/index.html");
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", error.message || "Failed to display posts. Try again later");
    document.querySelector("#loader").classList.add("hidden");
    console.log("test");
  }
};
