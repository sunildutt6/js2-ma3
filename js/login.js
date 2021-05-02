import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import createMenu from "./components/common/createMenu.js";

const form = document.querySelector("form");
const message = document.querySelector(".message-container");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

createMenu();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage(
      "warning",
      "Please submit proper values",
      ".message-container"
    );
  }
  doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    console.log(json.error);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);
      location.href = "/";
    }
    if (json.error) {
      displayMessage(
        "error",
        "Identifier or password invalid.",
        ".message-container"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
