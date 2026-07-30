import { throttle } from "lodash";
import { debounce } from "lodash";
class RevealOnScroll{

      constructor(el, threshHoldPercent) {
        this.itemToReveal = el;
        this.browserHeight = window.innerHeight;
        this.threshHoldPercent =threshHoldPercent;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
        this.events();
      }

      events() {
        window.addEventListener("scroll",this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
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
                if (scrollPercent < this.threshHoldPercent) {
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