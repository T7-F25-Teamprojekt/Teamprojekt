console.log("produkt.js bliver indlæst!");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myProductId = urlParams.get("id");

const mealType = urlParams.get("mealType");
const names = urlParams.get("name");

// mealtype breadcrumb
const mealtypebreadcrumb = document.querySelector("#mealtypebreadcrumb");
mealtypebreadcrumb.textContent = mealType;

// name breadcrumb
const namebreadcrumb = document.querySelector("#namebreadcrumb");
namebreadcrumb.textContent = names;

let productContainer = document.querySelector(".container");

fetch(`https://dummyjson.com/recipes/${myProductId}`)
  .then((response) => response.json())
  .then((element) => {
    productContainer.innerHTML = `   
        <h1>${element.name}</h1>

    <div class="produkt">


         <div>
            <img class="produkt_img" src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" alt="Billede">
        </div>

        <div>
            <p>Cuisine: ${element.cuisine}</p>
            <p>Meal type: ${element.mealType}</p>
            <p>Calories Pr. Serving: ${element.caloriesPerServing}</p>
            <p>Difficulty: ${element.difficulty}</p>
            <p>Rating: ${element.rating}</p>
        </div>

    </div>

    <div class="info">
        <div>
            <p>${element.prepTimeMinutes} <span><img class="ikon" src="ikoner/ur.svg" alt="ur"></span></p>

        </div>

        <div>
            <p>${element.servings} <span><img class="ikon" src="ikoner/peroner.svg" alt="personer"></span></p>

        </div>

        <div>
            <p>${element.cookTimeMinutes} <span><img class="ikon" src="ikoner/ur.svg" alt="ur"></span></p>

        </div>
    </div>

    <div class="instructions">
        <div class="lys_firkant">
            <h2>Ingredients</h2>
            <p>${element.ingredients}</p>
        </div>

        <div class="mørk_firkant">
            <h2>instructions</h2>
            <p>${element.instructions}</p>
        </div>

    </div>
`;
  });
