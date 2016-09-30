/* Copyright (c) Udacity.com */

/*
 * Open the drawer when the menu ison is clicked.
 */
var mainmenu = document.querySelector('#menu_list');
var hamburger = document.querySelector('#menu');

//alert("In javascript file");

hamburger.addEventListener('click', function (e) {
  mainmenu.classList.toggle('open');
  e.stopPropagation();
  e.preventDefault();
});

/*
main.addEventListener('click', function () {
  drawer.classList.remove('open');
})*/




