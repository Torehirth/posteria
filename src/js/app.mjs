import {
  displayFollowersSection,
  displayPostsSection,
  displayFollowingSection,
} from "./ui/common/handlers/profileTabHandlers.mjs";
import {
  toggleAsideSearchbar,
  closeSearchBarOnKeypress,
  closeSearchbarOnClick,
} from "./ui/common/handlers/searchbarHandlers.mjs";
import {
  closeSortDropDownByClickOutside,
  closeSortDropdownByEscKey,
  toggleSortDropdownMenu,
} from "./ui/common/handlers/sortDropdownMenuHandlers.mjs";
import { registerFormHandler } from "./events/auth/registerFormHandler.mjs";
import { applySystemTheme, toggleColourTheme } from "./ui/common/handlers/themeHandlers.mjs";
import { loginFormHandler } from "./events/auth/loginFormHandler.mjs";
import { createPostHandler } from "./api/posts/handlers/createPostHandler.mjs";
import { logOut } from "./ui/common/handlers/logoutHandler.mjs";
import { searchInputEventListener } from "./api/posts/handlers/searchPostsHandler.mjs";
import {
  setupNewPostButtonListeners,
  applyNewPostStateFromURL,
} from "./ui/common/handlers/newPostButtonHandlers.mjs";
import { setupClickOutsideNewPostHandler } from "./ui/common/handlers/newPostStateHandlers.mjs";
import { setupInfiniteScroll } from "./ui/common/handlers/setUpInfiniteScroll.mjs";
import { getUserPostsHandler } from "./api/posts/handlers/getUserPostsHandler.mjs";
import { setUserProfileInfo } from "./ui/common/setUserProfileInfo.mjs";
import { setUserProfileImages } from "./ui/common/setUserProfileImages.mjs";
import { setUserProfileBannerImage } from "./ui/common/setUserProfileBannerImage.mjs";
import { getQueryParameter } from "./events/common/utils/getQueryParameter.mjs";
import { getSpecificPostHandler } from "./api/posts/handlers/getPostHandler.mjs";

const router = () => {
  const pathname = window.location.pathname;
  const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
  const themeToggleBtn = document.querySelector("#theme-toggle-btn");

  switch (pathname) {
    case "/index.html":
    case "/":
      // Login page
      loginFormHandler();
      // -- Theme --
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      break;
    case "/register/index.html":
    case "/register/":
      // -- Theme --
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // -- Register --
      registerFormHandler();
      break;
    case "/feed/index.html":
    case "/feed/":
      // -- Theme --
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // -- Searchbar --
      toggleAsideSearchbar();
      closeSearchBarOnKeypress();
      closeSearchbarOnClick();
      // -- Sort dropdown menu --
      toggleSortDropdownMenu();
      closeSortDropDownByClickOutside();
      closeSortDropdownByEscKey();
      // Posts
      createPostHandler();
      setupInfiniteScroll();
      // Search
      searchInputEventListener();
      // new post click
      setupNewPostButtonListeners();
      applyNewPostStateFromURL();
      setupClickOutsideNewPostHandler();
      // Log out
      logOut();
      break;
    case "/profile/index.html":
    case "/profile/":
      setUserProfileInfo("name", "#profile-name", "your name");
      setUserProfileInfo("bio", "#profile-bio");
      setUserProfileImages("#profile-image");
      setUserProfileBannerImage("#profile-banner");
      // -- Posts/followers/follow sections
      displayPostsSection();
      displayFollowersSection();
      displayFollowingSection();
      // -- Theme --
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // new post click
      setupNewPostButtonListeners();
      // Personal posts
      getUserPostsHandler();
      // Log out
      logOut();
      break;

    case "/post/index.html":
    case "/post/":
      // -- Theme --
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // new post click
      setupNewPostButtonListeners();
      // Display post
      getSpecificPostHandler();
      break;
  }
};

router();
