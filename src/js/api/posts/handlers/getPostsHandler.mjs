import { getPosts } from "../getPosts.mjs";

export const getPostsHandler = async () => {
  try {
    const posts = await getPosts();

    console.log(posts);
  } catch (err) {
    console.error(err);
  }
};
