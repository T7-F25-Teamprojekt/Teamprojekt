const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mealType = urlParams.get("mealType");

// mealtype heading
const mealtypeheading = document.querySelector("#mealtypeheading");
mealtypeheading.textContent = mealType;

// mealtype breadcrumb
const mealtypebreadcrumb = document.querySelector("#mealtypebreadcrumb");
mealtypebreadcrumb.textContent = mealType;

// recipie list

let productContainer = document.querySelector(".container");

fetch(`https://dummyjson.com/recipes/meal-type/${mealType}`)
  // https://kea-alt-del.dk/t7/api/products/${productId} billeder
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data.recipes
    .map(
      (element) => `
         <article class="box">
          
                <div class="billede_kasse">
                    <a href="produkt.html?id=${element.id}">
                        <img class="billede" src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" alt="madbilleder">
                    </a>
                </div>
                
                <a href="produkt.html?id=${element.id}">
                    <h3>${element.name}</h3>
                 </a>

                <a href="produkt.html?id=${element.id}">
                    <p class="p_tekst">Prep Time: ${element.prepTimeMinutes} min</p>
                 </a>

                <div class="flex">
                    <div>
                        <a href="produkt.html?id=${element.id}">
                            <p class="p_tekst_2">Cook Time: ${element.cookTimeMinutes} min</p>
                        </a>    
                    </div>
                    
                    <div class="rating">
                        <a href="produkt.html?id=${element.id}">
                            <p class="p_tekst_2">${element.rating}/5.0</p>
                        </a>
                        <img class="stjerne" src="ikoner/star.svg" alt="stjerne_ratings">
                    </div>
                </div>

                <a class="readmore" href="produkt.html?id=${element.id}">Go to recipe</a>


        </article>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
