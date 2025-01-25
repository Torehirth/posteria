import { registerUser } from "../../api/auth/registerUser.mjs";

export const registerFormHandler = () => {
  const registerForm = document.querySelector("#register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterFormSubmit);
  }
};

const handleRegisterFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);

  registerUser(userData);
};