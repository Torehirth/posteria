// export const createPostElements = (
//   profileImage,
//   authorName,
//   postImage,
//   altText,
//   postTitle,
//   postBody,
//   timeAgo,
//   postsContainerId
// ) => {
//   // Create the main post container
//   const postContainer = document.createElement("div");
//   postContainer.className = "flex flex-col gap-4 pt-4";

//   // Create the author info section
//   const authorInfo = document.createElement("a");
//   authorInfo.href = "#";
//   authorInfo.className = "flex gap-2 items-center w-fit -mb-2";

//   const authorImage = document.createElement("img");
//   authorImage.className = "w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover";
//   authorImage.src = profileImage;
//   authorImage.alt = "Profile image";

//   const authorDetails = document.createElement("div");
//   authorDetails.className = "flex flex-col";

//   const authorNameElement = document.createElement("p");
//   authorNameElement.className = "text-sm";
//   authorNameElement.textContent = authorName;

//   const timeAgoElement = document.createElement("p");
//   timeAgoElement.className = "text-xs font-light opacity-80";
//   timeAgoElement.setAttribute("aria-label", "When content was posted");
//   timeAgoElement.textContent = timeAgo;

//   authorDetails.appendChild(authorNameElement);
//   authorDetails.appendChild(timeAgoElement);
//   authorInfo.appendChild(authorImage);
//   authorInfo.appendChild(authorDetails);

//   // Create the post image section
//   const postImageContainer = document.createElement("div");
//   postImageContainer.className = "flex max-h-48 xs:max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96";

//   const postImageElement = document.createElement("img");
//   postImageElement.className = "object-cover rounded-lg";
//   postImageElement.src = postImage;
//   postImageElement.alt = altText;

//   postImageContainer.appendChild(postImageElement);

//   // Create the post title section
//   const postTitleElement = document.createElement("h2");
//   postTitleElement.className = "max-w-prose";
//   postTitleElement.textContent = postTitle;

//   // Create the post body section
//   const postBodyElement = document.createElement("p");
//   postBodyElement.className = "text-sm max-w-prose -mt-2";
//   postBodyElement.textContent = postBody;

//   // Create the like and comment buttons section
//   const buttonContainerFull = document.createElement("div");
//   buttonContainerFull.className = "flex justify-between";

//   const buttonsContainerLeft = document.createElement("div");
//   buttonsContainerLeft.className = "flex gap-6";

//   const buttonsContainerRight = document.createElement("div");
//   buttonsContainerRight.className = "flex gap-6";

//   buttonContainerFull.appendChild(buttonsContainerLeft);
//   buttonContainerFull.appendChild(buttonsContainerRight);

//   const likeButton = document.createElement("div");
//   const likeCheckbox = document.createElement("input");
//   likeCheckbox.type = "checkbox";
//   likeCheckbox.id = "like";
//   likeCheckbox.className = "peer absolute size-6 icon-states opacity-0 cursor-pointer";

//   const likeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   likeIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//   likeIcon.setAttribute("fill", "none");
//   likeIcon.setAttribute("viewBox", "0 0 24 24");
//   likeIcon.setAttribute("stroke-width", "1.5");
//   likeIcon.setAttribute("stroke", "currentColor");
//   likeIcon.classList.add(
//     "size-6",
//     "icon-states",
//     "peer-checked:fill-rose-600",
//     "peer-checked:stroke-rose-600",
//     "peer-hover:stroke-2",
//     "peer-focus-visible:outline-none",
//     "peer-focus-visible:ring-2",
//     "peer-focus-visible:ring-black",
//     "peer-focus-visible:rounded-sm"
//   );
//   likeIcon.innerHTML =
//     '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />';

//   likeButton.appendChild(likeCheckbox);
//   likeButton.appendChild(likeIcon);

//   const commentButton = document.createElement("button");
//   commentButton.type = "button";

//   const commentIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   commentIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//   commentIcon.setAttribute("fill", "none");
//   commentIcon.setAttribute("viewBox", "0 0 24 24");
//   commentIcon.setAttribute("stroke-width", "1.5");
//   commentIcon.setAttribute("stroke", "currentColor");
//   commentIcon.classList.add("size-6", "icon-states");
//   commentIcon.innerHTML =
//     '<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />';

//   commentButton.appendChild(commentIcon);

//   const editButton = document.createElement("button");
//   editButton.type = "button";

