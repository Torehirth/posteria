import { API_BASE_URL, API_AUTH_ENDPOINT, API_REGISTER_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../ui/common/utils/isFieldsetDisabled.mjs";

export const registerUser = async (data) => {
  const registerURL = `${API_BASE_URL}${API_AUTH_ENDPOINT}${API_REGISTER_ENDPOINT}`;
  const form = document.querySelector("#register-form");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    // Disable fieldset/form when calling the API
    isFieldsetDisabled(true, 0.5, "Registers account..");
    // Fetch API
    const response = await fetch(registerURL, options);
    // Access response message
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Registration failed. Please try again later.");
    }
    // Display success message after successful registration and redirect right after
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
    isFieldsetDisabled(false, 1, "Create account");
  }
};
