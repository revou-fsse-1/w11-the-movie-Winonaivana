let movieId = localStorage.getItem("id");
const API = `http://localhost:3000/movies/${movieId}`;
const showDetails = document.getElementById("showDetails");
const image = document.getElementById("image");
const summary = document.getElementById("summary");
const genre = document.getElementById("genre");
const rating = document.getElementById("rating");
const trailer = document.getElementById("trailer");
const btn = document.getElementById("addWatchlist");
const remove = document.getElementById("removeWatchlist");

const title = document.getElementById("movieTitle");

fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    title.innerHTML = `
    ${data.title}
    `;
  })
  .catch((error) => console.log(error));

fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    image.innerHTML = `
    <img class="w-[100%] object-cover h-[200px] lg:h-[280px] md:h-[280px] rounded-[20px]"
            src="${data.image}"/>
            `;
    summary.innerHTML = `
    ${data.synopsis}
            `;

    for (let i = 0; i < data.genre.length; i++) {
      genre.innerHTML += `
        <h5
                class="w-[80px] flex justify-center border border-black rounded-full mr-4"
              >${data.genre[i]}</h5>
        `;
    }
    rating.innerHTML = `⭐${data.rating}/10`;
    trailer.innerHTML = `<embed
            class="rounded-[20px] aspect-video w-[100%] h-[280px]"
            src="${data.trailer}"
          />`;
  })
  .catch((error) => console.log(error));

const loadToLocalStorage = () => {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("movieTitle", `${data.title}`); //title
      localStorage.setItem("movieImage", `${data.image}`); //image
      localStorage.setItem("movieSynopsis", `${data.synopsis}`); //synopsis
      localStorage.setItem("movieGenre", `${data.genre}`); //genre
      localStorage.setItem("movieProduction", `${data.production}`);
      localStorage.setItem("movieTrailer", `${data.trailer}`); //trailer
      localStorage.setItem("movieRating", `${data.rating}`); //rating
      localStorage.setItem("movieYear", `${data.year}`); //year
    });
};
loadToLocalStorage();

function addMovie() {
  fetch("http://localhost:3000/watchlist", {
    method: "POST",
    body: JSON.stringify({
      id: movieId,
      title: localStorage.getItem("movieTitle"),
      image: localStorage.getItem("movieImage"),
      synopsis: localStorage.getItem("movieSynopsis"),
      genre: localStorage.getItem("movieGenre"),
      production: localStorage.getItem("movieProduction"),
      trailer: localStorage.getItem("movieTrailer"),
      rating: localStorage.getItem("movieRating"),
      year: localStorage.getItem("movieYear"),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data));
}

let APIid = `http://localhost:3000/watchlist?id=${movieId}`;

function addToWatchlist() {
  fetch(APIid)
    .then((response) => response.json())
    .then((data) => {
      if (data.length < 1) {
        alert("Movie added to watchlist");
        addMovie();
      } else {
        alert("Movie already added to watchlist");
      }
    });
}

function showRemove() {
  fetch(APIid)
    .then((response) => response.json())
    .then((data) => {
      if (data.length < 1) {
        remove.classList.add("hidden");
      } else {
        remove.classList.remove("hidden");
      }
    });
}

showRemove();

function removeWatchlist() {
  fetch(`http://localhost:3000/watchlist/${movieId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function goToWatchlist() {
  window.location.href = "watchlist.html";
}

const logged = localStorage.getItem("isLoggedin");
const loggedData = JSON.parse(logged);

if (loggedData === false) {
  window.location.href = "index.html";
}
