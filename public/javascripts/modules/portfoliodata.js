const items = [
  {
    imgSrc: './img/portfolio-city.png',
    imgSrcAlt: 'city tours site',
    title: 'Travel Tours - Static Webpage',
    subtitle: 'HTML, CSS, Javascript, Bootstrap 4',
    description: 'A template to showcase parallax effects and changing backgrounds using the native Intersectional Observer API that comes out of the box with Javascript.',
    link: 'https://parallaxtemplate.vercel.app/'
  },
  {
    imgSrc: './img/portfolio-baking.png',
    imgSrcAlt: 'bakery site',
    title: 'Custom Cakes - Static Webpage',
    subtitle: 'HTML, PostCSS, Webpack, Javascript',
    description: 'A single page showcase for a small business. All scrolling animations are powered by the Intersectional Observer API. Development was aided by Webpack and Postcss to modularize and bundle all project files, so as to keep the project as neat and clean as possible.',
    link: 'https://createbakery.netlify.app/'
  },
  {
    imgSrc: './img/portfolio-wedding.png',
    imgSrcAlt: 'wedding site',
    title: 'Wedding Event',
    subtitle: 'Single page React, Firebase',
    description: 'A personal website for my upcoming wedding! The style of the web app is designed with horizontal scrolling on most views.',
    link: 'https://createbakery.netlify.app/'
  },
  {
    imgSrc: './img/portfolio-portfolio.png',
    imgSrcAlt: 'portfolio site',
    title: 'Tech Portfolio',
    subtitle: 'Single Page Application with Next.js',
    description: 'My other portfolio site, which is more geared toward technical talk and what I use in my programming.',
    link: 'https://alantran.vercel.app'
  },
  {
    imgSrc: './img/portfolio-greenink.png',
    imgSrcAlt: 'Green Ink',
    title: 'Green Ink Communications',
    subtitle: 'Business Website with WordPress and PHP',
    description: `A business focused on video production for clients. <br> I was able to help them maintain their WordPress site's front and back end. Custom CSS was added to tweak an existing WordPress theme for a more professional look.`,
    link: 'https://greenink.us.com'
  },
  {
    imgSrc: './img/portfolio-califashion.png',
    imgSrcAlt: 'California Fashion',
    title: 'California Fashion',
    subtitle: 'Clothing Ecommerce with Wordpress',
    description: `An ecommerce store for a small clothing business.`,
    link: 'https://californiafashion.net'
  },
  
]

const spitOutObject = (items) => {
  const finalObject = {};
  items.forEach((item, key) => {
    finalObject[`lightbox__item${key+1}`] = `
    <div class="lightbox__content">
        <i class="far fa-window-close lightbox__close-btn fa-3x"></i>
        <div class="lightbox__picture">
            <img src="${item.imgSrc}" alt="${item.imgSrcAlt}">
        </div>
        <div class="lightbox__description">
            <h3 class="lightbox__title">${item.title}</h3>
            <h4 class="lightbox__subtitle">${item.subtitle}</h4>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" class="btn">Go to Site</a>
        </div>
        <div class="lightbox__left">
          <i class="fas fa-chevron-left fa-3x"></i>
        </div>
        <div class="lightbox__right">
          <i class="fas fa-chevron-right fa-3x"></i>
        </div>
    </div>
    `
  })
  return finalObject;
}




let lightboxItems;

export default lightboxItems = spitOutObject(items);