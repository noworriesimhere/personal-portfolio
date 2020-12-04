import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

class heroAnim {
    constructor() {
        this.adjective = document.querySelector(".intro__text--adjective");
        this.verb = document.querySelector(".intro__text--verb");
        this.noun = document.querySelector(".intro__text--noun");
        this.adjectives = ['Beautifully', 'Immaculately', 'Brilliantly', 'Expertly', 'Superbly', 'Excellently', 'Sublimely', 'Alluringly', 'Exquisitely', 'Artfully'];
        this.verbs = ['Designed', 'Invented', 'Devised', 'Formulated', 'Calculated', 'Constructed', 'Fashioned', 'Created', 'Crafted'];
        this.nouns = ['Websites', 'Ideas', 'Web', 'Sites'];
        function chooseNewWord(array, element) {
            let rand = Math.floor(gsap.utils.random(0, array.length));
            gsap.to(element, {duration: 1, text: array[rand]});
        }
        this.makeAdjective = () => chooseNewWord(this.adjectives, this.adjective);
        this.makeVerb = () => chooseNewWord(this.verbs, this.verb);
        this.makeNoun = () => chooseNewWord(this.nouns, this.noun);
        this.oneOfThree = [this.makeAdjective, this.makeVerb, this.makeNoun];
        this.events();
    }

    events() {
        this.makeAdjective();
        this.makeVerb();
        this.makeNoun();
        setInterval(() => {
            this.oneOfThree[gsap.utils.random(0, 1, 1)]();
        }, 2000);
    }

}

export default heroAnim;







