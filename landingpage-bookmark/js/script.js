const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

// listen for a click on any tab
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// listen for click on menu button
btn.addEventListener('click', navToggle)

function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if(menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    }
    else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
}


function onTabClick(e){
    // console.log('tab click event happened')
    // remove underlines on all tabs after a click
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    // Hide all panels
    panels.forEach((panel) => panel.classList.add(
        'hidden'
    ))

    // Switch on panel that has been clicked
    e.target.classList.add(
        'border-softRed',
        'border-b-4'
    )
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}