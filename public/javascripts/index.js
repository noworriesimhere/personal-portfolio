import '../stylesheets/styles.css';

import Navbar from './modules/navbar';
import Fader from './modules/fader';
import IntroAnim from './modules/introAnim'
import HeroAnim from './modules/heroAnim';


let navbar = new Navbar;
let fader = new Fader;
let introAnim = new IntroAnim;
let heroAnim = new HeroAnim;

if (module.hot) {
    module.hot.accept()
}

// let adjective = document.querySelector(".intro__text--adjective");
// let verb = document.querySelector(".intro__text--verb");
// let noun = document.querySelector(".intro__text--noun");


// const adjectives = ['Beautifully', 'Immaculately', 'Brilliantly', 'Expertly', 'Superbly', 'Excellently', 'Sublimely', 'Alluringly', 'Exquisitely', 'Artfully'];
// const verbs = ['Designed', 'Invented', 'Devised', 'Formulated', 'Calculated', 'Constructed', 'Fashioned', 'Created', 'Crafted'];
// const nouns = ['Websites', 'Ideas', 'Web', 'Sites']

// function chooseNewWord(array, element) {
//     let rand = getRandomInt(array.length);
//     gsap.to(element, {duration: 1, text: array[rand]});
// }

// const makeAdjective = () => chooseNewWord(adjectives, adjective);
// const makeVerb = () => chooseNewWord(verbs, verb);
// const makeNoun = () => chooseNewWord(nouns, noun);

// const oneOfThree = [
//     makeAdjective,
//     makeVerb,
//     makeNoun
// ]

// makeAdjective();
// makeVerb();
// makeNoun();

// setInterval(() => {
//     let rand = gsap.utils.random(0, 1, 1);
//     oneOfThree[rand]();
// }, 3000);
