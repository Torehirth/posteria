import { API_SOCIAL_URL } from "../../../constants/api.mjs";
import { getUserNameQueryParameter } from "../../../events/common/getUserNameQueryParameter.mjs";
import { updateClickedUserProfilePageTitle } from "../../../events/common/updateClickedUserProfilePageTitle.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { setClickedUserBio } from "../../../ui/common/handlers/setClickedUserBio.mjs";
import { setClickedUserProfileBanner } from "../../../ui/common/handlers/setClickedUserProfileBanner.mjs";
import { setClickedUserProfileImage } from "../../../ui/common/handlers/setClickedUserProfileImage.mjs";
import { updateClickedUserProfileName } from "../../../ui/common/handlers/updateClickedUserProfileName.mjs";
import { updateNumberOfPosts } from "../../../ui/common/handlers/updateNumberPostsProfile.mjs";
import { updateUserNumberStats } from "../../../ui/common/utils/updateUserNumberStats.mjs";
import { fetchAPI } from "../../utils/fetchAPI.mjs";

export const handleUserProfileInfo = async () => {
  const userName = getUserNameQueryParameter("name");
  const queryParam = "_followers=true&_following=true&_posts=true";
  const url = `${API_SOCIAL_URL}/profiles/${userName}?${queryParam}`;
  console.log(userName);

  try {
    const data = await fetchAPI(url, "GET");
    const profile = data?.data || [];
    console.log(profile);
    setClickedUserProfileBanner(profile, "#profile-banner");
    setClickedUserBio(profile, "#profile-bio");
    setClickedUserProfileImage(profile, "#profile-image");
    updateClickedUserProfilePageTitle(profile);
    updateClickedUserProfileName(profile);
    updateUserNumberStats(profile, "posts", "#number-posts");
    updateUserNumberStats(profile, "followers", "#number-followers");
    updateUserNumberStats(profile, "following", "#number-following");
  } catch (err) {
    console.error(err);
    displayMessage(
      "#info-message",
      "error",
      err.message || "Could not retrieve profile information at this time. Please try again later"
    );
  }
};
