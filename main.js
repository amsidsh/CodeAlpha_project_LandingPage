// Select the menu icon and navbar elements
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Handle click event on menu icon
menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Handle scroll event on window
window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
});

