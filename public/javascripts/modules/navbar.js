class Navbar {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navLinks = document.querySelectorAll('.nav__link');
        this.events();
        this.closeNav();
    }

    events() {
        this.navToggle.addEventListener("click", () => {
            document.body.classList.toggle('nav-open');
        })
    }

    closeNav() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        })
    }
}

// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link');

// navToggle.addEventListener("click", () => {
//     document.body.classList.toggle('nav-open');
// })

// for (let link of navLinks) {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// }

export default Navbar;