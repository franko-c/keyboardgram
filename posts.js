// DOM elements in the order that they are rendered
// Create header element
export function createHeader(post) {
  return `
		<div class="post-header">
				<img src="${post.avatar}" 
				alt="Example alt-text, need to fix this before               posting, lol.">
				<div class="post-details">
					 <h5>${post.name}</h5>
					 <p>${post.location}</p>
				</div>
		  </div>
	`;
}

// Create main post content (image)
export function createMain(post) {
  return `   
		  <div class="post-main">
				<img 
				src="${post.post}" 
				alt="${post.alt}">
		  </div>
		  `;
}

// Create button elements
export function createPostButtons(post) {
  return `
		  <div class='post-buttons'>
				<button data-liked='0' class='like clear' data-action='like' data-post-id='${post.id}'><i class="fa-regular fa-heart"></i></button>
				<button class='comment clear' data-action='comment' data-post-id='${post.id}'><i class="fa-regular fa-comment"></i></button>
				<button class='share clear' data-action='share' data-post-id='${post.id}'><i class="fa-sharp fa-regular fa-paper-plane"></i></button>
			 </div>
	 `;
}

// Create post 'likes' element
export function createLikes(post) {
  return `
		  <div class="post-likes">
		  <p class='like-count'>${post.likes}</p>
		  <p>likes</p>
		  </div>
	 `;
}

// Create user comment section
export function createComment(post) {
  return `
		  <div class="post-user-comment">
				<p>${post.username}</p>
				<p>${post.comment}</p>
		  </div>
	 `;
}

// Assemble the complete post
export function renderPosts(post) {
  return `
	 <section>
		<div class='user-post'>
		${createHeader(post)}
		${createMain(post)}
		${createPostButtons(post)}
		${createLikes(post)}
		${createComment(post)}
		</div>
  `;
}
