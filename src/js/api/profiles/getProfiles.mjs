import { API_SOCIAL_URL } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { fetchAPI } from "../utils/fetchAPI.mjs";

export const getProfiles = async () => {
  const queryParam = "?_followers=true&_following=true&_posts=true";
  const url = `${API_SOCIAL_URL}/profiles${queryParam}`;
  try {
    const profiles = await fetchAPI(url, "GET");
    // console.log(profiles);

    return profiles;
  } catch (err) {
    console.error(err);
    displayMessage(
      "#info-message",
      "error",
      err.message || "Could not retrieve profile information at this time. Please try again later"
    );
  }
};
