/**
 * Define Global Variables
 * 
 */

// Get the button:
const mybutton = document.getElementById("myButton");
// Get the button class to top event
const scrollTopButton = document.querySelector(".myButtonClass");
// Get the ul 
const navBarList = document.querySelector('#navbar__list');
// Get the sections 
const sections = document.querySelectorAll('[data-nav]');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// link click menu and smooth scrolling
function smoothScroll(e) {
	e.preventDefault();
	if (e.target.dataset.nav) {
		document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({
			behavior: "smooth",
			duration: 2500
		})
	}
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the navigation auto sections
function navBarMenuSections() {
	// forEach to go over all section with data-nav 
	sections.forEach((section, num) => {
		// declare the data-variables
		let listItem = document.createElement('li');
		let link = document.createElement('a');
		let linkTitle = section.getAttribute('data-nav');
		let linkTarget = section.getAttribute('id');
		// one ul listItem per section gets the class list__item
		listItem.classList.add('link_menu');
		// ul gets the listItems as a child
		navBarList.appendChild(listItem);
		// listItem get a link as a child
		listItem.appendChild(link);
		// link gets the title text from data-nav
		link.innerHTML = linkTitle;
		//set attributes for target and add class to link
		link.setAttribute("data-nav", `${linkTarget}`);
		link.setAttribute("href", `#${linkTarget}`);
		link.classList.add('blog_link_menu');
	});
}

// Add class 'active' to section when near top of viewport
function sectionActiveState() {
	sections.forEach((section) => {
		let clickLink = navBarList.querySelector(`[data-nav=${section.id}]`);
		let sectionView = section.getBoundingClientRect();
		if (sectionView.top <= 150 && sectionView.bottom >= 100) {
			section.classList.add('active-section');
			clickLink.classList.add('active-link');
		} else {
			section.classList.remove('active-section');
			clickLink.classList.remove('active-link');
		}
	});
}
/* 
 *  scrolling > 500px
 *  from the top document
 *  show the button
 *  to scroll to top
 */

// Scroll
window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
// When the user clicks on the button, scroll smooth to the top of the document
function topFunction() {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});
}

/**
 * End Main Functions
 * Begin Events
 * 
 */
scrollTopButton.addEventListener("click", topFunction);
// Build menu 
document.addEventListener('DOMContentLoaded', navBarMenuSections);
// Scroll to section on link click
navBarList.addEventListener('click', smoothScroll);
// Set sections as active
window.addEventListener('scroll', sectionActiveState);