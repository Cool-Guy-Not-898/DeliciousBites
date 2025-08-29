// script.js

function highlightMenu() {
  const menu = document.getElementById('menu');
  menu.scrollIntoView({ behavior: 'smooth' });
  menu.classList.add('highlight');

  setTimeout(() => {
    menu.classList.remove('highlight');
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuSection = document.querySelector('.menu-section');
  menuSection.addEventListener('animationend', () => {
    menuSection.classList.remove('highlight');
  });
});
