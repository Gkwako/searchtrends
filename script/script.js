
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


console.log(" carousel ");

$(".carousel").owlCarousel({
	margin: 20,
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsive: {
	  0:{
		items:1,
		nav: false
	  },
	  600:{
		items:2,
		nav: false
	  },
	  1000:{
		items:3,
		nav: false
	  }
	}
  });