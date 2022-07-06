const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
  amountSelector: '.order__amount',
  sumBasketSelector: '.order__price',
  priceSelector: '.assortment__price',
};

export default class Basket {
  constructor(data, params) {
    this.params = {
      ...defaultParams,
      ...params,
    };
    this.data = data;

    console.log(this.data);

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

    this.addedPizzaInfo = {
      id: {},
      sum: 0,
    };

    this.amountGoodsItem = document.querySelector(amountSelector);
    this.sumBasket = document.querySelector(sumBasketSelector);

    this.setInfoFromLocalStorage();

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);
    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
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
    const { assortmentActiveButtonSelector } = this.params;

    assortmentButton.classList.toggle(assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(assortmentActiveButtonSelector);

    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
      this.addToBasket(assortmentItem, price);
    } else {
      assortmentButton.innerText = '+Добавить';
      this.removeFromBasket(assortmentItem, price);
    }
  }

  addToBasket(assortmentItem, price) {
    this.addedPizzaInfo.id[assortmentItem.id] = true;
    this.addedPizzaInfo.sum += price;
  }

  removeFromBasket(assortmentItem, price) {
    delete this.addedPizzaInfo.id[assortmentItem.id];
    this.addedPizzaInfo.sum -= price;
  }

  setInfoToLocalStorage() {
    const modifiedObject = JSON.stringify(this.addedPizzaInfo);
    localStorage.setItem('addedPizzaInfo', modifiedObject);
  }

  setInfoFromLocalStorage() {
    const addedPizzaInfoString = localStorage.getItem('addedPizzaInfo');
    if (!addedPizzaInfoString) return;

    const addedPizzaInfoObject = JSON.parse(addedPizzaInfoString);

    this.sumBasket.textContent = addedPizzaInfoObject.sum;
    this.amountGoodsItem.textContent = addedPizzaInfoObject.id.length;
  }
}
