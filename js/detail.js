import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productUrl = baseUrl + "the-world-maps/" + id;

if (!id) {
    document.location.href = "/"
}

(async function () {
  const container = document.querySelector(".detail-container");
  container.innerHTML = "";
  try {
    const response = await fetch(productUrl);
      const json = await response.json();
      document.title = json.country
    container.innerHTML =   `<div class= "product">
                            <h3>Name: ${json.country}</h3>
                            <p>Code: 00${json.code}</p>
                            <p>Capital: ${json.capital}</p>
                            </div>`;

  } catch (error) {
    displayMessage("warning", error, ".detail-container");
  }
})();
