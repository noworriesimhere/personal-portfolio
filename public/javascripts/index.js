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
            <img src="./img/portfolio-city.png" alt="city tours site">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Travel Tours - Static Webpage</h3>
            <h4 class="lightbox__subtitle">HTML, CSS, Javascript, Bootstrap 4</h4>
            <p>
                A template to showcase parallax effects and changing backgrounds using the native Intersectional Observer API that comes out of the box with Javascript.
            </p>
            <a href="https://parallaxtemplate.vercel.app/" target="_blank" class="btn">Go to Site</a>
        </div>
    </div>
    `,
  lightbox__item2: `
    <div class="lightbox__content">
    <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
    <div class="lightbox__picture">
        <img src="./img/portfolio-baking.png" alt="Bakery Site">
    </div>
    <div class="lightbox__description">
        <h3 class="lightbox__title">Custom Cakes - Static Webpage</h3>
        <h4 class="lightbox__subtitle">HTML, PostCSS, Webpack, Javascript</h4>
        <p>
            A single page showcase for a small business. All scrolling animations are powered by the Intersectional Observer API. Development was aided by Webpack and Postcss to modularize and bundle all project files, so as to keep the project as neat and clean as possible.
        </p>
        <a href="https://createbakery.netlify.app/" target="_blank" class="btn">Go to Site</a>
    </div>
</div>
    `,
  lightbox__item3: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-wedding.png" alt="Wedding Site">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Wedding Event - Web App</h3>
            <h4 class="lightbox__subtitle">HTML, CSS, Javascript, React, Firebase</h4>
            <p>
                A personal website for my upcoming wedding! The style of the web app is designed with horizontal scrolling on most views. 
            </p>
            <p>
                The popular framework React was used to put this together.
            </p>
            <a href="alanlovesgeorgia.wedding" target="_blank" class="btn">Go to Site</a>
        </div>
    </div>
    `,
  lightbox__item4: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-portfolio.png" alt="Other Portfolio">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Tech Portfolio - Single Page App</h3>
            <h4 class="lightbox__subtitle">Next.js, HTML, CSS, Javascript</h4>
            <p>
              My other portfolio site, which is more geared toward technical talk and what I use in my programming.
            </p>
            <a href="https://second-portfolio-liart.vercel.app" target="_blank" class="btn">Go to Site</a>
        </div>
    </div>
    `,
  lightbox__item5: `
    <div class="lightbox__content">
        <i class="fas fa-times-circle lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="./img/portfolio-califashion.png" alt="Clothing Store">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">Clothing Store - WordPress</h3>
            <h4 class="lightbox__subtitle">Wordpress, Elementor, WooCommerce</h4>
            <p>
                An ecommerce store for a small clothing business.
            </p>
            <a href="https://californiafashion.net/" target="_blank" class="btn">Go to Site</a>
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
