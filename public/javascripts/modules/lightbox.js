import lightboxItems from './portfoliodata'

class Lightbox {
  constructor() {
    this.lightbox = document.querySelector('.lightbox');
    this.closeBtn = undefined;
    this.portfolioItems = document.querySelectorAll('.portfolio__item');
    this.prevButton = window.innerWidth > 600 ? document.querySelector('.lightbox__left') : document.querySelector('.lightbox__up');
    this.nextButton = window.innerWidth > 600 ? document.querySelector('.lightbox__right') : document.querySelector('.lightbox__down');
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

  openThatTrash(item, direction) {
    this.previous = item.previousElementSibling;
    this.next = item.nextElementSibling;
    document.querySelector('body').style.overflow = 'hidden';
    this.lightbox.insertAdjacentHTML('afterbegin', `${lightboxItems[item.id]}`);
    this.lightbox.style.opacity = 1;
    this.lightbox.classList.add('lightbox__active');
    
    switch (direction) {
      case 'fromLeft':
        document.querySelector('.lightbox__content').style.transform = 'translateX(-500px)';
        break;
      case 'fromRight':
        document.querySelector('.lightbox__content').style.transform = 'translateX(500px)';
        break;
      case 'fromUp':
        document.querySelector('.lightbox__content').style.transform = 'translateY(-500px)';
        break;
      case 'fromDown':
        document.querySelector('.lightbox__content').style.transform = 'translateY(500px)';
        break;
    }


    setTimeout(() => {
      document.querySelector('.lightbox__content').style.transform = '';
      document.querySelector('.lightbox__content').style.opacity = 1;
    }, 250)

    
    if (!this.previous) {
      this.prevButton.style.display = 'none'
    } else {
      this.prevButton.style.display = 'unset'
    }

    if (!this.next) {
      this.nextButton.style.display = 'none'
    } else {
      this.nextButton.style.display = 'unset'
    }

    this.prevButton.addEventListener('click', ({target}) => { 
      this.closeThat(target.className);
      let direction = window.innerWidth > 600 ? 'fromLeft' : 'fromUp';
      setTimeout(() => {
        this.openThatTrash(this.previous, direction);
      }, 250)
    })
    
    this.nextButton.addEventListener('click', ({target}) => {
      this.closeThat(target.className);
      let direction = window.innerWidth > 600 ? 'fromRight' : 'fromDown';
      setTimeout(() => {
        this.openThatTrash(this.next, direction);
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
      document.querySelector('body').style.overflow = 'unset';
    } 

    if (target.includes('lightbox__left')) {document.querySelector('.lightbox__content').style.transform = 'translateX(500px)'} 

    if (target.includes('lightbox__right')) {document.querySelector('.lightbox__content').style.transform = 'translateX(-500px)'} 

    if (target.includes('lightbox__up')) {document.querySelector('.lightbox__content').style.transform = 'translateY(500px)'} 

    if (target.includes('lightbox__down')) {document.querySelector('.lightbox__content').style.transform = 'translateY(-500px)'} 
    

    document.querySelector('.lightbox__content').style.opacity = 0

    setTimeout(() => document.querySelector('.lightbox__content').remove(),
      250
    );

    this.closeBtn = undefined;
    
    this.prevButton.replaceWith(this.prevButton.cloneNode(true));
    this.nextButton.replaceWith(this.nextButton.cloneNode(true));

    this.prevButton = window.innerWidth > 600 ? document.querySelector('.lightbox__left') : document.querySelector('.lightbox__up');
    this.nextButton = window.innerWidth > 600 ? document.querySelector('.lightbox__right') : document.querySelector('.lightbox__down');
  }
  
}

export default Lightbox;

