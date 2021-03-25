const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')
const toggleBars = document.querySelectorAll('.toggle-button .bar')

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('block')
    toggleBars.forEach((bar) => {
        bar.classList.toggle('active');
    })
})