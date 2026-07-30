class RevealOnScroll{

      constructor() {
        this.itemToReveal = document.querySelectorAll(".feature-item");
        this.hideInitially();
        this.events();
      }

      events{
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
        console.log(el.getBindingClientRect().y);
      }

}


export default RevealOnScroll;