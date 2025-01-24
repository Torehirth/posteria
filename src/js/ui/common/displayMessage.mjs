export const displayMessage = (container, messageClass, message) => {
  const messageContainer = document.querySelector(container);

  messageContainer.classList.remove("error", "warning", "success");
  messageContainer.classList.add(messageClass);
  messageContainer.innerText = message;
};
