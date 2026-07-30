import { throttle } from "lodash";
import { debounce } from "lodash";

class RevealOnScroll{

      constructor(els, thresholdPercent) {
        this.itemToReveal = els;
        this.browserHeight = window.innerHeight;
        this.threshHoldPercent = thresholdPercent;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
        this.events();
      }

      events() {
        window.addEventListener("scroll",this.scrollThrottle);

        window.addEventListener("resize", debounce(() => {
      console.log("Resize just ran")            
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
        if(window.scrollY + this.browserHeight > el.offsetTop) {
      console.log("Element was calculated")            
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