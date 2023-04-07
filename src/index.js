const API = "http://localhost:3000/";
const email = document.getElementById("email");
const names = document.getElementById("username");
const password = document.getElementById("password");

function match() {
  fetch(API + "users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let existName = data.find((e) => e.username === names.value);
      const existPass = data.find((e) => e.password === password.value);

      if (existName === undefined || existPass === undefined) {
        alert("invalid");
      } else {
        alert("Success");
        window.location.href = "index.html";
      }
    });
}

function register() {
  match();
}
