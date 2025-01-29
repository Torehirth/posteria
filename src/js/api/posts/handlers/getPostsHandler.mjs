import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { getPosts } from "../getPosts.mjs";

export const getPostsHandler = async () => {
  try {
    const posts = await getPosts();

    console.log(posts);
  } catch (err) {
    console.error(err);
    displayMessage(container, "error", "Failed to display posts. Try again later..");
  }
};
