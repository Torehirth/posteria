export const setUserProfileImage = (
  profile,
  element,
  fallBackImgURL = "../../../src/assets/images/profile/autumn-goodman-vTL_qy03D1I-unsplash.webp",
  fallBackAltText = "Profile image"
) => {
  const { avatar } = profile;
  const imgElement = document.querySelector(element);
  if (!avatar) {
    console.error("Userdata not found in storage");
    return;
  }

  if (!imgElement) {
    console.error(`Element ${element} not found!`);
    return;
  }
  imgElement.src = avatar?.url || fallBackImgURL;
  imgElement.alt = avatar?.alt || fallBackAltText;
};
