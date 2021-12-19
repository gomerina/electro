const slider = document.querySelector('.advantages__box');
let mobileSwiper;
function mobSwiper() {
	if (window.innerWidth <= 1023 && slider.dataset.mobile == 'false'){
		mobileSwiper = new Swiper(slider, {
			slidesPerGroup: 1,
			loop: false,
			slideClass: 'advantages__item',
			spaceBetween: 20,
			initialSlide: 0,
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				450: {
					slidesPerView: 2,
				},
				766: {
					slidesPerView: 3,
				},
			},
		});
		slider.dataset.mobile = 'true';
	};
	if (window.innerWidth > 1023) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')){
			mobileSwiper.destroy();
		}
	}
};
mobSwiper();
swap();
window.addEventListener('resize', () => {
	mobSwiper();
	swap();
});
let nameInput = document.querySelector('.fio');
let nameLabel = document.querySelector('.fio-label');
let phoneInput = document.querySelector('.phone');
let phoneLabel = document.querySelector('.phone-label');
let formTextarea = document.querySelector('.contacts__textarea');
let textareaLabel = document.querySelector('.textarea-label');
nameInput.addEventListener('click',function(){
	nameLabel.classList.add('active');
});
phoneInput.addEventListener('click',function(){
	phoneLabel.classList.add('active');
});
formTextarea.addEventListener('click',function(){
	textareaLabel.classList.add('active');
});

function swap() {
	let headerSearch = document.querySelector('.header__search');
	let headerSearchBox = document.querySelector('.header__search-box');
	let breadcrumbsInner = document.querySelector('.breadcrumbs__inner');
	if(window.innerWidth <= 767) {
		breadcrumbsInner.appendChild(headerSearchBox);
	} else {
		headerSearch.appendChild(headerSearchBox);
	}
}

let headerBurger = document.querySelector('.header__burger');
let breadcrumbsList = document.querySelector('.breadcrumbs__list');
let overlay = document.querySelector('.overlay');
headerBurger.addEventListener('click', function(e){
	breadcrumbsList.classList.toggle('active');
	breadcrumbsList.classList.remove('hidden');
	overlay.classList.toggle('active');
	e.stopPropagation();
	if (breadcrumbsList.classList.contains('active')){
		document.body.classList.toggle('fixed');
	} else {
		document.body.classList.remove('fixed');
		breadcrumbsList.classList.remove('active');
		breadcrumbsList.classList.add('hidden');
		overlay.classList.remove('active');
	}
});
breadcrumbsList.addEventListener('click', function(e){
	e.stopPropagation();
})
document.body.addEventListener('click',function(){
	breadcrumbsList.classList.remove('active');
	breadcrumbsList.classList.add('hidden');
	this.classList.remove('fixed');
	overlay.classList.remove('active');
})
