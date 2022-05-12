
// HAMBURGER MENU -----
console.log(" hamburger menu ");

var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItem");
var hamburger = document.querySelector(".ham");

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



// CAROUSEL -----
console.log(" carousel ");

$(".carousel").owlCarousel({
	margin: 20,
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: false
		}
	}
});


// GOOGLE MAPS -----
console.log(" map ");

var map = L.map('map').setView([52.468040, 4.834620], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.468040, 4.834620]).addTo(map)
	.bindPopup('BeautyFit Zaandam')
	.openPopup();
