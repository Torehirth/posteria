import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";

// -- Theme --
const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
applySystemTheme();
