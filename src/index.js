const API = "http://localhost:3000/";

const names = document.getElementById("username");
const password = document.getElementById("password");

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData) || [{ name: "hello", password: "hello" }];
localStorage.setItem("users", JSON.stringify(users));

function checkAPI() {}

function match() {
  const checkName = users.find(
    (a) => a.name === names.value && a.password === password.value
  );
  if (checkName) {
    window.location.href = "home.html";
    alert("success");
  } else {
    alert("Invalid");
  }
}

function login() {
  match();
}
