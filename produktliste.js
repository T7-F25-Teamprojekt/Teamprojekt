const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mealType = urlParams.get("mealType");

// mealtype heading
const mealtypeheading = document.querySelector("#mealtypeheading");
mealtypeheading.textContent = mealType;

// mealtype breadcrumb

// recipie list

let productContainer = document.querySelector(".container");

fetch(`https://dummyjson.com/recipes`)
  // https://kea-alt-del.dk/t7/api/products/${productId} billeder
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data.recipes
    .map(
      (element) => `
         <article class="produktliste">
            <div class="box">
                <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" alt="madbilleder">
                <h3>${element.name}</h3>
                <p>Prep Time: ${element.prepTimeMinutes} min</p>

                <div class="flex">
                    <div>
                        <p>Cook Time: ${element.cookTimeMinutes} min</p>
                    </div>
                    <div class="rating">
                        <p>${element.rating}/5.0</p>
                        <img class="stjerne" src="ikoner/star.svg" alt="stjerne_ratings">
                    </div>
                    
                </div>
                    <a href="produkt.html?id=${element.id}">Read More</a>
            </div>

            </div>
        </article>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
