import '../stylesheets/styles.css';
import Navbar from './modules/navbar';
import Fader from './modules/fader';
import Gsap from './modules/gsap'

let navbar = new Navbar;
let fader = new Fader;
let gsap = new Gsap;

if (module.hot) {
    module.hot.accept()
}
