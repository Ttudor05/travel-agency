import { forEach } from 'lodash';
import '../styles/styles.scss';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll(".feature-item"));
new RevealOnScroll(document.querySelectorAll(".testimonial"));

let mobileMenu = new MobileMenu();
if (module.hot) {
    module.hot.accept();
}
