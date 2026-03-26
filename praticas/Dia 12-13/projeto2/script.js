const menu = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav-links')

menu.addEventListener('click', () =>{
    nav.classList.toggle('ativo')
})