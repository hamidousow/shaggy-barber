const navButton = document.getElementById('nav-button');
const navMenu = document.querySelector('#nav__menu');

navButton.addEventListener("click", openMenu);

function openMenu() {
    navMenu.classList.toggle('nav__menu__active');
}

