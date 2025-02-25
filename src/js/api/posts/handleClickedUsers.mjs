import { API_SOCIAL_URL } from "../../constants/api.mjs";
import { getUserNameQueryParameter } from "../../events/common/getUserNameQueryParameter.mjs";
import { updateClickedUserProfilePageTitle } from "../../events/common/updateClickedUserProfilePageTitle.mjs";
import { renderPosts } from "../../events/posts/renderPosts.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { updateClickedUserProfileName } from "../../ui/common/handlers/updateClickedUserProfileName.mjs";
import { updateNumberOfPosts } from "../../ui/common/handlers/updateNumberPostsProfile.mjs";
import { fetchAPI } from "../utils/fetchAPI.mjs";

export const handleClickedUsers = async () => {
  const userName = getUserNameQueryParameter("name");
  console.log(userName);
  const url = `${API_SOCIAL_URL}/profiles/${userName}/posts?_author=true`;

  try {
    const data = await fetchAPI(url, "GET");
    const userPosts = data?.data || [];
    console.log(userPosts);
    document.querySelector("#posts").innerHTML = "";
    updateNumberOfPosts(userPosts);
    updateClickedUserProfilePageTitle(userName);
    updateClickedUserProfileName(userName);
    renderPosts(userPosts, "#posts");
  } catch (err) {
    console.error(err);
    displayMessage(
      "#info-message",
      "error",
      err.message || "Could not display posts by this user at this point. Please try again later"
    );
  }
};
