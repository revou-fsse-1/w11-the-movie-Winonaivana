const API = "http://localhost:3000/";

const watchlist = document.getElementById("watchlist-grid");

let output = "";

const showList = (movies) => {
  movies.forEach((movie) => {
    output += `
        <div class="w-[130px] h-[200px] lg:min-w-[155px] lg:min-h-[227px] md:min-w-[155px] md:min-h-[227px]   rounded-[20px] relative overflow-hidden">
        <img class="w-[100%] object-cover h-[200px] lg:h-[227px] md:h-[227px] rounded-[20px]" src="${movie.image}">
        </div>
        `;
  });
  watchlist.innerHTML = output;
};

fetch(API + "movies")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showList(data);
  });
