;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	// Document on load.
	$(function(){
		fullHeight();
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		sliderMain();
	});


}());

// Open Delete		
const deletewrapper = document.querySelector('.vaccine-delete-wrapper');
const vaccinedeletepopup= document.querySelector('.vaccine-delete');
let deleteicon = document.querySelectorAll('.delete-real');
deleteicon = Array.from(deleteicon);

for (var i = 0; i < deleteicon.length; i++) {


	const handledelete = () => {
		deletewrapper.style.display = 'flex';
	}
	deleteicon[i].addEventListener('click', handledelete);
}


// Out deletevaccinedeletepopup

let outicon = document.querySelector('.out-delete-vaccine');

const handleoutdelete = () => {
	deletewrapper.style.display = 'none';
}
outicon?.addEventListener('click', handleoutdelete);

const cancelicon =document.querySelector('.out-cancel-vaccine')
cancelicon?.addEventListener('click', handleoutdelete);
	
const handleoutdelete2 = ()=> {
	vaccinedeletepopup.addEventListener('click',handledeletepopup= (e) => e.stopPropagation())
	deletewrapper.style.display = 'none';
}
deletewrapper?.addEventListener('click',handleoutdelete2)



// Onclick edit vaccine
let editicon = document.querySelectorAll('.edit-real');
editicon = Array.from(editicon);
const backList = document.querySelector('.fh5co-body-edit-backlist');
const tableEditVaccine=document.querySelector('.fh5co-narrow-content-2');
const EditcancelBackToVaccine = document.querySelector('.cancel-back-to-vaccine');
const tableVaccine=document.querySelector('.create-table-all');
const backList2 = document.querySelector('.fh5co-body-create-backlist');
for (var i = 0; i < editicon.length; i++) {
	const handleEdit = () => {
		tableVaccine.style.display='none';
		tableEditVaccine.style.display='block';
	}
	editicon[i].addEventListener('click',handleEdit);
}

const handleBackVaccine = () => {
	tableEditVaccine.style.display='none';
	tableVaccine.style.display='block';
}

backList?.addEventListener('click',handleBackVaccine)
backList2?.addEventListener('click',handleBackVaccine)
EditcancelBackToVaccine?.addEventListener('click',handleBackVaccine)


// Onclick create vaccine
const createbuttonvc = document.querySelector('.fh5co-head-create-chuyen');
const tableCreateVaccine = document.querySelector('.fh5co-head-create-new');
const cancelBackToVaccine = document.querySelector('.fh5co-body-create-btn-cancel');
const handleCreateVaccine = () => {
	tableVaccine.style.display='none';
	tableCreateVaccine.style.display='block';
	
}
const cancelBackToVaccines = () => {
	tableCreateVaccine.style.display='none';
	tableVaccine.style.display='block';
}
createbuttonvc?.addEventListener('click',handleCreateVaccine)
cancelBackToVaccine?.addEventListener('click',cancelBackToVaccines)
backList2?.addEventListener('click',cancelBackToVaccines)

// (function () {
// 	'use strict'
// 	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// 	tooltipTriggerList.forEach(function (tooltipTriggerEl) {
// 	  new bootstrap.Tooltip(tooltipTriggerEl)
// 	})
//   })()



function Redirect() {
	alert('Bạn có chắc muốn quay trở lại trang chủ!')
	window.location="./home.html";
}

const option1 = document.querySelector('.option-search-inject');
const option2 = document.querySelector('.option-search-inject2');
const form1 = document.querySelector('.search-main-main');
const form2 = document.querySelector('.search-main-main-4');

const obtaintolookup = () => {
	form1.style.display='flex';
	form2.style.display='none';
}

const lookuptoobtain = () => {
	form1.style.display='none';
	form2.style.display='flex';
}

option1?.addEventListener('click',obtaintolookup)
option2?.addEventListener('click',lookuptoobtain)

const login_form = document.querySelector('.signInWrap');
const login = document.querySelector('.fh5co-main-menu-login');
const sideBar = document.querySelector('#fh5co-aside')


const chooselogin = () => {
	login_form.style.display = "flex";
	sideBar.style.zIndex = 0;
}

login?.addEventListener('click', chooselogin)
const exit_Icon = document.querySelector('.signIn_form > i');
const form_Wrapper = document.querySelector('.signInWrap');
const form = document.querySelector('.signIn');



const chooseExit_icon = () => {
	login_form.style.display = "none";
	sideBar.style.zIndex = 999;
}

exit_Icon?.addEventListener('click',chooseExit_icon)

const exit_Icon2 = document.querySelector('.SignUp_form > i');


const chooseExit_icon2 = () => {
	signup_form.style.display = "none";
	sideBar.style.zIndex = 999;
}

exit_Icon2?.addEventListener('click',chooseExit_icon2)

const chooseform_Wrapper = () => {
	login_form.style.display = "none";
	sideBar.style.zIndex = 999;
}

form_Wrapper?.addEventListener('click',chooseform_Wrapper);

const chooseform = (e) => {
	e.stopPropagation();
}

form?.addEventListener('click',chooseform)

// -----------------------------------------------------------------------


$('.collapse').collapse()
// ----------------------------------------------------------------------------
const footer = document.querySelector('.fh5co-footer');
const search_button = document.querySelector('.accordion-button');
const search_button_collapse =  document.querySelector('.collapsed');
var footer_appear = true;

const clickSeacrh = () => {
	if (footer_appear) {
		footer.style.display = "none";
		footer_appear=false;
	}
	else
	{
		footer.style.display = 'block';
		footer_appear = true;
	}
}
	
search_button?.addEventListener('click',clickSeacrh)

// -------------------------------------------------------------------
const register_btn = document.querySelector('.up-to-register');
const signup_form =document.querySelector('.SignUpWrap')
const clickhandleregister = () => {
	
	login_form.style.display = 'none';
	signup_form.style.display= 'flex';
}
register_btn?.addEventListener('click',clickhandleregister)

const login_btn = document.querySelector('.up-to-login');
const clickhandlelogin = () => {
	login_form.style.display = 'flex';
	signup_form.style.display= 'none';
}
login_btn?.addEventListener('click',clickhandlelogin);

const signuphelp = document.querySelector('.SignUp')
const chooseform_Wrapper2 = () => {
	signup_form.style.display = "none";
	sideBar.style.zIndex = 999;
}

signup_form?.addEventListener('click',chooseform_Wrapper2);

const chooseform2 = (e) => {
	e.stopPropagation();
}

signuphelp?.addEventListener('click',chooseform2)

const logout_form = document.querySelector('.logout-right-now')
const logout_btn =document.querySelector('.fh5co-main-menu-logout');


const chooseLogout = () => {
	
	logout_form.style.display = 'flex';
}

logout_btn?.addEventListener('click',chooseLogout)

const outlogout = document.querySelector('.out-logout-vaccine');
const outcancellogout = document.querySelector('.out-cancel-logout');
const logoutnow = document.querySelector('.logout-right-now-pls');
const outlogout2 = () => {
	logout_form.style.display = 'none';
}

outlogout?.addEventListener('click',outlogout2)
outcancellogout?.addEventListener('click',outlogout2)
logout_form?.addEventListener('click',outlogout2)

const notoutnow = (e) => {
	e.stopPropagation();
}

logoutnow?.addEventListener('click',notoutnow)

