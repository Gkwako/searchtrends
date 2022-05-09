
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


class Carousel {
	constructor() {
		this.jscaroParent = document.getElementsByClassName('js-caroParent');
		this.jscarousel = document.getElementsByClassName('js-carousel');
		this.jstrack = document.getElementsByClassName('js-track');
		this.jsslide = document.getElementsByClassName('js-slide');
		this.jsarrow = document.getElementsByClassName('js-arrow');
		this.pushwdarray = [];
		this.assinchwidth = 0;
	}

	initSelectors() {
	}

	initEvents() {
		for (let i = 0; i < this.jsarrow.length; i++) {
			this.jsarrow[i].addEventListener('click', (e) => {
				this.arrowAction(e);
			});
		}
	}

	initCarousel() {
		const getParent = this.jscaroParent;
		const getCarousel = this.jscarousel;
		const getSlide = this.jsslide;
		let getParentwd = 0;
		for (var i = 0; i < getSlide.length; i++) {
			getParentwd += getSlide[i].clientWidth;
			this.pushwdarray.push(getSlide[i].clientWidth);
			getSlide[0].classList.add('active-slide');
		}
		getSlide[0].parentElement.setAttribute('style', `width:${getParentwd}px;transform:translateX(0);`);
	}

	arrowAction(e) {
		const tarparent = e.target.offsetParent.children[0].children[0].children;
		if(e.target.classList.contains('next')){
			const allchild = tarparent[0].children;
			let i;
			let getindex;
			let getindexwd;
			for(i = 0; i < allchild.length; i++){
				if(allchild[i].classList.contains('active-slide')){
					getindex = i;
					if((i+2) === allchild.length){
						e.target.classList.add('disable');
					} else {
						e.target.classList.remove('disable');
					}
					if(allchild[i].nextElementSibling === null){
						getindexwd = 0;
					} else {
						getindexwd = allchild[i].clientWidth;
						allchild[i].classList.add('prev-slide');
						allchild[i].classList.remove('active-slide');
					}
					console.log(allchild);
					// if(allchild[i].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling === null){
					// 	getindexwd = 0;
					// }
				}
			}
			this.assinchwidth += getindexwd;
			if(allchild[getindex].nextElementSibling){
				allchild[getindex].nextElementSibling.classList.add('active-slide');
			}
			tarparent[0].style.transform = `translateX(-${this.assinchwidth}px)`;
			e.target.previousElementSibling.classList.remove('disable');
		} else if(e.target.classList.contains('prev')) {
			const allchild = tarparent[0].children;
			let i;
			let getindex;
			let getindexwd;
			for(i = 0; i < allchild.length; i++){
				if(allchild[i].classList.contains('active-slide')){
					if(allchild[i].previousElementSibling.previousElementSibling === null){
						e.target.classList.add('disable');
					}
					getindex = i;
					getindexwd = allchild[i].previousElementSibling.clientWidth;
					allchild[i].classList.remove('active-slide');
				}
			}
			this.assinchwidth -= getindexwd;
			allchild[getindex].previousElementSibling.classList.remove('prev-slide');
			allchild[getindex].previousElementSibling.classList.add('active-slide');
			tarparent[0].style.transform = `translateX(-${this.assinchwidth}px)`;
			e.target.nextElementSibling.classList.remove('disable');
		}
	}

	init() {
		this.initSelectors();
		this.initEvents();
		this.initCarousel();
	}
}

// export default Carousel;

let Mycarousel = new Carousel();
Mycarousel.init();

