export const updateClickedUserProfilePageTitle = (name) => {
  const userName = name;
  const titleElement = document.querySelector("title");
  // Capitalize the first letter of the name and makes the rest of name small letters
  const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  titleElement.innerText = `${formattedName}'s profile | Posteria `;
};
