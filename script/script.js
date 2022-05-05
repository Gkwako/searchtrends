
console.log(" hamburger menu ");

var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItem");
var hamburger= document.querySelector(".ham");

let open = 0;

function toggleMenu() {
  if (open == 0) {
    open = 1; 
    document.getElementById("menu").style.display = "none";
    hamburger.classList.remove('active');
    console.log(" close ");

  } else {
    open = 0;
    document.getElementById("menu").style.display = "unset";
    hamburger.classList.add('active');
    console.log(" open ");
  }
}
hamburger.addEventListener("click", toggleMenu);

