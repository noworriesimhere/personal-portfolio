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

// Navbar animation 

class DesktopMenu {
    constructor (menuItem, rootMargin, threshold) {
        this.menuItem = document.getElementById(menuItem)
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector(`.${menuItem}`).classList.add("active")
                } else {
                    document.querySelector(`.${menuItem}`).classList.remove("active")
                }
            });
            }, {rootMargin: `${rootMargin}px`, threshold: threshold});

        observer.observe(this.menuItem);
    }
}

new DesktopMenu("home", 5, .75) //parameters: section, rootMargin, threshold
new DesktopMenu("myServices", 5, .8)
new DesktopMenu("about", 5, .8)
new DesktopMenu("work", 5, .75)