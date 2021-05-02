import { clearStorage } from "../../utils/storage.js";
export default function logoutButton() {
  const button = document.querySelector("#logout");
  if (button) {
    button.addEventListener("click", function () {
      const doLogout = confirm("Are You Sure?");
      if (doLogout) {
        clearStorage();
        location.href = "/";
      }
    });
  }
}
