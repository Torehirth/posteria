import { getTimeAgo } from "../../events/posts/getTimeAgo.mjs";
import { createSpecificPostElements } from "./createSpecificPostElements.mjs";

const postContainer = document.querySelector("#post-container");

export const renderSpecificPost = async (post) => {
  postContainer.innerHTML = "";

  const profileName = post?.author?.name || "User profile";
  const profileImg = post?.author?.avatar?.url || "../../src/assets/images/profile/default-avatar.webp";
  const profileImgAlt = post?.author?.avatar?.alt || "Profile image";
  const timeAgo = getTimeAgo(post?.created || "");
  const postImg = post?.media?.url || "";
  const postBodyTitle = post?.title || "Missing title";
  const postBodyText = post?.body || "Missing text";
  const postImgAlt = postImg ? post?.media?.alt || postBodyTitle : "";

  createSpecificPostElements(
    profileName,
    profileImg,
    profileImgAlt,
    timeAgo,
    postImg,
    postImgAlt,
    postBodyTitle,
    postBodyText
  );
};
