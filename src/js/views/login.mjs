// Theme mode
import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";
const headerThemeToggleBtn = document.querySelector("#header-theme-toggle-btn");
headerThemeToggleBtn.addEventListener("click", toggleColourTheme);
applySystemTheme();
