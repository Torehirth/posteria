import { registerUser } from "../../api/auth/registerUser.mjs";

export const handleFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);

  console.log(userData);
  registerUser(userData);
};
