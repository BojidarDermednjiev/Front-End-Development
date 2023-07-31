const API_URL = `http://localhost:3030/jsonstore/blog/`;
let posts;
const output = {
  posts: document.querySelector(`#posts`),
};
function attachEvents() {
  document.querySelector(`#btnLoadPosts`).addEventListener(`click`, loadPosts);
  document
    .querySelector(`#btnViewPost`)
    .addEventListener(`click`, loadSinglePost);
}
async function loadPosts() {
  const currPosts = await (await fetch(`${API_URL}posts`)).json();
  posts = currPosts;
  Object.values(currPosts).forEach((post) => {
    const option = document.createElement(`option`);
    option.value = post.id;
    option.textContent = post.title;
    output.posts.appendChild(option);
  });
  document.getElementById("btnLoadPosts").disabled = true;
}
async function loadSinglePost() {
  const view = await (await fetch(`${API_URL}comments`)).json();
  const select = posts[output.posts.value];
  console.log(select);
  const comments = Object.values(view).filter((x) => x.postId === select.id);
  console.log(comments);
  const postTitle = document.querySelector(`#post-title`);
  const postBody = document.querySelector(`#post-body`);
  const postComments = document.querySelector(`#post-comments`);
  postComments.textContent = ``;
  postTitle.textContent = select.title;
  postBody.textContent = select.body;
  comments.forEach((comment) => {
    createElements(`li`, 0, comment.postId, comment.text, postComments);
  });
}
function createElements(type, classes, id, content, parent) {
  let element = document.createElement(type);
  if (content) {
    element.textContent = content;
  }
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute(`id`, id);
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

attachEvents();
