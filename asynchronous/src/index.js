import "./css/main.css";
import "./scss/main.scss";

const perPage = 10; //Change to see another users posts
const URL = "https://jsonplaceholder.typicode.com/";
const blog = document.getElementById("blog");

function getPostsApi() {
  return fetch(`${URL}posts?_limit=${perPage}`)
    .then((response) => response.json())
    .then((content) => {
      return content;
    });
}

function getUserApi(id) {
  return fetch(`${URL}users/${id}`)
    .then((response) => response.json())
    .then((content) => {
      return content;
    });
}

function postContent(content) {
  return content
    .map(
      (post) =>
        `<article class="post-content" id="postid-${post.id}">
            <h3 class="post-content__title">${post.title}</h3>
            <p class="post-content__body">${post.body}</p>
            <button class="user-link" data-userid="${post.userId}">User</button>
        </article>`
    )
    .join("");
}

function userContent(user) {
  return `<div class="user-info">
    <h3 class="user-info__name">${user.name}</h3>
    <h4 class="user-info__username">${user.username}</h4>
    <a class="user-info__link" href="mailto:${user.email}">${user.email}</a>
  </div>`;
}

async function getUserInfo(userId, elem) {
  let user = await getUserApi(userId);
  elem.innerHTML += userContent(user);
  elem.querySelector(".user-info").classList.add("added");
}

function getUser() {
  let userLinks = document.querySelectorAll(".user-link");

  if (userLinks) {
    userLinks.forEach((link) => {
      link.addEventListener("click", function () {
        let userId = this.dataset.userid;
        let parrent = this.parentElement;
        getUserInfo(userId, parrent);
      });
    });
  }
}

async function main() {
  try {
    const posts = await getPostsApi();
    blog.innerHTML = postContent(posts);
    getUser();
  } catch (error) {
    blog.innerHTML = "Oppps!";
  }
}

main();
