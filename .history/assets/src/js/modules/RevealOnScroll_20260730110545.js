import { throttle } from "lodash";

class RevealOnScroll{

      constructor() {
        this.itemToReveal = document.querySelectorAll(".feature-item");
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
        this.events();
      }

      events() {
        window.addEventListener("scroll",this.scrollThrottle)

      }

      calcCaller() {
            console.log("scroll function ran");
            this.itemToReveal.forEach(el => {
            if(el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
          })  
      }

      calculateIfScrolledTo(el) {
        if(window.scrolly + this.browserHeight > Element.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().top/this.browserHeight) * 100;
                if (scrollPercent < 75) {
                    el.classList.add("reveal-item__is-visible");
                    el.isRevealed = true;
                    if (el.isLastItem) {
                        window.removeEventListener("scroll", this.scrollThrottle);       
                    }
                }            

        }
 
      }

    hideInitially() {
        this.itemToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isRevealed = false;
        });

        this.itemsToReveal = [this.itemToReveal.length - 1].isLastItem = true;
      }      

}


export default RevealOnScroll;