
// HAMBURGER MENU -----
console.log(" hamburger menu ");

var hamburgerMenu = document.querySelector(".menu");

var menuButton = document.querySelector(".icon");

var linkclose = document.querySelector(".menu a");


menuButton.addEventListener("click", toggleHamburgerMenu);



function toggleHamburgerMenu(){
	hamburgerMenu.classList.toggle('visible');
}

menuButton.addEventListener("click", toggleHamburgerMenu);



// a IN HAMBURGER MENU TOGGLE IN PAGINA -----
$( '.menu a' ).on("click", function(){
	$('button').click();
	$('.ham').click();
	console.log(" menu gone");

});


 

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
