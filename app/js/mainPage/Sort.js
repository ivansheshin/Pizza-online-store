export default class Sort {
  constructor(container, sortContainer) {
    this.container = container;
    this.sortContainer = sortContainer;

    this.sortMenuSelector = 'sort__list';
    this.sortMenuItemSelector = 'sort__item';
    this.sortMenuOpenSelector = 'sort__list_open';
    this.sortMenuButtonSelector = 'sort__button';

    this.pizzaAssortmentListSelector = 'assortment__list';
    this.pizzaAssortmentListNode = document.querySelector(`.${this.pizzaAssortmentListSelector}`);
    this.pizzaNamesSelector = 'assortment__pizza-name';
    this.pizzaPricesSelector = 'assortment__price';

    this.init();
  }

  init() {
    this.changeName();
    this.openAndCloseMenu();
    this.sortByName(this.pizzaAssortmentListNode);
    this.sortByPrice(this.pizzaAssortmentListNode);
  }

  openAndCloseMenu() {
    this.sortContainer.addEventListener('click', () => {
      const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);
      menuList.classList.toggle(this.sortMenuOpenSelector);
    });
  }

  changeName() {
    const menuItems = this.sortContainer.querySelectorAll(`.${this.sortMenuItemSelector}`);
    const menuButton = this.sortContainer.querySelector(`.${this.sortMenuButtonSelector}`);

    menuItems.forEach((menuItem) => menuItem.addEventListener('click', ({
      target,
    }) => {
      menuButton.textContent = target.textContent;
    }));
  }

  sortByName(pizzaAssortmentNode) {
    const pizzaNames = this.pizzaAssortmentListNode.querySelectorAll(`.${this.pizzaNamesSelector}`);

    const sortedPizzaNames = [...pizzaNames]
      .sort((firstItem, secondItem) => firstItem.textContent.localeCompare(secondItem.textContent));

    const pizzaItems = sortedPizzaNames.map((item) => item.parentNode);
    const sortNameCriterion = this.sortContainer.querySelector('#name');

    Sort.handleTypeClick(sortNameCriterion, pizzaAssortmentNode, pizzaItems);
  }

  sortByPrice(pizzaAssortmentNode) {
    const pizzaPrices = document.getElementsByClassName(`${this.pizzaPricesSelector}`);

    const sortedPizzaPrices = [...pizzaPrices].sort((firstItem, secondItem) => {
      const firsItemNum = Number(firstItem.textContent.match(/\d+/));
      const secondItemNum = Number(secondItem.textContent.match(/\d+/));

      return firsItemNum - secondItemNum;
    });

    const pizzaItems = sortedPizzaPrices
      .map((item) => item.parentNode)
      .map((innerItem) => innerItem.parentNode);

    const sortPriceCriterion = this.sortContainer.querySelector('#price');

    Sort.handleTypeClick(sortPriceCriterion, pizzaAssortmentNode, pizzaItems);
  }

  static handleTypeClick(sortCriterion, pizzaAssortmentNode, parentNodeList) {
    sortCriterion.addEventListener('click', () => pizzaAssortmentNode.append(...parentNodeList));
  }
}
