const API = "http://localhost:3000/";
const grid1 = document.getElementById("currently-grid");
const grid2 = document.getElementById("suggested-grid");
const grid3 = document.getElementById("previously-grid");
const searchBar = document.getElementById("searchBar");
const body = document.getElementById("body");
const grid4 = document.getElementById("movies-grid");

const logged = localStorage.getItem("isLoggedin");
const loggedData = JSON.parse(logged);

if (loggedData === false) {
  window.location.href = "index.html";
}
function displaySearch() {
  searchBar.classList.remove("hidden");
}

body.addEventListener("click", removeSearch);

function removeSearch() {
  searchBar.classList.add("hidden");
}
function watchlist() {
  window.location.href = "watchlist.html";
}

let output1 = "";
let output2 = "";
let output3 = "";
let output4 = "";

const showCurrently = (movies) => {
  movies.forEach((movie) => {
    output1 += `
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
  grid1.innerHTML = output1;
};

const showSuggested = (movies) => {
  movies.forEach((movie) => {
    output2 += `
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
  grid2.innerHTML = output2;
};

const showPreviously = (movies) => {
  movies.forEach((movie) => {
    output3 += `
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
  grid3.innerHTML = output3;
};
const showAvailableMovies = (movies) => {
  movies.forEach((movie) => {
    output4 += `
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
  grid4.innerHTML = output4;
};

fetch(API + "currentWatch")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showCurrently(data);
  });

fetch(API + "isSuggested")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showSuggested(data);
  });

fetch(API + "isPrevious")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showPreviously(data);
  });

fetch(API + "movies")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showAvailableMovies(data);
  });
//let showDetails = (e) => {
//  let id = e.getAttribute("id");
//  console.log(`${id}`);
//};

grid1.addEventListener("click", (e) => {
  let id = e.target.id;
  localStorage.setItem("id", `${id}`);
  window.location.href = "movie.html";
});

grid2.addEventListener("click", (e) => {
  let id = e.target.id;
  localStorage.setItem("id", `${id}`);
  window.location.href = "movie.html";
});

grid3.addEventListener("click", (e) => {
  let id = e.target.id;
  localStorage.setItem("id", `${id}`);
  window.location.href = "movie.html";
});

function showWatchlist() {
  window.location.href = "watchlist.html";
}

const searchMovie = document.getElementById("searchMovies");
const currently = document.getElementById("Currently");
currently.classList.remove("hidden");

searchBar.addEventListener("submit", function (e) {
  e.preventDefault();
});
