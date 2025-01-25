import { API_BASE_URL, API_AUTH_ENDPOINT, API_LOGIN_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

export const loginUser = async (user) => {
  const loginURL = `${API_BASE_URL}${API_AUTH_ENDPOINT}${API_LOGIN_ENDPOINT}`;

  const form = document.querySelector("#login-form");
  const fieldset = document.querySelector("fieldset");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    // Disable fieldset/form when calling the API
    fieldset.disabled = true;
    fieldset.style.opacity = 0.5;
    // Fetch API
    const response = await fetch(loginURL, options);
    // Access response message
    const json = await response.json();
    console.log(response);

    // Throw error if response is not ok.
    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Login failed. Please try again later.");
    }

    // Display success message after successful registration and redirect
    displayMessage("#info-message", "success", "Login successful 🎉");
    setTimeout(() => {
      window.location.href = "/profile/index.html";
    }, 500);
  } catch (err) {
    console.error(err.message);
    // Catches the error further up and displays only the message
    displayMessage("#info-message", "warning", err.message);
    form.reset();
  } finally {
    // Enable fieldset/form after calling the API
    fieldset.disabled = false;
    fieldset.style.opacity = 1;
  }
};
