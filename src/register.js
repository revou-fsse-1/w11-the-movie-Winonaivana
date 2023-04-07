const API = "http://localhost:3000/";
const email = document.getElementById("email");
const names = document.getElementById("username");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm-password");
const loginbtn = document.getElementById("loginbtn");

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData) || [{ name: "hello", password: "hello" }];
localStorage.setItem("users", JSON.stringify(users));

function addUser() {
  fetch(API + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: names.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function match() {
  fetch(API + "users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let existEmail = data.find((e) => e.email === email.value);
      let existName = data.find((e) => e.username === names.value);

      if (existEmail !== undefined || existName !== undefined) {
        alert("email or username already exist");
        location.reload();
      } else if (names.value == 0 || email.value == 0) {
        alert("Fill in all fields");
      } else if (password.value !== confirm.value) {
        alert("Password does not match");
      } else if (password.value == 0) {
        alert("Fill in password");
      } else {
        alert("Success");
        window.location.href = "index.html";
        addUser();
        users.push({
          name: names.value,
          password: password.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
      }
    });
}

function register(event) {
  event.preventDefault();
  match();
}

function login(event) {
  event.preventDefault();
  window.location.href = "index.html";
}
