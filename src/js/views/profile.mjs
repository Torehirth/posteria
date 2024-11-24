// Profile tabs
import {
  displayFollowersSection,
  displayPostsSection,
  displayFollowingSection,
} from "../handlers/profileTabHandlers.mjs";
displayPostsSection();
displayFollowersSection();
displayFollowingSection();
// Theme mode
import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
applySystemTheme();
themeToggleBtn.addEventListener("click", toggleColourTheme);
