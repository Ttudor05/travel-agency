class RevealOnScroll{

      constructor() {
        this.itemToReveal = document.querySelectorAll(".feature-item");
        this.hideInitially();

      }

      hideInitially() {
        this.itemToReveal.forEach(el => el.classList.add("reveal-item"));

      }

}


export default RevealOnScroll;