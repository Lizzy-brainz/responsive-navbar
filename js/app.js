const navSlide = ()=>{
    const nav_toggle = document.querySelector('.nav_toggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    nav_toggle.addEventListener('click', ()=> {
        // TOGGLE NAVBAR
        nav.classList.toggle('nav-active');
         // ANIMATE LINKS
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = ''
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
            });
            // Toggle Animation
            nav_toggle.classList.toggle('toggle');
    });
   
}

navSlide();