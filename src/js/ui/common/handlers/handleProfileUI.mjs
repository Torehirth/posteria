import { updatePageTitleWithUser } from "../../../events/common/updatePageTitleWithUser.mjs";
import { setUserProfileBannerImage } from "../setUserProfileBannerImage.mjs";
import { setUserProfileImages } from "../setUserProfileImages.mjs";
import { setUserProfileInfo } from "../setUserProfileInfo.mjs";
import { displayProfileTabs } from "./profileTabHandlers.mjs";

export const handleProfileUI = () => {
  // Display logged in user UI
  updatePageTitleWithUser();
  setUserProfileInfo("name", "#profile-name", "your name");
  setUserProfileInfo("bio", "#profile-bio");
  setUserProfileImages("#profile-image");
  setUserProfileBannerImage("#profile-banner");

  // -- Posts/followers/follow sections
  displayProfileTabs();
};
