class Video {
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
                this.header.style.opacity = 1;
            } else {
                this.overlay.style.opacity = rate*3;
                this.header.style.opacity = 0;
            }
        })
    }
}


export default Video;