import lightboxItems from './portfoliodata'

class Lightbox {
  constructor() {
    this.lightbox = document.querySelector('.lightbox');
    this.closeBtn = undefined;
    this.portfolioItems = document.querySelectorAll('.portfolio__item');
    this.leftButton = document.querySelector('.lightbox__left');
    this.rightButton = document.querySelector('.lightbox__right');
    this.previous;
    this.next;
    this.events();
    this.closeInBackground();
  }

  events() {
    for (let item of this.portfolioItems) {

      item.addEventListener('click', (e) => {
        this.openThatTrash(item)
      });
    }
  }

  openThatTrash(item) {
    this.previous = item.previousElementSibling;
    this.next = item.nextElementSibling;
    document.querySelector('body').style.overflow = 'hidden';
    this.lightbox.insertAdjacentHTML('afterbegin', `${lightboxItems[item.id]}`);
    this.lightbox.style.opacity = 1;
    this.lightbox.classList.add('lightbox__active');
    
    setTimeout(() => document.querySelector('.lightbox__content').style.opacity = 1, 150)

    
    if (!this.previous) {
      this.leftButton.style.display = 'none'
    } else {
      this.leftButton.style.display = 'unset'
    }

    this.leftButton.addEventListener('click', ({target}) => { 
      this.closeThat();
      setTimeout(() => {
        this.openThatTrash(this.previous);
      }, 250)
    })
    
  

    if (!this.next) {
      this.rightButton.style.display = 'none'
    } else {
      this.rightButton.style.display = 'unset'
    }
    
    this.rightButton.addEventListener('click', ({target}) => {
      this.closeThat(target);
      setTimeout(() => {
        this.openThatTrash(this.next);
      }, 250)
    })
    

    if (!this.closeBtn) {
      this.closeBtn = document.querySelector('.lightbox__close-btn');
      this.closeBtn.addEventListener('click', ({target}) => {
        this.closeThat(target.className);
      });
    }
  }

  closeInBackground() {
    this.lightbox.addEventListener('click', ({target}) => {
      if (target.className === 'lightbox lightbox__active') {
        this.closeThat(target.className);
    }})
  }

  closeThat(target) {
    if (target === 'far fa-window-close lightbox__close-btn fa-3x' || target === 'lightbox lightbox__active') {
      this.lightbox.style.opacity = 0;
      setTimeout(() => this.lightbox.classList.remove('lightbox__active'), 200);
    } 
    
    document.querySelector('body').style.overflow = 'unset';

    setTimeout(
      () => document.querySelector('.lightbox__content').style.opacity = 0,
      60
    );
    setTimeout(() => {
      document.querySelector('.lightbox__content').remove();
    },
      210
    );

    this.closeBtn = undefined;
    
    this.leftButton.replaceWith(this.leftButton.cloneNode(true));
    this.rightButton.replaceWith(this.rightButton.cloneNode(true));

    this.leftButton = document.querySelector('.lightbox__left');
    this.rightButton = document.querySelector('.lightbox__right');
  }
  
}

export default Lightbox;

