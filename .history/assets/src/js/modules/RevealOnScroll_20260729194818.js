class RevealOnScroll{

      constructor() {
        this.itemToReveal = document.querySelectorAll(".feature-item");
        this.hideInitially();
        this.events();
      }

      events () {
        window.addEventListener("scroll", () => {
          this.itemToReveal.forEach(el => {
            this.calculateIfScrolledTo(el);
          })  
        })

      }

      hideInitially() {
        this.itemToReveal.forEach(el => el.classList.add("reveal-item"));

      }

      calculateIfScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().y/window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add("reveal-item__is-visible");
        }
      }

}


export default RevealOnScroll;