const numberOfPostsWrapper = document.querySelector("#number-posts");

export const updateNumberOfPosts = (postsData) => {
  const numberOfPosts = postsData.length || "?";

  if (numberOfPosts !== typeof number) {
    console.error("Number of posts is not a number");
  }
  numberOfPostsWrapper.textContent = numberOfPosts;
};
