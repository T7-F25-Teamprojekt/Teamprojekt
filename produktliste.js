const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myElement = urlParams.get("id");

let elementId = myElement;
let container = document.querySelector(".container");

fetch(`https://dummyjson.com/recipes/`)
  .then((response) => response.json())
  .then((data) => showElement(data));

function showElement(data) {
  container.innerHTML = `
        <article class="produktliste">
            <h1>${element.mealtype}</h1>
            <nav>
                <ul class="breadcrumb">
                    <li><a href="index.html">Home</a> > </li>
                    <li><a href="index.html"> Categories</a> > </li>
                    <li><a href="index.html"> Meal Types</a> > </li>
                    <li><a href="produktliste.html">${element.mealtype}</a></li>
                </ul>
            </nav>

            <h2>Get inspired for lunch with tasty recipes</h2>

            <div class="box">
                <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" alt="madbilleder">
                <h3>${element.name}</h3>
                <p>Prep Time: ${element.prepTimeMinutes} min</p>

                <div class="flex">
                    <div>
                        <p>Cook Time: ${element.cookTimeMinutes} min</p>
                    </div>
                    <div class="flex">
                        <p>${element.rating}/5.0</p>
                        <img src="ikoner/star.svg" alt="stjerne_ratings">
                    </div>
                </div>
            </div>
        </article>
    `;
}
