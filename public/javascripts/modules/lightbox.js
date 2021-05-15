import lightboxItems from './portfoliodata'

class Lightbox {
  constructor() {
    this.lightbox = document.querySelector('.lightbox');
    this.closeBtn = undefined;
    this.portfolioItems = document.querySelectorAll('.portfolio__item');
    this.rightButton;
    this.leftButton;
    this.events();
    this.closeInBackground();
  }

  events() {
    for (let item of this.portfolioItems) {

      item.addEventListener('click', (e) => {
        this.openThatTrash(e, item)
      });
    }
  }

  openThatTrash(e, item) {
    const previous = e.target.parentElement.previousElementSibling;
    const next = e.target.parentElement.nextElementSibling;
    document.querySelector('body').style.overflow = 'hidden';
    this.lightbox.insertAdjacentHTML('afterbegin', `${lightboxItems[item.id]}`);
    this.lightbox.style.opacity = 1;
    this.lightbox.classList.add('lightbox__active');
    
    this.leftButton = document.querySelector('.lightbox__left');
    console.log(this.leftButton)
    this.leftButton.addEventListener('click', (e) => { 
      this.closeThat();
      setTimeout(() => {
        this.openThatTrash(e, previous);
      }, 300)
    })
    
  
    this.rightButton = document.querySelector('.lightbox__right');
      this.rightButton.addEventListener('click', (e) => {
      this.closeThat();
      setTimeout(() => {
        this.openThatTrash(e, next);
      }, 500)
    })
    

    if (!this.closeBtn) {
      this.closeBtn = document.querySelector('.lightbox__close-btn');
      this.closeBtn.addEventListener('click', (e) => {
        this.closeThat();
      });
    }
  }

  closeInBackground() {
    this.lightbox.addEventListener('click', (e) => {
      if (e.target.className === 'lightbox lightbox__active') {
        this.closeThat();
    }})
  }

  closeThat() {
    this.lightbox.style.opacity = 0;
    document.querySelector('body').style.overflow = 'unset';
    setTimeout(() => this.lightbox.classList.remove('lightbox__active'), 200);
    setTimeout(
      () => document.querySelector('.lightbox__content').remove(),
      250
    );
    this.closeBtn = undefined;
    // this.leftButton.replaceWith(this.leftButton.cloneNode(true))
    this.leftButton = undefined;
    this.rightButton = undefined;
  }
  
}

export default Lightbox;

