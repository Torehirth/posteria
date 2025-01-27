import { API_BASE_URL, API_AUTH_ENDPOINT, API_LOGIN_ENDPOINT } from "../../constants/api.mjs";
import { saveToStorage } from "../../events/common/utils/saveToStorage.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

export const loginUser = async (data) => {
  const loginURL = `${API_BASE_URL}${API_AUTH_ENDPOINT}${API_LOGIN_ENDPOINT}`;

  const form = document.querySelector("#login-form");
  const fieldset = document.querySelector("fieldset");
  const submitButton = document.querySelector("fieldset button");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    // Disable fieldset/form when calling the API
    fieldset.disabled = true;
    fieldset.style.opacity = 0.5;
    submitButton.textContent = "Loading...";
    // Fetch API
    const response = await fetch(loginURL, options);
    // Access response message
    const json = await response.json();
    // Save user info to local storage
    saveToStorage("user", json);

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Login failed. Please try again later.");
    }

    // Redirect after successful login
    window.location.href = "/profile/index.html";
  } catch (err) {
    console.error(err.message);
    // Catches the error further up and displays only the message
    displayMessage("#info-message", "warning", err.message);
    form.reset();
  } finally {
    // Enable fieldset/form after calling the API
    fieldset.disabled = false;
    fieldset.style.opacity = 1;
    submitButton.textContent = "Submit";
  }
};
