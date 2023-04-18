const API = `http://localhost:3000/watchlist`;

const watchlist = document.getElementById("watchlist-grid");
const row = document.getElementById("row");
const homebtn = document.getElementById("body");
let output = "";

watchlist.classList.remove("hidden");

function relocate() {
  window.location.href = "home.html";
}

homebtn.addEventListener("click", relocate);

const showMovies = (movies) => {
  movies.forEach((movie) => {
    output += `
      <div class="w-[130px] h-[200px] lg:min-w-[155px] lg:min-h-[227px] md:min-w-[155px] md:min-h-[227px]   rounded-[20px] relative overflow-hidden">
        <img class="w-[100%] object-cover h-[200px] lg:h-[227px] md:h-[227px] rounded-[20px] " src="${movie.image}">
        <p
      class="w-[100%] h-[100%] absolute  text-white/0 hover:text-white text-md font-bold top-0 flex justify-center items-center hover:bg-black/50   "
      id =${movie.id}
      "
      >
      ${movie.rating}
    </p>
        </div>
        `;
  });
  watchlist.innerHTML = output;
};

function displayMovie() {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showMovies(data);
    });

  watchlist.addEventListener("click", (e) => {
    let id = e.target.id;
    localStorage.setItem("id", `${id}`);
    window.location.href = "movie.html";
  });
}

function checkEmpty() {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.length < 1) {
        row.innerHTML = `
        <div>"Your watchlist is empty. Start adding movies now!"</div>
        `;
      } else {
        displayMovie();
      }
    });
}

checkEmpty();

function home() {
  window.location.href = "home.html";
}

const logged = localStorage.getItem("isLoggedin");
const loggedData = JSON.parse(logged);

if (loggedData === false) {
  window.location.href = "index.html";
}

const searchWatchlist = document.getElementById("watchlistSearch");
const grid5 = document.getElementById("search-grid");
const texts = document.getElementById("text");
let output5 = "";

function showResult(event) {
  event.preventDefault();

  const value = searchWatchlist.value.toLowerCase();
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (value.length < 2) {
        grid5.innerHTML = "";
        grid5.classList.add("hidden");
        texts.classList.add("hidden");
      } else {
        grid5.innerHTML = "";
        grid5.classList.remove("hidden");
        texts.classList.remove("hidden");
        data.forEach((movie) => {
          const title = movie.title.toLowerCase();

          if (title.includes(value)) {
            output5 = `
            
            <div class="w-[130px] h-[200px] lg:min-w-[155px] lg:min-h-[227px] md:min-w-[155px] md:min-h-[227px]   rounded-[20px] relative overflow-hidden">
        <img class="w-[100%] object-cover h-[200px] lg:h-[227px] md:h-[227px] rounded-[20px] " src="${movie.image}">
        <p
      class="w-[100%] h-[100%] absolute  text-white/0 hover:text-white text-md font-bold top-0 flex justify-center items-center hover:bg-black/50   "
      id =${movie.id}
      "
      >
      ${movie.rating}
    </p>
        </div>

            `;

            grid5.innerHTML += output5;
          }
        });
      }
    });
}

const searchWatchlist2 = document.getElementById("watchlistSearch2");

function showResult2(event) {
  event.preventDefault();

  const value = searchWatchlist2.value.toLowerCase();
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (value.length < 2) {
        grid5.innerHTML = "";
        grid5.classList.add("hidden");
        texts.classList.add("hidden");
      } else {
        grid5.innerHTML = "";
        grid5.classList.remove("hidden");
        texts.classList.remove("hidden");
        data.forEach((movie) => {
          const title = movie.title.toLowerCase();

          if (title.includes(value)) {
            output5 = `
            
            <div class="w-[130px] h-[200px] lg:min-w-[155px] lg:min-h-[227px] md:min-w-[155px] md:min-h-[227px]   rounded-[20px] relative overflow-hidden">
        <img class="w-[100%] object-cover h-[200px] lg:h-[227px] md:h-[227px] rounded-[20px] " src="${movie.image}">
        <p
      class="w-[100%] h-[100%] absolute  text-white/0 hover:text-white text-md font-bold top-0 flex justify-center items-center hover:bg-black/50   "
      id =${movie.id}
      "
      >
      ${movie.rating}
    </p>
        </div>

            `;

            grid5.innerHTML += output5;
          }
        });
      }
    });
}
