const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
  amountSelector: '.order__amount',
  sumBasketSelector: '.order__price',
  priceSelector: '.assortment__price',
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
      priceSelector,
      sumBasketSelector,
      amountSelector,
    } = this.params;

    this.addedPizza = [];
    this.sum = 0;
    this.addedState = [];

    this.amountGoodsItem = document.querySelector(amountSelector);
    this.sumBasket = document.querySelector(sumBasketSelector);

    this.setInfoBasket();

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);
    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      this.initBtnState(assortmentItem, assortmentButton);

      const priceElem = assortmentItem.querySelector(priceSelector);
      const price = Number(priceElem.id);

      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem, price));
    });
  }

  clickHandler(target, assortmentButton, assortmentItem, price) {
    const isButton = target === assortmentButton;

    if (!isButton) return;

    this.switchAddBtnState(assortmentButton, assortmentItem, price);
    this.setInfoToLocalStorage();
    this.setInfoBasket();
  }

  switchAddBtnState(assortmentButton, assortmentItem, price) {
    assortmentButton.classList.toggle(this.params.assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(this.params.assortmentActiveButtonSelector);

    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
      this.addToBasket(assortmentItem, price);
    } else {
      assortmentButton.innerText = '+Добавить';
      this.removeFromBasket(assortmentItem, price);
    }
  }

  addToBasket(assortmentItem, price) {
    this.addedPizza.push(assortmentItem.id);
    this.sum += price;
  }

  removeFromBasket(assortmentItem, price) {
    const index = this.addedPizza.findIndex((item) => item === assortmentItem.id);
    this.addedPizza.splice(index, 1);
    this.sum -= price;
  }

  setInfoToLocalStorage() {
    const idCollection = this.addedPizza.join(',');
    localStorage.setItem('PizzaId', idCollection);
    localStorage.setItem('BasketSum', this.sum);
    localStorage.setItem('AmountGoods', this.addedPizza.length);
  }

  setInfoBasket() {
    const sum = localStorage.getItem('BasketSum');
    const amountAddedPizza = localStorage.getItem('AmountGoods');
    if (!sum || !amountAddedPizza) return;

    this.sum = Number(sum);
    this.sumBasket.textContent = sum;
    this.amountGoodsItem.textContent = amountAddedPizza;
  }

  initBtnState(assortmentItem, assortmentButton) {
    const idCollectionString = localStorage.getItem('PizzaId');
    const idCollectionArray = idCollectionString.split(',');
    const isAddedId = idCollectionArray.includes(assortmentItem.id);

    if (isAddedId) {
      assortmentButton.classList.add(this.params.assortmentActiveButtonSelector);
    }
  }
}
