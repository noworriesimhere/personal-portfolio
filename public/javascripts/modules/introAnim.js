import { gsap } from "gsap";

class Gsap {
    constructor() {
        this.tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
        this.events();
    }
    events() {
        this.tl.to('.text', {y:'0%', duration: .75, stagger: .5});
        this.tl.to('.animation__slider', {x:'-100%', duration: 1, delay: 0.5 });
        this.tl.to('.animation', {x: '-100%', duration: 1}, "-=1");
        this.tl.to('.intro__text', {y:'0%', opacity: 1, duration: .75});
        this.tl.to('.intro__button', {y:'50%', opacity: 1, duration: .75})
    }
    
}

export default Gsap;


