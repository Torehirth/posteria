import { handleFormSubmit } from "./handleFormSubmit.mjs";

export const registerFormHandler = () => {
  const registerUserForm = document.querySelector("#register-form");

  if (registerUserForm) {
    registerUserForm.addEventListener("submit", handleFormSubmit);
  }
};