//   const editIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   editIcon.setAttribute("xlmns", "http://www.w3.org/2000/svg");
//   editIcon.setAttribute("fill", "none");
//   editIcon.setAttribute("viewBox", "0 0 24 24");
//   editIcon.setAttribute("stroke-width", "1.5");
//   editIcon.setAttribute("stroke", "currentColor");
//   editIcon.classList.add("size-6", "icon-states");
//   editIcon.innerHTML = `<path
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//     />`;

//   editButton.appendChild(editIcon);

//   // Delete button
//   const deleteButton = document.createElement("button");
//   editButton.type = "button";

//   const deleteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   deleteIcon.setAttribute("xlmns", "http://www.w3.org/2000/svg");
//   deleteIcon.setAttribute("fill", "none");
//   deleteIcon.setAttribute("viewBox", "0 0 24 24");
//   deleteIcon.setAttribute("stroke-width", "1.5");
//   deleteIcon.setAttribute("stroke", "currentColor");
//   deleteIcon.classList.add("size-6", "icon-states");
//   deleteIcon.innerHTML = `<path
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//     />`;

//   deleteButton.appendChild(deleteIcon);

//   buttonsContainerLeft.appendChild(likeButton);
//   buttonsContainerLeft.appendChild(commentButton);
//   buttonsContainerRight.appendChild(editButton);
//   buttonsContainerRight.appendChild(deleteButton);

//   // Append all sections to the post container
//   postContainer.appendChild(authorInfo);
//   postContainer.appendChild(postImageContainer);
//   postContainer.appendChild(postTitleElement);
//   postContainer.appendChild(postBodyElement);
//   postContainer.appendChild(buttonContainerFull);

//   // Create the border bottom
//   const borderBottom = document.createElement("div");
//   borderBottom.setAttribute("aria-hidden", "true");
//   borderBottom.className =
//     "w-full border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 my-4";

//   // Append the post container and border bottom to the feed
//   const container = document.querySelector(postsContainerId);
//   container.appendChild(postContainer);
//   container.appendChild(borderBottom);
// };

// ----------------------------------------------------

