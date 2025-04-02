export const setUserProfileBanner = (
  userProfile,
  element,
  fallBackImgURL = "../../../src/assets/images/banner/steve-doig-tOgc0Gjj_8E-unsplash.webp",
  fallBackAltText = "Profile banner"
) => {
  const userData = userProfile;
  const bannerElement = document.querySelector(element);
  if (!userData) {
    console.error("Userdata not found in storage");
    return;
  }

  if (!bannerElement) {
    console.error("Banner element ${element} not found!");
    return;
  }
  bannerElement.src = userData?.banner?.url || fallBackImgURL;
  bannerElement.alt = userData?.banner?.alt || fallBackAltText;
};
