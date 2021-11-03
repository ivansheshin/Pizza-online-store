export class Sort {
  constructor(container, sortContainer) {
    this.container = container;
    this.sortContainer = sortContainer;
    this.sortMenuSelector = 'sort__list';
    this.init();
  }

  init() {
    const menuItems = this.sortContainer.querySelectorAll('.sort__item');
    menuItems.forEach(menuItem => menuItem.addEventListener('click', ({target})=>{
      this.closeMenu();
    }))


    this.sortContainer.addEventListener('click', ({})=>{
      if(!this.sortContainer.querySelector(`.${this.sortMenuSelector}_open`)) this.openMenu()
      else this.closeMenu()
    })


  }

  openMenu() {
    const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);
    menuList.classList.add(`${this.sortMenuSelector}_open`);

  }
  closeMenu() {
    const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);
    menuList.classList.remove(`${this.sortMenuSelector}_open`);
    // menuList.classList.add('sort__list_open');


  }
  changeName(){

  }

}
