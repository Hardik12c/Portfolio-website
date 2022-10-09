// declaring variables
let hardikmailbox = Array.from(document.getElementsByClassName('mailbox'));
let navbar = document.getElementById('navbar');
let nam = document.querySelector('.name');
let ul = document.querySelector('ul');
let navbarelement = Array.from(document.querySelectorAll('li a'));
let hamburger = document.querySelector('.hamburger');
let hamburgerline = Array.from(document.querySelectorAll('.line'));

// functions
function redirect() {
    // using mailto to redirect email to mailbox
    window.location.href = "mailto:hardik12c@gmail.com";
}


// adding addEventListeners
hardikmailbox.forEach(element => {

    element.addEventListener('click', () => {
        redirect();
    })
});
window.addEventListener("scroll", () => {
    if (screen.width >700 && window.innerWidth>700) {
        if (window.scrollY > 100 ) {
            navbar.style.backgroundColor = "rgb(45, 45, 45,0.95)";
            nam.style.color = "white";
            navbarelement.forEach((e) => {
                e.style.color = "white";
                e.classList.remove('hover');
            })
        }
        else {
            navbar.style.backgroundColor = "#f5f0ff";
            nam.style.color = "#3d04c4";
            navbarelement.forEach((e) => {
                e.style.color = "black";
                e.classList.add('hover');
            })
        }
    }
})

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('w-set');
    ul.classList.toggle('opacity-set');
    hamburgerline.forEach((e) => {
        e.classList.toggle('hamcolor');
    })
})