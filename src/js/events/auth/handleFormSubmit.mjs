export const handleFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);
};
