import { getTimeAgo } from "../../events/posts/getTimeAgo.mjs";
import { createPostElements } from "./createPostElements.mjs";

// Render posts to the container
export const renderPosts = (posts) => {
  posts.forEach((post) => {
    const profileImage = post?.author?.avatar?.url || "";
    const profileName = post?.author?.name || "";
    const postTitle = post?.title || "New Post";
    const postBody = post?.body || "";
    const postImage = post?.media?.url || "";
    const postAltText = postImage ? post?.media?.alt || postTitle : "";
    const timeAgo = getTimeAgo(post?.created || "");

    createPostElements(profileImage, profileName, postImage, postAltText, postTitle, postBody, timeAgo);
  });
};
