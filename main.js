/*========================= Toggle Icon Navbar ========================*/

let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    menu.classList.toggle('active');
};

/*========================= Scroll Section Active Link ========================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*========================= Sticky Navbar ========================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================= Remove Toggle Icon and Navbar When Click Navbar Link (Scroll) ========================*/
    menuIcon.classList.remove('fa-xmark');
    menu.classList.remove('active');
};

/*========================= Scroll Reveal ========================*/

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========================= Typed JS ========================*/

const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Designer', 'Freelancer'],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 100,
    loop: true
});
