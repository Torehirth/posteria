// Theme mode
import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");

themeToggleBtn.addEventListener("click", toggleColourTheme);
headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
applySystemTheme();

document.addEventListener("click", (e) => {
  console.log(e.target);
});
