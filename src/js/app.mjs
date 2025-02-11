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
import { setupInfiniteScroll } from "./api/posts/handlers/getPostsHandler.mjs";
import { logOut } from "./ui/common/handlers/logoutHandler.mjs";
import { searchInputEventListener } from "./api/posts/handlers/searchPosts.mjs";

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
      // Log out
      logOut();
      break;
    case "/profile/index.html":
    case "/profile/":
      // -- Posts/followers/follow section --
      displayPostsSection();
      displayFollowersSection();
      displayFollowingSection();
      // -- Theme --
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // Log out
      logOut();
      break;
  }
};

router();
