// Theme mode
import { applySystemTheme, toggleColourTheme } from "../handlers/themeHandlers.mjs";
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
applySystemTheme();
themeToggleBtn.addEventListener("click", toggleColourTheme);

document.addEventListener("click", (e) => {
  console.log(e.target);
});
