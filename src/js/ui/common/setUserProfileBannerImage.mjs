import { getFromStorage } from "../../events/common/utils/getFromStorage.mjs";

/**
 * Sets the `src` and `alt` attributes of a profile banner image using user data from storage.
 * Falls back to a default image and alt text if no banner image is available.
 *
 * @param {string} element - A CSS selector for the banner image element.
 * @param {string} [fallBackImgURL="../../../src/assets/images/banner/steve-doig-tOgc0Gjj_8E-unsplash.webp"]
 * - Optional fallback image URL if the banner URL is not found in storage.
 * @param {string} [fallBackAltText="Profile banner"]
 * - Optional fallback alt text if the banner alt text is not found in storage.
 *
 * @example
 * // Assuming getFromStorage("user") returns { banner: { url: "banner.jpg", alt: "User Banner" } }
 * setUserProfileBannerImage("#profile-banner");
 * // Sets src to "banner.jpg" and alt to "User Banner"
 *
 * // If no banner is found, it sets a fallback image and alt text
 * setUserProfileBannerImage("#profile-banner", "default-banner.jpg", "Default Banner");
 */

export const setUserProfileBannerImage = (
  element,
  fallBackImgURL = "../../../src/assets/images/banner/steve-doig-tOgc0Gjj_8E-unsplash.webp",
  fallBackAltText = "Profile banner"
) => {
  const userData = getFromStorage("user");
  if (!userData) {
    console.error("Userdata not found in storage");
    return;
  }

  const bannerElement = document.querySelector(element);
  if (!bannerElement) {
    console.error("Banner element ${element} not found!");
    return;
  }

  bannerElement.src = userData?.banner?.url || fallBackImgURL;
  bannerElement.alt = userData?.banner?.alt || fallBackAltText;
};
