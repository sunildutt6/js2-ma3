import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";

const mapUrl = baseUrl + "the-world-maps";
createMenu();

(async function () {
  const container = document.querySelector(".product-container");
  try {
    const response = await fetch(mapUrl);
    const json = await response.json();
    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<a class="product" href = "detail.html?id=${product.id}">
                <h4>Name:${product.country}</h4>
                <p>Code: 00${product.code}</p>
                <p>Capital: ${product.capital}</p>
            </a>`;
    });
  } catch (error) {
    displayMessage("success", error, ".product-container");
  }
})();
