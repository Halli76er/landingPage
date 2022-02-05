/*
 * Javascript for mobil-navigation
 */
/*
 * const for DATA
 */
const nav = document.querySelector('.navigation');
const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');
/*
 * click_addEventListener for open-menu button add class
 */
openMenu.addEventListener('click', function(e) {
	nav.classList.add('show-menu');
});
/*
 * click_addEventListener for close-menu button remove class
 */
closeMenu.addEventListener('click', function(e) {
	nav.classList.remove('show-menu');
});
/*
 * click_addEventListener for close menu after link-click finished remove class
 */
nav.addEventListener('click', function(e) {
	if (e.target.classList.contains('blog_link_menu')) {
		nav.classList.remove('show-menu');
	}
});