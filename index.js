import { renderPosts } from "./posts.js";

// Object containing posts to be rendered
const posts = [
  {
    id: 1,
    name: "OBINS",
    username: "60PercentHeaven",
    location: "Shenzhen, China",
    avatar: "/images/avatars/anne-pro.avif",
    post: "/images/posts/anne-pro-2.avif",
    alt: "Dummy alt-text to be modified in a later version of page.",
    comment: "Can't go wrong with Cherry MX Browns 🙌 #60PercentClub",
    likes: 50,
  },
  {
    id: 2,
    name: "Ducky",
    username: "QuackAttack",
    location: "Taipei, Taiwan",
    avatar: "/images/avatars/ducky.png",
    post: "/images/posts/ducky-one.jpeg",
    alt: "Dummy alt-text to be modified in a later version of page.",
    comment: "Love the RGB on this board 🌈💻 #MechanicalKeyboard",
    likes: 128,
  },
  {
    id: 3,
    name: "Keychron",
    username: "TheWirelessLife",
    location: "Taipei, Taiwan",
    avatar: "/images/avatars/keychron.png",
    post: "/images/posts/k6.webp",
    alt: "Dummy alt-text to be modified in a later version of page.",
    comment: "Finally went wireless and I'm never going back 🙌 #KeychronK6",
    likes: 89,
  },
  {
    id: 4,
    name: "GMK",
    username: "LaserLightShow",
    location: "Toronto, Canada",
    avatar: "/images/avatars/gmk.png",
    post: "/images/posts/gmk-laser.webp",
    alt: "Dummy alt-text to be modified in a later version of page.",
    comment: "Keycaps as bright as my future 🔥 #GMKLaser",
    likes: 72,
  },
  {
    id: 5,
    name: "HHKB",
    username: "Topre4Life",
    location: "Tokyo, Japan",
    avatar: "/images/avatars/hhkb.png",
    post: "/images/posts/hhkb.jpeg",
    alt: "Dummy alt-text to be modified in a later version of page.",
    comment: "Nothing beats the Topre feel 🌟 #HHKB",
    likes: 100,
  },
];

// Select the container where you want to insert posts
const postFeed = document.querySelector("main");

// Function to render the entire feed
function generateFeed(posts) {
  let postsHTML = "";
  for (let i = 0; i < posts.length; i++) {
    postsHTML += renderPosts(posts[i]);
  }
  postFeed.innerHTML += postsHTML;
}

generateFeed(posts);

const actionHandlers = {
  like: function (button, userPost) {
    const likeSpan = userPost.querySelector(".like-count");
    const postId = parseInt(button.dataset.postId);
    const post = posts.find((post) => post.id === postId);
    const icon = button.querySelector("i");
    let isLiked = button.dataset.liked === "1";

    if (!isLiked) {
      post.likes += 1;
      button.dataset.liked = "1";
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.classList.add("red");
    } else {
      post.likes -= 1;
      button.dataset.liked = "0";
      icon.classList.remove("fa-solid");
      icon.classList.remove("red");
      icon.classList.add("fa-regular");
    }
    likeSpan.textContent = `${post.likes}`;
  },
};

document.querySelector("main").addEventListener("click", function (event) {
  // If a button is clicked, retreive the data-action from it
  const clickedButton = event.target.closest("button[data-action]");
  console.log(clickedButton);

  // Handles cases where nothing is clicked, I guess this is necessary as the event listener is actively searching for clicks on the entire feed
  if (!clickedButton) return;

  // Assigns the appropriate action, which is retrieved from the dataset, to the action variable
  const action = clickedButton.dataset.action;
  console.log(action);
  // Creates a link to the container for the current post
  const userPost = clickedButton.closest(".user-post");

  const actionHandler = actionHandlers[action];

  if (actionHandler) {
    actionHandler(clickedButton, userPost);
  }
});
