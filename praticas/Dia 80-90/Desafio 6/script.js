const card = document.querySelector(".card")
const button = document.querySelectorAll('button')

button.forEach((Item) => {
    Item.addEventListener('click', () => {
        card.classList.toggle('virado')
    })
}) 