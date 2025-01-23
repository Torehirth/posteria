import { applySystemTheme, toggleColourTheme } from "./handlers/themeHandlers.mjs";
import {
  displayFollowersSection,
  displayPostsSection,
  displayFollowingSection,
} from "./handlers/profileTabHandlers.mjs";
import {
  toggleAsideSearchbar,
  closeSearchBarOnKeypress,
  closeSearchbarOnClick,
} from "./handlers/searchbarHandlers.mjs";
import {
  closeSortDropDownByClickOutside,
  closeSortDropdownByEscKey,
  toggleSortDropdownMenu,
} from "./handlers/sortDropdownMenuHandlers.mjs";
import { registerFormHandler } from "./events/auth/registerFormHandler.mjs";

const router = () => {
  const pathname = window.location.pathname;
  const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
  const themeToggleBtn = document.querySelector("#theme-toggle-btn");

  switch (pathname) {
    case "/":
    case "/index.html":
      // -- Theme --
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      break;

    case "/register":
    case "/register/index.html":
      // -- Theme --
      headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      // -- Register --
      registerFormHandler();
      break;

    case "/feed":
    case "/feed/index.html":
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
      break;

    case "/profile":
    case "/profile/index.html":
      // -- Posts/followers/follow section --
      displayPostsSection();
      displayFollowersSection();
      displayFollowingSection();
      // -- Theme --
      themeToggleBtn.addEventListener("click", toggleColourTheme);
      applySystemTheme();
      break;
  }
};

router();
