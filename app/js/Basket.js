const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
  amountGoodsSelector: 'order__quantity',
};

export default class Basket {
  constructor(params) {
    this.params = {
      ...defaultParams,
      ...params,
    };

    this.init();
  }

  init() {
    const {
      assortmentItemSelector,
      assortmentButtonSelector,
    } = this.params;

    this.addedPizza = [];

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);

    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));
    });
  }

  clickHandler(target, assortmentButton, assortmentItem) {
    const isButton = target === assortmentButton;

    if (!isButton) return;

    const { assortmentActiveButtonSelector, amountGoods } = this.params;

    assortmentButton.classList.toggle(assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(assortmentActiveButtonSelector);

    Basket.changeButton(assortmentButton, isAdded);
    if (isAdded) {
      this.addToBasket(assortmentItem);
    } else {
      this.removeFromBasket(assortmentItem);
    }

    const idCollection = this.addedPizza.join(',');
    localStorage.setItem('PizzaId', idCollection);
  }

  static changeButton(assortmentButton, isAdded) {
    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
    } else {
      assortmentButton.innerText = '+Добавить';
    }
  }

  addToBasket(assortmentItem) {
    this.addedPizza.push(assortmentItem.id);
  }

  removeFromBasket(assortmentItem) {
    const index = this.addedPizza.findIndex((item) => item === assortmentItem.id);
    this.addedPizza.splice(index, 1);
  }
}
