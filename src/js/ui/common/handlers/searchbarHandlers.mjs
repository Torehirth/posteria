const searchButton = document.querySelector("#aside-feed-button");
const searchInputContainer = document.querySelector("#aside-feed-search-container");
const searchInput = document.querySelector("#aside-feed-search");

export const toggleAsideSearchbar = () => {
  searchButton.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInputContainer.classList.toggle("hidden");
    searchInput.classList.toggle("hidden");
  });
};

const closeSearchbar = () => {
  searchInputContainer.classList.add("hidden");
  searchInput.classList.add("hidden");
  searchInput.value = "";
};

export const closeSearchBarOnKeypress = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearchbar();
    }
  });
};

export const closeSearchbarOnClick = () => {
  document.addEventListener("click", (e) => {
    e.stopPropagation;
    if (
      !searchInputContainer.classList.contains("hidden") &&
      !e.target.closest("#aside-feed-search-container") &&
      !e.target.closest("#aside-feed-button")
    ) {
      closeSearchbar();
    }
  });
};
