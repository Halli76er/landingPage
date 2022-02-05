/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//Get the button:
const mybutton = document.getElementById("myButton");
const scrollTopButton = document.querySelector(".myButtonClass");
//Get the ul 
const navBarList = document.querySelector('#navbar__list');
//Get the sections 
const sections = document.querySelectorAll('[data-nav]');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the Navigation auto sections

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBarSections () {
  sections.forEach((section, num) =>{
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
    link.textContent = linkTitle;
    //set attributes for target and add class to link
    link.setAttribute("data-nav", `${linkTarget}`);
    link.setAttribute("href", `#${linkTarget}`);
    link.classList.add('blog_link_menu');
  });
}

// Add class 'active' to section when near top of viewport



/* 
*  scrolling > 500px
*  from the top document
*  show the button
*  to scroll to top
*/

// Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll smooth to the top of the document
function topFunction() {
  window.scroll({top: 0, behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
scrollTopButton.addEventListener("click", topFunction);
// Build menu 
document.addEventListener('DOMContentLoaded', navBarSections);
// Scroll to section on link click

// Set sections as active

