const darkModeIcon = document.querySelector("#dark-mode-icon");
const lightModeIcon = document.querySelector("#light-mode-icon");
const headerDarkModeIcon = document.querySelector("#header-dark-mode-icon");
const headerLightModeIcon = document.querySelector("#header-light-mode-icon");

export const applySystemTheme = () => {
  const userPreference = localStorage.getItem("theme");

  const systemPreferenceIsDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const isDarkMode =
    userPreference === "dark" || (!userPreference && systemPreferenceIsDark);

  document.documentElement.classList.toggle("dark", isDarkMode);

  lightModeIcon.classList.toggle("hidden", !isDarkMode);
  headerLightModeIcon.classList.toggle("hidden", !isDarkMode);
  darkModeIcon.classList.toggle("hidden", isDarkMode);
  headerDarkModeIcon.classList.toggle("hidden", isDarkMode);
};

export const toggleColourTheme = () => {
  const isDarkMode = document.documentElement.classList.toggle("dark");

  lightModeIcon.classList.toggle("hidden", !isDarkMode);
  darkModeIcon.classList.toggle("hidden", isDarkMode);
  headerLightModeIcon.classList.toggle("hidden", !isDarkMode);
  headerDarkModeIcon.classList.toggle("hidden", isDarkMode);

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

// themeToggleBtn.addEventListener("click", toggleColourTheme);

// -------------

// const themeToggleBtn = document.querySelector("#theme-toggle-btn");
// const darkModeIcon = document.querySelector("#dark-mode-icon");
// const lightModeIcon = document.querySelector("#light-mode-icon");

// // Function to apply the theme
// const applyTheme = (theme) => {
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//     lightModeIcon.classList.remove("hidden");
//     darkModeIcon.classList.add("hidden");
//   } else {
//     document.documentElement.classList.remove("dark");
//     lightModeIcon.classList.add("hidden");
//     darkModeIcon.classList.remove("hidden");
//   }
// };

// // Function to initialize the theme on page load
// export const initializeTheme = () => {
//   const userPreference = localStorage.getItem("theme");
//   if (userPreference) {
//     applyTheme(userPreference);
//   } else {
//     const systemPreferenceIsDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     applyTheme(systemPreferenceIsDark ? "dark" : "light");
//   }
// };
// // initializeTheme();

// // Function to toggle the theme when user clicks the button
// export const toggleTheme = () => {
//   const isDarkMode = document.documentElement.classList.contains("dark");
//   const newTheme = isDarkMode ? "light" : "dark";
//   applyTheme(newTheme);
//   localStorage.setItem("theme", newTheme);
// };

// themeToggleBtn.addEventListener("click", toggleTheme);
