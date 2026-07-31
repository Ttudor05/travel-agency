import { throttle } from "lodash";
import { debounce } from "lodash";


class StickyHeader{
      constructor() {
        this.siteHeader = document.querySelector(".site-header");
        this.pageSections = document.querySelectorAll(".page-section");
        this.events();
      }  

      events(){
        window.addEventListener("scroll",throttle(() => this.runOnScroll(),200))
      }

      runOnScroll() {
        if(window.scrollY > 60) {
            this.siteHeader.classList.add("site-header__dark");
        } else {
            this.siteHeader.classList.remove("site-header__dark");  
        }

        this.pageSections.forEach(el => this.calSection(el));
      }

      calSection(el) {
            if(window.scrollY + window.innerHeight > el.offsetTop && window.scrollY  < el.offsetTop + el.offsetHeight) {

            }
      }
}

export default StickyHeader;