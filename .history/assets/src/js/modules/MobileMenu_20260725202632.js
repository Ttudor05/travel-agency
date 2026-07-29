class MobileMenu {

    constructor (){
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content"); 
        this.mnuSlideContainer = document.querySelector(".site-header__mnu-slide-container");
        
//---   call class events        
        this.events();
 
    }

    events() {
          this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
       
  //     this.menuContent.classList.toggle("site-header__menu-content__is-isible"); 
 //      this.siteHeader.classList.toggle("site-header__is-expanded"); 
       this.mnuSlideContainer.classList.toggle("is-open");
      
    }
    
}

export default MobileMenu;