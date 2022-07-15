const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
  amountSelector: '.order__amount',
  sumBasketSelector: '.order__price',
  priceSelector: '.assortment__price',
  pizzaNameSelector: '.assortment__pizza-name',
  pizzaSelectedTypeSelector: '.pizza-information__type-item_selected',
  pizzaSelectedSizeSelector: '.pizza-information__size-item_selected',
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

    this.idCollection = [];
    this.sum = 0;
    this.puzzaCollection = [];
    this.addedPizza = [];

    this.amountGoodsItem = document.querySelector(amountSelector);
    this.sumBasket = document.querySelector(sumBasketSelector);

    this.setIdCollectionFromStorage();
    this.setBasketInfoFromStorage();

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);
    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      this.initBtnState(assortmentItem, assortmentButton);

      const priceElem = assortmentItem.querySelector(priceSelector);
      this.price = Number(priceElem.id);

      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));
      this.savePizzaCollectionToStorage(assortmentItem);
    });
  }

  clickHandler(target, assortmentButton, assortmentItem) {
    const isButton = target === assortmentButton;

    if (!isButton) return;

    this.switchAddBtnState(assortmentButton, assortmentItem);
    this.setBasketInfoToStorage();
    this.setBasketInfoFromStorage(assortmentItem);
  }

  switchAddBtnState(assortmentButton, assortmentItem) {
    assortmentButton.classList.toggle(this.params.assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(this.params.assortmentActiveButtonSelector);

    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
      this.addToBasket(assortmentItem);
    } else {
      assortmentButton.innerText = '+Добавить';
      this.removeFromBasket(assortmentItem);
    }
  }

  addToBasket(assortmentItem) {
    this.idCollection.push(assortmentItem.id);
    this.sum += this.price;
  }

  removeFromBasket(assortmentItem) {
    const index = this.idCollection.findIndex((item) => item === assortmentItem.id);
    this.idCollection.splice(index, 1);
    this.sum -= this.price;
  }

  setBasketInfoToStorage() {
    const idCollectionString = this.idCollection.join(',');
    localStorage.setItem('idCollection', idCollectionString);
    localStorage.setItem('basketSum', this.sum);
    localStorage.setItem('amountGoods', this.idCollection.length);
  }

  setBasketInfoFromStorage(assortmentItem = null) {
    const sum = localStorage.getItem('basketSum');
    const amountAddedPizza = localStorage.getItem('amountGoods');
    if (!sum || !amountAddedPizza) return;

    this.sum = Number(sum);
    this.sumBasket.textContent = sum;
    this.amountGoodsItem.textContent = amountAddedPizza;
  }

  initBtnState(assortmentItem, assortmentButton) {
    const idCollectionString = localStorage.getItem('idCollection');
    const idCollectionArray = idCollectionString?.split(',');
    const isAddedId = idCollectionArray?.includes(assortmentItem.id);

    if (isAddedId) {
      assortmentButton.classList.add(this.params.assortmentActiveButtonSelector);
      assortmentButton.innerText = 'Удалить';
    }
  }

  setIdCollectionFromStorage() {
    const initPizzaId = localStorage.getItem('idCollection');
    if (initPizzaId) {
      const initPizzaIdArray = initPizzaId.split(',');
      this.idCollection = this.idCollection.concat(initPizzaIdArray);
    }
  }

  savePizzaCollectionToStorage(assortmentItem) {
    const { pizzaNameSelector, pizzaSelectedTypeSelector, pizzaSelectedSizeSelector } = this.params;
    const isAdded = this.idCollection?.includes(assortmentItem.id);

    if (isAdded) {
      const pizzaName = assortmentItem.querySelector(pizzaNameSelector);
      const pizzaSelectedSize = assortmentItem.querySelector(pizzaSelectedSizeSelector);
      const pizzaSelectedType = assortmentItem.querySelector(pizzaSelectedTypeSelector);
      this.addedPizza.push({
        name: pizzaName.textContent,
        size: pizzaSelectedSize.textContent,
        type: pizzaSelectedType.textContent,
      });
    }
  }
}
