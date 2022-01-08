export default class SelectSize {
  constructor(data) {
    this.data = data;
    this.init();
  }

  init() {
    const pizzaContainer = document.getElementsByClassName('assortment__item');
    [...pizzaContainer].forEach((pizzaContainerItem) => {
      pizzaContainerItem.addEventListener('click', ({ target }) => {
        this.renderPrice(target, pizzaContainerItem);
      });
    });
  }

  renderPrice(target, pizzaContainerItem) {
    const pizzaNameElement = pizzaContainerItem.querySelector('.assortment__pizza-name');
    const pizzaName = pizzaNameElement.textContent;
    const pizzaObject = this.data.find((item) => item.title === pizzaName);

    const isSizeItemTarget = target.classList.contains('pizza-information__size-item');

    if (isSizeItemTarget) {
      const choosenSize = target.textContent;
      const returnPrice = pizzaObject.price[choosenSize];

      const pizzaPriceElement = pizzaContainerItem.querySelector('.assortment__price');

      pizzaPriceElement.textContent = `от ${returnPrice}`;
    }
  }
}
