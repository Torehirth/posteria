import { API_BASE_URL, API_AUTH_ENDPOINT, API_REGISTER_ENDPOINT } from "../../constants/api.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

export const registerUser = async (user) => {
  const registerURL = `${API_BASE_URL}${API_AUTH_ENDPOINT}${API_REGISTER_ENDPOINT}`;
  const form = document.querySelector("#register-form");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(registerURL, options);
    const json = await response.json();

    // Throw error if response is not ok.
    if (!response.ok) {
      // display warning message

      throw new Error(json.errors?.[0]?.message || "Registration failed");
    }

    // Redirect on successful registration
    displayMessage("#info-message", "success", "Login successful 🎉");
    setTimeout(() => {
      window.location.href = "/profile/index.html";
    }, 500);

    return json;
  } catch (error) {
    console.error(`Registration failed, ${error.message}`);
    displayMessage("#info-message", "warning", error.message);
    form.reset();
    throw error;
  }
};