export const createPostElements = (
  profileImage,
  authorName,
  postImage,
  altText,
  postTitle,
  postBody,
  timeAgo,
  postsContainerId,
  postUrl // <-- URL for the post page
) => {
  // Create the main post container
  const postContainer = document.createElement("div");
  postContainer.className = "flex flex-col gap-4 pt-4";

  // Create the author info section
  const authorInfo = document.createElement("a");
  authorInfo.href = "#";
  authorInfo.className = "-mb-2 flex gap-2 items-center w-fit";

  const authorImage = document.createElement("img");
  authorImage.className = "w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover";
  authorImage.src = profileImage;
  authorImage.alt = "Profile image";

  const authorDetails = document.createElement("div");
  authorDetails.className = "flex flex-col";

  const authorNameElement = document.createElement("p");
  authorNameElement.className = "text-sm capitalize";
  authorNameElement.textContent = authorName;

  const timeAgoElement = document.createElement("p");
  timeAgoElement.className = "text-xs font-light opacity-80";
  timeAgoElement.setAttribute("aria-label", "When content was posted");
  timeAgoElement.textContent = timeAgo;

  authorDetails.appendChild(authorNameElement);
  authorDetails.appendChild(timeAgoElement);
  authorInfo.appendChild(authorImage);
  authorInfo.appendChild(authorDetails);

  // Wrap post image, title, and body in an anchor tag
  const postLink = document.createElement("a");
  postLink.href = postUrl; // <-- Make the entire post clickable
  postLink.className = "flex flex-col gap-2"; // Keep it structured

  // Create the post image section
  const postImageContainer = document.createElement("div");
  postImageContainer.className = "flex max-h-48 xs:max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96";

  const postImageElement = document.createElement("img");
  postImageElement.className = "object-cover rounded-lg";
  postImageElement.src = postImage;
  postImageElement.alt = altText;

  postImageContainer.appendChild(postImageElement);

  // Create the post title section
  const postTitleElement = document.createElement("h2");
  postTitleElement.className = "max-w-prose font-bold text-lg";
  postTitleElement.textContent = postTitle;

  // Create the post body section
  const postBodyElement = document.createElement("p");
  postBodyElement.className = "text-sm max-w-prose -mt-2";
  postBodyElement.textContent = postBody;

  // Append image, title, and body into the anchor element
  postLink.appendChild(postImageContainer);
  postLink.appendChild(postTitleElement);
  postLink.appendChild(postBodyElement);

  // Create the like and comment buttons section
  const buttonContainerFull = document.createElement("div");
  buttonContainerFull.className = "flex justify-between";

  const buttonsContainerLeft = document.createElement("div");
  buttonsContainerLeft.className = "flex gap-6";

  const buttonsContainerRight = document.createElement("div");
  buttonsContainerRight.className = "flex gap-6";

  buttonContainerFull.appendChild(buttonsContainerLeft);
  buttonContainerFull.appendChild(buttonsContainerRight);

  // Like button
  const likeButton = document.createElement("div");
  const likeCheckbox = document.createElement("input");
  likeCheckbox.type = "checkbox";
  likeCheckbox.id = "like";
  likeCheckbox.className = "peer absolute size-6 icon-states opacity-0 cursor-pointer";

  const likeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  likeIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  likeIcon.setAttribute("fill", "none");
  likeIcon.setAttribute("viewBox", "0 0 24 24");
  likeIcon.setAttribute("stroke-width", "1.5");
  likeIcon.setAttribute("stroke", "currentColor");
  likeIcon.classList.add(
    "size-6",
    "icon-states",
    "peer-checked:fill-rose-600",
    "peer-checked:stroke-rose-600",
    "peer-hover:stroke-2",
    "peer-focus-visible:outline-none",
    "peer-focus-visible:ring-2",
    "peer-focus-visible:ring-black",
    "peer-focus-visible:rounded-sm"
  );
  likeIcon.innerHTML =
    '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />';

  likeButton.appendChild(likeCheckbox);
  likeButton.appendChild(likeIcon);

  // Comment button
  const commentButton = document.createElement("button");
  commentButton.type = "button";

  const commentIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  commentIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  commentIcon.setAttribute("fill", "none");
  commentIcon.setAttribute("viewBox", "0 0 24 24");
  commentIcon.setAttribute("stroke-width", "1.5");
  commentIcon.setAttribute("stroke", "currentColor");
  commentIcon.classList.add("size-6", "icon-states");
  commentIcon.innerHTML =
    '<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />';

  commentButton.appendChild(commentIcon);

  // Edit button
  // const editButton = document.createElement("button");
  // editButton.type = "button";

  // const editIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // editIcon.setAttribute("xlmns", "http://www.w3.org/2000/svg");
  // editIcon.setAttribute("fill", "none");
  // editIcon.setAttribute("viewBox", "0 0 24 24");
  // editIcon.setAttribute("stroke-width", "1.5");
  // editIcon.setAttribute("stroke", "currentColor");
  // editIcon.classList.add("size-6", "icon-states");
  // editIcon.innerHTML = `<path
  //     stroke-linecap="round"
  //     stroke-linejoin="round"
  //     d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  //   />`;

  // editButton.appendChild(editIcon);

  // // Delete button
  // const deleteButton = document.createElement("button");
  // editButton.type = "button";

  // const deleteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // deleteIcon.setAttribute("xlmns", "http://www.w3.org/2000/svg");
  // deleteIcon.setAttribute("fill", "none");
  // deleteIcon.setAttribute("viewBox", "0 0 24 24");
  // deleteIcon.setAttribute("stroke-width", "1.5");
  // deleteIcon.setAttribute("stroke", "currentColor");
  // deleteIcon.classList.add("size-6", "icon-states");
  // deleteIcon.innerHTML = `<path
  //     stroke-linecap="round"
  //     stroke-linejoin="round"
  //     d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  //   />`;

  // deleteButton.appendChild(deleteIcon);

  buttonsContainerLeft.appendChild(likeButton);
  buttonsContainerLeft.appendChild(commentButton);
  // buttonsContainerRight.appendChild(editButton);
  // buttonsContainerRight.appendChild(deleteButton);

  // Append all sections to the post container
  // postContainer.appendChild(authorInfo);
  // postContainer.appendChild(postImageContainer);
  // postContainer.appendChild(postTitleElement);
  // postContainer.appendChild(postBodyElement);

  // Create the border bottom
  const borderBottom = document.createElement("div");
  borderBottom.setAttribute("aria-hidden", "true");
  borderBottom.className =
    "w-full border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 my-4";

  // Append all sections to the post container
  postContainer.appendChild(authorInfo);
  postContainer.appendChild(postLink); // The anchor wraps the main post content
  postContainer.appendChild(buttonContainerFull);

  // Append post container to the feed
  const container = document.querySelector(postsContainerId);
  container.appendChild(postContainer);
  container.appendChild(borderBottom);
};
