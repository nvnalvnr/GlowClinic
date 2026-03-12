document.addEventListener("DOMContentLoaded", function(){

fetch("components/navbar.html")

.then(response => response.text())

.then(data => {

document.getElementById("navbar-container").innerHTML = data;

initNavbar();

});

});

function initNavbar(){

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

if(!burger || !nav) return;

burger.addEventListener("click", () =>{

nav.classList.toggle("active");
burger.classList.toggle("toggle");

});

}
