import '../stylesheets/styles.css';

if (module.hot) {
    module.hot.accept()
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
})

for (let link of navLinks) {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
}

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

tl.to('.text', {y:'0%', duration: 1, stagger: 0.3});
tl.to('.animation__slider', {x:'-100%', duration: .74, delay: 0.5 });
tl.to('.animation', {x: '-100%', duration: 1}, "-=1");
tl.fromTo('.nav', {opacity: 0}, {opacity: 1, duration: .4});
tl.fromTo('#home', {opacity: 0}, {opacity: 1, duration: .4});
tl.fromTo('#myServices', {opacity: 0}, {opacity: 1, duration: .4});
tl.fromTo('#about', {opacity: 0}, {opacity: 1, duration: .4});
tl.fromTo('#work', {opacity: 0}, {opacity: 1, duration: .4});

