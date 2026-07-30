class RevealOnScroll{

      constructor() {
        this.itemToReveal = document.querySelectorAll(".feature-item");
        this.hideInitially();
        this.events();
      }

      events() {
        window.addEventListener("scroll", () => {
            console.log("scroll function ran");
          this.itemToReveal.forEach(el => {
            this.calculateIfScrolledTo(el);
          })  
        })

      }

      calculateIfScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().top/window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add("reveal-item__is-visible");
        }
      }

    hideInitially() {
        this.itemToReveal.forEach(el => el.classList.add("reveal-item"));

      }      

}


export default RevealOnScroll;