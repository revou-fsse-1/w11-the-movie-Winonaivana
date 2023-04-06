const API = "http://localhost:3000/";

const watchlist = document.getElementById("watchlist-grid");

let output = "";

const showList = (movies) => {
  movies.forEach((movie) => {
    output += `
        <div class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden">
        <img class="w-[100%] object-cover h-[235px] rounded-[20px]" src="${movie.image}">
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
