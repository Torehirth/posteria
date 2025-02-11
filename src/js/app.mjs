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
import { getPostsHandler, setupInfiniteScroll } from "./api/posts/handlers/getPostsHandler.mjs";
import { logOut } from "./ui/common/handlers/logoutHandler.mjs";

const router = () => {
  const pathname = window.location.pathname;
  const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
  const themeToggleBtn = document.querySelector("#theme-toggle-btn");
  console.log(pathname);
  console.log(window.location.href);

  switch (pathname) {
    case "/":
      // case "/index.html":
      // Login page
      loginFormHandler();
      // -- Theme --
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      break;

    case "/register":
      // case "/register/index.html":
      // -- Theme --
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // -- Register --
      registerFormHandler();
      break;

    case "/feed":
      // case "/feed/index.html":
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
      getPostsHandler();
      // Log out
      logOut();
      break;

    case "/profile":
      // case "/profile/index.html":
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
