import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;
  const username = getUsername();
  console.log(username);

  let authLink = `<a href= "login.html" class = "${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;
  if (username) {
    authLink = `<button id = "logout">Logout ${username}</button>`;
  }

  const menu = document.querySelector(".menu-container");

  menu.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container menu">
    <a href="/" class="navbar-brand ${
      pathname === "/" ? "active" : ""
    }">Home</a> 
    ${authLink}
    </div>
</nav>`;
  logoutButton();
}
