const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

// listen for click on menu button
btn.addEventListener('click', navToggle)

function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// TODO - Get the load-reviews-btn to reveal more reviews on mobile