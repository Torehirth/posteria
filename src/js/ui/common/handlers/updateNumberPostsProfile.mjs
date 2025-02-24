const numberOfPostsWrapper = document.querySelector("#number-posts");

export const updateNumberOfPosts = (postsData) => {
  const numberOfPosts = postsData.length || "";
  console.log();
  
  numberOfPostsWrapper.textContent = numberOfPosts;
};
