import { forEach } from 'lodash';
import '../styles/styles.scss';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu();
if (module.hot) {
    module.hot.accept();
}
