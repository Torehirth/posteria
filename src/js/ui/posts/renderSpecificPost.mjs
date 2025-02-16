import { createSpecificPostElements } from "./createSpecificPostElements.mjs";

export const renderSpecificPost = (post) => {
  const profileName = post?.author?.name || "";
  const profileImg = post?.author?.avatar?.url || "";
  const profileImgAlt = post?.author?.avatar?.alt || "";
  const timeAgo = getTimeAgo(post?.created || "");
  const postImg = post?.media?.url || "";
  const postImgAlt = postImage ? post?.media?.alt || postTitle : "";
  const postTitle = post?.title || "Missing title";
  const postBodyText = post?.body || "Missing text";

  createSpecificPostElements(
    profileName,
    profileImg,
    profileImgAlt,
    timeAgo,
    postImg,
    postImgAlt,
    postTitle,
    postBodyText
  );
};
