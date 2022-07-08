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

    this.goodsInfoInBasket = {
      id: {},
    };

    this.idOfAddedGoods = [];
    this.sum = 0;
    this.addedPizza = [];

    this.amountGoodsItem = document.querySelector(amountSelector);
    this.sumBasket = document.querySelector(sumBasketSelector);

    const addedStringIdCollection = localStorage.getItem('idOfAddedGoods');
    const arrayOfId = addedStringIdCollection?.split(',');
    this.setInfoFromLocalStorage();

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);
    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      arrayOfId?.forEach((addedPizzaId) => {
        const isAdded = addedPizzaId === assortmentItem.id;

        if (isAdded) {
          assortmentButton.classList.add(this.params.assortmentActiveButtonSelector);
          assortmentButton.innerText = 'Удалить';
        }
      });

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
    this.setInfoFromLocalStorage();
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
    this.idOfAddedGoods.push(assortmentItem.id);
    this.sum += price;
  }

  removeFromBasket(assortmentItem, price) {
    const index = this.idOfAddedGoods.findIndex((item) => item === assortmentItem.id);
    this.idOfAddedGoods.splice(index, 1);
    this.sum -= price;
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
}
