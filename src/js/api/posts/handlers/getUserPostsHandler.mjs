import { API_SOCIAL_URL } from "../../../constants/api.mjs";
import { getFromStorage } from "../../../events/common/utils/getFromStorage.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { renderPosts } from "../../../ui/posts/renderPosts.mjs";
import { fetchPosts } from "../fetchPosts.mjs";

export const getUserPostsHandler = async () => {
  try {
    const { name } = getFromStorage("user");
    console.log(name);
    const URLparams = "_author=true";
    const UserPostsURL = `${API_SOCIAL_URL}/profiles/${name}/posts?${URLparams}`;
    const posts = await fetchPosts(`${UserPostsURL}`);
    const userPosts = posts.data;
    console.log(userPosts);
    document.querySelector("#posts").innerHTML = "";
    renderPosts(userPosts, "#posts");
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", "Having problem loading posts, try again later..");
    document.querySelector("#loader").classList.add("hidden");
  }
};
