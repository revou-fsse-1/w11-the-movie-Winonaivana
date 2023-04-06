let movieId = localStorage.getItem("id");
const API = `http://localhost:3000/movies/${movieId}`;
const showDetails = document.getElementById("showDetails");
const image = document.getElementById("image");
const summary = document.getElementById("summary");
const genre = document.getElementById("genre");
const rating = document.getElementById("rating");
const trailer = document.getElementById("trailer");

const title = document.getElementById("movieTitle");

fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    title.innerHTML = `
    ${data.title}
    `;
  });

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
  });
