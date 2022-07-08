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

    this.goodsInfoInBasket = new Set();

    this.idOfAddedGoods = [];
    this.sum = 0;
    this.addedPizza = [];

    this.amountGoodsItem = document.querySelector(amountSelector);
    this.sumBasket = document.querySelector(sumBasketSelector);

    const addedStringIdCollection = localStorage.getItem('idOfAddedGoods');
    this.arrayOfId = addedStringIdCollection?.split(',');
    this.setInfoFromLocalStorage();

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);

    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      this.checkAddedPizza(assortmentItem, assortmentButton);

      const priceElem = assortmentItem.querySelector(priceSelector);
      this.price = Number(priceElem.id);

      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));
    });
  }

  clickHandler(target, assortmentButton, assortmentItem) {
    const isButton = target === assortmentButton;
    if (!isButton) return;

    this.switchAddBtnState(assortmentButton, assortmentItem, this.price);
    this.setInfoToLocalStorage();
    this.setInfoFromLocalStorage();
  }

  switchAddBtnState(assortmentButton, assortmentItem) {
    assortmentButton.classList.toggle(this.params.assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(this.params.assortmentActiveButtonSelector);

    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
      this.addToBasket(assortmentItem, this.price);
    } else {
      assortmentButton.innerText = '+Добавить';
      this.removeFromBasket(assortmentItem, this.price);
    }
  }

  addToBasket(assortmentItem) {
    this.idOfAddedGoods.push(assortmentItem.id);
    // Добавлять свой объект с данными пиццы
    this.goodsInfoInBasket.add(assortmentItem);
    this.sum += this.price;
  }

  removeFromBasket(assortmentItem) {
    const index = this.idOfAddedGoods.findIndex((item) => item === assortmentItem.id);
    this.idOfAddedGoods.splice(index, 1);
    // Добавлять свой объект с данными пиццы
    this.goodsInfoInBasket.delete(assortmentItem);
    this.sum -= this.price;
  }

  setInfoToLocalStorage() {
    const idCollection = this.idOfAddedGoods.join(',');
    localStorage.setItem('idOfAddedGoods', idCollection);
    localStorage.setItem('sum', this.sum);
    localStorage.setItem('amountGoods', this.idOfAddedGoods.length);
  }

  setInfoFromLocalStorage() {
    const amountAddedPizza = localStorage.getItem('amountGoods');
    const sum = Number(localStorage.getItem('sum'));

    if (!sum || !amountAddedPizza) {
      this.sum = 0;
      this.sumBasket.textContent = 0;
      this.amountGoodsItem.textContent = 0;
    } else {
      this.sum = sum;
      this.sumBasket.textContent = sum;
      this.amountGoodsItem.textContent = amountAddedPizza;
    }
  }

  checkAddedPizza(assortmentItem, assortmentButton) {
    this.arrayOfId?.forEach((addedPizzaId) => {
      const isAdded = addedPizzaId === assortmentItem.id;

      if (isAdded) {
        assortmentButton.classList.add(this.params.assortmentActiveButtonSelector);
        assortmentButton.innerText = 'Удалить';
      }
    });
  }
}
