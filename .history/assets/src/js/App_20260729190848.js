import { forEach } from 'lodash';
import '../styles/styles.scss';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';


if (module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu();
