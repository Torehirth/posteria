import { loginUser } from "../../api/auth/loginUser.mjs";

export const loginFormHandler = (userData) => {
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginFormSubmit);
  }
};

const handleLoginFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);

  loginUser(userData);
};
