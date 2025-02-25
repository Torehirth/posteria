export const updateClickedUserProfileName = (name) => {
  const userName = name;
  const nameElement = document.querySelector("#profile-name");
  // Capitalize the first letter of the name and makes the rest of name small letters
  const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  nameElement.innerText = formattedName;
};
