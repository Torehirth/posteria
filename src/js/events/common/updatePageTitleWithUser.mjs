import { getFromStorage } from "./utils/getFromStorage.mjs";

export const updatePageTitleWithUser = () => {
  const { name } = getFromStorage("user");
  const titleElement = document.querySelector("title");
  // Capitalize the first letter of the name and makes the rest of name small letters
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  titleElement.innerText = `${formattedName}'s profile | Posteria `;
};
