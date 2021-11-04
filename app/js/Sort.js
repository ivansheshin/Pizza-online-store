export class Sort {
  constructor(container, sortContainer) {
    this.container = container;
    this.sortContainer = sortContainer;
    this.sortMenuSelector = 'sort__list';
    this.init();
  }

  init() {
    this.changeName();
    this.openAndCloseMenu();



  }

  openMenu() {
    const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);
    menuList.classList.add(`${this.sortMenuSelector}_open`);

  }
  closeMenu() {
    const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);
    menuList.classList.remove(`${this.sortMenuSelector}_open`);

  }

  openAndCloseMenu(){
    this.sortContainer.addEventListener('click', ()=>{

      const menuListOpen = this.sortContainer.querySelector(`.${this.sortMenuSelector}_open`);

      if(!menuListOpen) this.openMenu()
      else this.closeMenu();

    })
  }

  changeName(){

    const menuItems = this.sortContainer.querySelectorAll('.sort__item');
    const menuButton = this.sortContainer.querySelector('.sort__choosen');

    menuItems.forEach(menuItem => menuItem.addEventListener('click', ({target})=>{
      menuButton.textContent = target.textContent;
    }))
  }

}
