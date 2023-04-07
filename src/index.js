const API = "http://localhost:3000/";

const names = document.getElementById("username");
const password = document.getElementById("password");

function match() {
  fetch(API + "users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let user = data.find(
        (e) => e.username === names.value && e.password === password.value
      );
      console.log(user);
      if (user === undefined) {
        alert("invalid");
        localStorage.setItem("isLoggedin", false);
      } else {
        alert("Success");
        localStorage.setItem("isLoggedin", true);
        window.location.href = "home.html";
      }
    });
}

function login(event) {
  event.preventDefault();
  match();
}

function register() {
  window.location.href = "register.html";
}
