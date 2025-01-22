import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";
import {
  toggleAsideSearchbar,
  closeSearchBarOnKeypress,
  closeSearchbarOnClick,
} from "../handlers/searchbarHandlers.mjs";
import {
  closeSortDropDownByClickOutside,
  closeSortDropdownByEscKey,
  toggleSortDropdownMenu,
} from "../handlers/sortDropdownMenuHandlers.mjs";

// -- Theme --
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
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