import {
  displayFollowersSection,
  displayPostsSection,
  displayFollowingSection,
} from "../handlers/profileTabHandlers.mjs";
import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";

// -- Posts/followers/follow section --
displayPostsSection();
displayFollowersSection();
displayFollowingSection();
// -- Theme --
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
applySystemTheme();
themeToggleBtn.addEventListener("click", toggleColourTheme);
