import { getFromStorage } from "../../events/common/utils/getFromStorage.mjs";

/**
 * Sets the `src` and `alt` attributes of an image element using user profile data from storage.
 * If no user avatar is found, it falls back to a default image and alt text.
 *
 * @param {string} element - A CSS selector for the image element to update.
 * @param {string} [fallBackImgURL="../../../src/assets/images/profile/autumn-goodman-vTL_qy03D1I-unsplash.webp"] - Optional fallback image URL if the avatar URL is not available.
 * @param {string} [fallBackAltText="Profile image"] - Optional fallback alt text if the avatar alt text is not available.
 *
 * @example
 * // Assuming getFromStorage("user") returns { avatar: { url: "profile.jpg", alt: "User Profile Picture" } }
 * setUserProfileImages("#profile-image"); // Sets src to "profile.jpg" and alt to "User Profile Picture"
 *
 * // If no avatar is found, it sets a fallback image and alt text
 * setUserProfileImages("#profile-image", "default.jpg", "Default Profile Picture");
 */

export const setUserProfileImages = (
  element,
  fallBackImgURL = "../../../src/assets/images/profile/autumn-goodman-vTL_qy03D1I-unsplash.webp",
  fallBackAltText = "Profile image"
) => {
  const { avatar } = getFromStorage("user");
  if (!avatar) {
    console.error("Userdata not found in storage");
    return;
  }

  const imgElement = document.querySelector(element);
  if (!imgElement) {
    console.error(`Element ${element} not found!`);
    return;
  }

  imgElement.src = avatar?.url || fallBackImgURL;
  imgElement.alt = avatar?.alt || fallBackAltText;
};
