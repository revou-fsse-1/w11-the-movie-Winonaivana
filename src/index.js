const API = "http://localhost:3000/";

const names = document.getElementById("username");
const password = document.getElementById("password");

function match() {
  fetch(API + "users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let user = data.find((e) => e.username === names.value);

      if (user.username !== undefined || user.password !== undefined) {
        alert("invalid");
      }
    });
}

function login(event) {
  event.preventDefault();
  match();
}
