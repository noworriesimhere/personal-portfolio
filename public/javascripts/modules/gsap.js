class Gsap {
    constructor() {
        this.tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
        this.events();
    }
    events() {
        this.tl.to('.text', {y:'0%', duration: 1, stagger: 0.4});
        this.tl.to('.animation__slider', {x:'-100%', duration: 1, delay: 0.5 });
        this.tl.to('.animation', {x: '-100%', duration: 1}, "-=1");
    }
}

export default Gsap;



