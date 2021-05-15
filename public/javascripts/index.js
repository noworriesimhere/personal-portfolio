import '../stylesheets/styles.css';

import Navbar from './modules/navbar';
import Fader from './modules/fader';
import IntroAnim from './modules/introAnim';
import HeroAnim from './modules/heroAnim';
import Lightbox from './modules/lightbox';


let navbar = new Navbar();
let fader = new Fader();
let introAnim = new IntroAnim();
let heroAnim = new HeroAnim();
let lightbox = new Lightbox();

if (module.hot) {
  module.hot.accept();
}
