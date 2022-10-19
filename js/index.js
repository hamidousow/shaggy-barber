const navButton = document.getElementById('nav-button');
const navMenu = document.querySelector('#nav__menu');

navButton.addEventListener("click", openMenu);

function openMenu() {
    navMenu.classList.toggle('nav__menu__active');
}

const logo = document.getElementById("nav-logo");

document.addEventListener('scroll', (e) => {
    window.scrollY > 50 ? logo.classList.add('nav__logo__resize') : logo.classList.remove('nav__logo__resize')
})


