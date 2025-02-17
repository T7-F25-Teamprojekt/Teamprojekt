const container = document.querySelector(".indexgrid_1");

fetch(`https://dummyjson.com/recipes`)
  .then((response) => response.json())
  .then((data) => showlist(data));

function showlist(ellement) {
  console.log(ellement);
  let markup = ellement
    .map((ellement) => {
      return ` <div>
                    <img src=""https://cdn.dummyjson.com/recipe-images/${ellement.id}.webp"" alt="catogori">  
                    

                    <div>
                    <h3>${ellement.mealType}</h3>
                    </div>
                </div>`;
    })
    .join("");

  container.innerHTML = markup;
}
