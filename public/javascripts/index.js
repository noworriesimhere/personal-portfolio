import '../stylesheets/styles.css';

import Navbar from './modules/navbar';
import Fader from './modules/fader';
import IntroAnim from './modules/introAnim';
import HeroAnim from './modules/heroAnim';

let navbar = new Navbar();
let fader = new Fader();
let introAnim = new IntroAnim();
let heroAnim = new HeroAnim();

if (module.hot) {
  module.hot.accept();
}

const lightboxItems = {
  lightbox__item1: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-01.png" alt="">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Travel Tours - Static Webpage</h3>
            <h4 class="lightbox__subtitle">HTML, CSS, Javascript, Bootstrap 4</h4>
            <p>
                A template to showcase parallax effects and changing backgrounds using the native Intersectional Observer API that comes out of the box with Javascript.
            </p>
            <a href="https://parallaxtemplate.vercel.app/" target="_blank" class="btn">Go to Site</a>
            <a href="https://github.com/noworriesimhere/parallaxtemplate" target="_blank" class="btn">Go to Github Repository</a>
        </div>
    </div>
    `,
  lightbox__item2: `
    <div class="lightbox__content">
    <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
    <div class="lightbox__picture">
        <img src="./img/portfolio-02.png" alt="">
    </div>
    <div class="lightbox__description">
        <h3 class="lightbox__title">Custom Cakes - Static Webpage</h3>
        <h4 class="lightbox__subtitle">HTML, PostCSS, Webpack, Javascript</h4>
        <p>
            A single page showcase for a small business. All scrolling animations are powered by the Intersectional Observer API. Development was aided by Webpack and Postcss to modularize and bundle all project files, so as to keep the project as neat and clean as possible.
        </p>
        <a href="https://createbakery.netlify.app/" target="_blank" class="btn">Go to Site</a>
        <a href="https://github.com/noworriesimhere/yelpcamp" target="_blank" class="btn">Go to Github Repository</a>
    </div>
</div>
    `,
  lightbox__item3: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-03.png" alt="">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">YelpCamp - Web App</h3>
            <h4 class="lightbox__subtitle">HTML, Bootstrap 5, Javascript, Node.js, Express, MongoDB</h4>
            <p>
                A full web app with both front end (HTML, Bootstrap, Javascript) and a back end server and database (Node.js, Express, MongoDB). Has full CRUD functionality (Create, Read, Update, Delete) and follows RESTful (ReprEsentational State Transfer) conventions.
            </p>
            <p>
                Includes authentication and authorization powered by Passportjs and map support powered by the Mapbox API.
            </p>
            <a href="https://vast-savannah-21694.herokuapp.com/" target="_blank" class="btn">Go to Site</a>
            <a href="https://github.com/noworriesimhere/yelpcamp" target="_blank" class="btn">Go to Github Repository</a>
        </div>
    </div>
    `,
  lightbox__item4: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-04.png" alt="">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Personal Portfolio - Static Page</h3>
            <h4 class="lightbox__subtitle">HTML, PostCSS, Javascript, Webpack</h4>
            <p>
                The site that you are currently on. Animations are mainly done using the popular GSAP animation library, while scroll effects are achieved by event listeners.
            </p>
            <a href="https://github.com/noworriesimhere/personal-portfolio" target="_blank" class="btn">Go to Github Repository</a>
        </div>
    </div>
    `,
  lightbox__item5: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-05.jpg" alt="">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Sample Company Site - Static Page with React</h3>
            <h4 class="lightbox__subtitle">React with Create React App</h4>
            <p>
                A front end static page rendered by React components.
            </p>
            <a href="https://alantranbusiness.netlify.app/" target="_blank" class="btn">Go to Site</a>
            <a href="https://github.com/noworriesimhere/personal-portfolio" target="_blank" class="btn">Go to Github Repository</a>
        </div>
    </div>
    `,
};

const lightbox = document.querySelector('.lightbox');
let closeBtn = undefined;
const portfolioItems = document.querySelectorAll('.portfolio__item');
for (let item of portfolioItems) {
  item.addEventListener('click', (e) => {
    lightbox.insertAdjacentHTML('afterbegin', `${lightboxItems[item.id]}`);
    lightbox.style.opacity = 1;
    lightbox.classList.add('lightbox__active');
    if (!closeBtn) {
      closeBtn = document.querySelector('.lightbox__close-btn');
      closeBtn.addEventListener('click', (e) => {
        lightbox.style.opacity = 0;
        console.log('worked!');
        setTimeout(() => lightbox.classList.remove('lightbox__active'), 400);
        setTimeout(
          () => document.querySelector('.lightbox__content').remove(),
          500
        );
        setTimeout(() => (closeBtn = undefined));
      });
    }
  });
}
