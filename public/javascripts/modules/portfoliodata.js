const items = [
  {
    imgSrc: './img/portfolio-greenink.png',
    imgSrcAlt: 'Green Ink',
    title: 'Green Ink Communications',
    subtitle: 'WordPress and PHP',
    description: `A business focused on video production for clients. <br> I was able to help them maintain their WordPress site's front and back end. Custom CSS was added to tweak an existing WordPress theme for a more professional look.`,
    link: 'https://greenink.us.com'
  },
  {
    imgSrc: './img/portfolio-agreenprod.png',
    imgSrcAlt: 'A Green Production',
    title: 'AGreen Production',
    subtitle: `Single Page App`,
    description: `The whole website is set up as a Single Page Application, which means maximum responsiveness and app-like interactivity`,
    link: 'https://agreenprod.com'
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
      </div>
    `
  })
  return finalObject;
}




let lightboxItems;

export default lightboxItems = spitOutObject(items);