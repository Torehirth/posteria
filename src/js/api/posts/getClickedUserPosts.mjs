import { API_SOCIAL_URL } from "../../constants/api.mjs";
import { renderPosts } from "../../events/posts/renderPosts.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { updateNumberOfPosts } from "../../ui/common/handlers/updateNumberPostsProfile.mjs";
import { fetchAPI } from "../utils/fetchAPI.mjs";

export const getClickedUserPosts = async () => {
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

export const getUserNameQueryParameter = (userName) => {
  const queryParam = window.location.search;
  const searchParams = new URLSearchParams(queryParam);
  const hasName = searchParams.has(userName);
  if (!hasName) {
    return;
  }
  const name = searchParams.get(userName);
  return name;
};

export const updateClickedUserProfilePageTitle = (name) => {
  const userName = name;
  const titleElement = document.querySelector("title");
  // Capitalize the first letter of the name and makes the rest of name small letters
  const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  titleElement.innerText = `${formattedName}'s profile | Posteria `;
};

export const updateClickedUserProfileName = (name) => {
  const userName = name;
  const nameElement = document.querySelector("#profile-name");
  // Capitalize the first letter of the name and makes the rest of name small letters
  const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  nameElement.innerText = formattedName;
};
