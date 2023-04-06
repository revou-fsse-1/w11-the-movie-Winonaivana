const API = "http://localhost:3000/";
const email = document.getElementById("email");
const names = document.getElementById("username");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm-password");

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

      if (existEmail !== undefined) {
        alert("email already exist");
        location.reload();
      } else if (existName !== undefined) {
        alert("name already exist");
        location.reload();
      } else if (names.value == 0) {
        alert("Fill in username");
      } else if (email.value == 0) {
        alert("Fill in email");
      } else if (password.value == 0) {
        alert("Fill in password");
      } else if (password.value !== confirm.value) {
        alert("Password does not match");
      } else {
        addUser();
        alert("Success");
      }
    });
}

function register() {
  match();
}
