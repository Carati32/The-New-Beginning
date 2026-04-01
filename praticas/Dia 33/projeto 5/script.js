let buttons = document.querySelectorAll('.btns')

buttons.forEach(item => {
    item.addEventListener('animationend', function(){
        item.classList.remove('ripple-active')

    })
    item.addEventListener('click', function () {
        item.classList.add('ripple-active')
    })
})