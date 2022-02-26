let userFirstName = document.getElementById("fname");
let userLastName = document.getElementById("lname");
let userEmail = document.getElementById("email");
let text = document.getElementById("text");
let form = document.getElementById("form");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function checkIfEmpty() {
  if (
    userFirstName.value === "" ||
    userLastName.value === "" ||
    userEmail.value === ""
  ) {
    alert("Please fill the form properly (Firstname, lastname, email)");
  }
}

function emailValidation() {
  if (userEmail.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is valid";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
  }
  if (userEmail.value === "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}
