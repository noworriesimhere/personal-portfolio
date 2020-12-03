class Fader {
    constructor() {
        this.overlay = document.querySelector(".intro__video-overlay")
        this.header = document.querySelector(".header")
        this.events();
    }

    events() {
        window.addEventListener("scroll", ()=>{
            let rate = window.pageYOffset/window.innerHeight;
        
            if(window.pageYOffset > window.innerHeight) {
                this.overlay.style.opacity = 1;
            } else if (window.pageYOffset > window.innerHeight*.6) {
                this.header.style.opacity = 1;
            } else {
                this.overlay.style.opacity = rate*2;
                this.header.style.opacity = 0;
            }
        })
    }
}


export default Fader;