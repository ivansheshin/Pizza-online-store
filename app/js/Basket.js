const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
  amountSelector: '.order__amount',
  sumBasketSelector: '.order__price',
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
      amountSelector,
    } = this.params;

    this.addedPizza = [];
    this.amountGoodsItem = document.querySelector(amountSelector);

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);

    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));
    });
  }

  clickHandler(target, assortmentButton, assortmentItem) {
    const isButton = target === assortmentButton;

    if (!isButton) return;

    this.switchAddBtnState(assortmentButton, assortmentItem);
    this.setInfoToLocalStorage();
    this.updateInfoBasket();
  }

  switchAddBtnState(assortmentButton, assortmentItem) {
    const { assortmentActiveButtonSelector } = this.params;

    assortmentButton.classList.toggle(assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(assortmentActiveButtonSelector);

    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
      this.addToBasket(assortmentItem);
    } else {
      assortmentButton.innerText = '+Добавить';
      this.removeFromBasket(assortmentItem);
    }
  }

  addToBasket(assortmentItem) {
    this.addedPizza.push(assortmentItem.id);
  }

  removeFromBasket(assortmentItem) {
    const index = this.addedPizza.findIndex((item) => item === assortmentItem.id);
    this.addedPizza.splice(index, 1);
  }

  setInfoToLocalStorage() {
    const idCollection = this.addedPizza.join(',');
    localStorage.setItem('PizzaId', idCollection);
  }

  updateInfoBasket() {
    const amountAddedPizza = this.addedPizza.length;
    this.amountGoodsItem.textContent = amountAddedPizza;
  }
}
