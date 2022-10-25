const navButton = document.getElementById('nav-button');
const navMenu = document.querySelector('#nav__menu');
const navLink = document.querySelectorAll('.nav__menu__link')

navButton.addEventListener("click", openMenu);

for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', closeMenu)
}

function openMenu() {
    navMenu.classList.toggle('nav__menu__active');
}

function closeMenu() {
    navMenu.classList.remove('nav__menu__active');
}

/** slide */

const tabPictures = [{id: 'picture-1', src: './images/picture-1.jpg'}, 
                {id: 'picture-2', src: './images/picture-2.jpg'}, 
                {id: 'picture-3', src: './images/picture-3.jpg'}, 
                {id: 'picture-4', src: './images/picture-4.jpg'}]

tabPictures.map((item) => {  
    createElement(item.id, item.src)
})

function createElement(id, source) {
    return document.getElementById('gallery-slide').innerHTML += (`
        <li class="picture" id=${id} style="background-image:url(${source}); background-size: cover"></li>
    `)
}

/** tarifs */

const tarifs = [
    {title: 'coupe simple', price: '12.00€', description: 'petite description du service'},
    {title: 'taper fade', price: '15.00€', description: 'petite description du service'},
    {title: 'taille barbe', price: '10.00€', description: 'petite description du service'},
    {title: 'teinture', price: '35.00€', description: 'petite description du service'},
    {title: 'soin masque', price: '15.00€', description: 'petite description du service'}
]

tarifs.map((item) => {
    setTarifs(item.title, item.price, item.description)
})

function setTarifs(title, price, description) {
    return document.getElementById('tarifs-list').innerHTML += (`
        <li class="list__item">
            <div class="list__item__wrapper">
                <p class="list__item-title">${title}</p>
                <p class="list__item-price">${price}</p>
            </div>                
            <p class="list__item-text">${description}</p>
        </li>    
    `)
}


/** comments slider */

const btnPrev = document.querySelector('#slide-prev');
const btnNext = document.querySelector('#slide-next');
const userNickname = document.querySelector('#user-id');
const userComment = document.querySelector('#user-comment');
let count = 0;

const commentList = [
    { nickname: "Bob l'éponge", comment: "Carré la coupe, GG Gysh hair"},
    { nickname: "Patrik l'étoile de mer", comment: "très accueillant et connait parfaitement son métier, dégradé a blanc pour moi la base, merci Shaggy"}
]

btnNext.addEventListener('click', nextComment)
btnPrev.addEventListener('click', prevComment)

userNickname.innerText = `${commentList[count].nickname}`
userComment.innerText = `" ${commentList[count].comment} "`

function prevComment() {
    if(count > 0) {
        count--
        userNickname.innerText = `${commentList[count].nickname}`
        userComment.innerText = `" ${commentList[count].comment} "`
    } 
    console.log(count)   
}

function nextComment() {
    if(count < commentList.length-1) {
        count++
        userNickname.innerText = `${commentList[count].nickname}`
        userComment.innerText = `" ${commentList[count].comment} "`
    }
    console.log(count)  
}










