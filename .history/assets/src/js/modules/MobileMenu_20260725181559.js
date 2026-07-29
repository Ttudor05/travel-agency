class MobileMenu {

    constructor (){
        this.menuIcon = document.querySelector("site-header__menu-icon");

        this.events();

    }

    events() {

          this.menuIcon("click", ()=> this.toggleTheMenu());

    }

    toggleTheMenu() {
        console.log("Hooray")
    }
    
}

export default MobileMenu;