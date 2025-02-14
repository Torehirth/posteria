import { getFromStorage } from "../../events/common/utils/getFromStorage.mjs";

/**
 * Sets the text content of a specified HTML element with user profile data from storage.
 * If the key does not exist in storage, it falls back to a default text.
 *
 * @param {string} key - The key to retrieve from the stored user data.
 * @param {string} element - A CSS selector for the HTML element to update.
 * @param {string} [fallBackText=""] - Optional fallback text if the key does not exist in storage.
 *
 * @example
 * // Assuming getFromStorage("user") returns { name: "John Doe" }
 * setUserProfileInfo("name", "#profile-name"); // Sets textContent to "John Doe"
 *
 * // If "email" key does not exist, it falls back to "Not provided"
 * setUserProfileInfo("email", "#profile-email", "Not provided");
 *
 * // If "address" key does not exist and no fallback is provided, it sets an empty string
 * setUserProfileInfo("address", "#profile-address");
 */

export const setUserProfileInfo = (key, element, fallBackText = "") => {
  const userData = getFromStorage("user");
  const valueFromStorage = userData?.[key] || fallBackText;
  document.querySelector(element).textContent = valueFromStorage;
};
