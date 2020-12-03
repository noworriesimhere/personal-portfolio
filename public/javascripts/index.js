import '../stylesheets/styles.css';
import Navbar from './modules/navbar';
import Video from './modules/video';
import Gsap from './modules/gsap'

let navbar = new Navbar;
let video = new Video;
let gsap = new Gsap;

if (module.hot) {
    module.hot.accept()
}

