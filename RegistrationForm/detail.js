let fullname = document.querySelector(".name");
let gender = document.querySelector(".gender");
let dob = document.querySelector(".dob");
let email = document.querySelector(".email");
let mobile= document.querySelector(".mobile");
let country = document.querySelector(".country");
let city = document.querySelector(".city");
let state = document.querySelector(".state");
let address = document.querySelector(".address");
let pincode = document.querySelector(".pincode");

insertValues();

function insertValues() {
    fullname.innerText = localStorage.getItem("fname") + ' ' + localStorage.getItem("mname") + ' ' +localStorage.getItem("lname");
    gender.innerText = localStorage.getItem("gender");
    dob.innerText = localStorage.getItem("date");
    email.innerText = localStorage.getItem("email");
    mobile.innerText = localStorage.getItem("mobile");
    city.innerText = localStorage.getItem("city") + ', ' + localStorage.getItem("state") + ', ' + localStorage.getItem("country");
    address.innerText = localStorage.getItem("address");
    pincode.innerText = localStorage.getItem("pincode");
}

document.querySelector("#back").addEventListener('click', function () {
    localStorage.clear();
    window.location.href = "main.html";
});
