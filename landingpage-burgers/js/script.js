const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const reviewsBtn = document.getElementById('load-reviews-btn')
const reviewsCol2 = document.getElementById('reviews-col-2')
const reviewsCol3 = document.getElementById('reviews-col-3')
let reviewColsShowing = 1


// listen for click on menu button
btn.addEventListener('click', navToggle)

// listen for click anywhere in the menu
menu.addEventListener('click', navToggle)

function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// listen for click on Load more reviews button
reviewsBtn.addEventListener('click', reviewShowMore)

// function to show the additional columns
function reviewShowMore(){
    console.log(reviewColsShowing)
    if (reviewColsShowing === 1) {
        reviewsCol2.classList.remove('hidden')
        reviewsCol2.classList.add('inline-grid')
        reviewColsShowing++
    } else if (reviewColsShowing === 2) {
        reviewsCol3.classList.remove('hidden')
        reviewsCol3.classList.add('inline-grid')
        reviewsBtn.classList.add('hidden')
    }
    
}